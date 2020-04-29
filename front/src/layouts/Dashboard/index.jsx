import React, { Component, Fragment } from "react";

// Externals
import classNames from "classnames";
import compose from "recompose/compose";
import PropTypes from "prop-types";

// Material helpers
import { withStyles, withWidth } from "@material-ui/core";

// Material components
import { Drawer } from "@material-ui/core";

// Custom components
import { Sidebar, Topbar, Footer } from "./components";
import {
  connectionHub,
  GetNotifications,
  PushNotification,
} from "../../actions/user";

// Component styles
import styles from "./styles";
import { connect } from "react-redux";

const dataPush = [
  {
    id: "DEV716627",
    title: "New order has been received",
    when: "2 hours ago",
    type: "order",
    to: "/orders/DEV730658",
  },
  {
    id: "DEV853890",
    title: "New customer is registered",
    when: "3 hours ago",
    type: "user",
    to: "/users/DEV696649",
  },
  {
    id: "DEV897704",
    title: "Product has been approved",
    when: "1 day ago",
    type: "product",
    to: "/products/DEV654476",
  },
  {
    id: "DEV604714",
    title: "New feature has been added",
    when: "2 day ago",
    type: "feature",
    to: "/features",
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ["xs", "sm", "md"].includes(props.width);

    this.state = {
      isOpen: !isMobile,
      user: null,
      connection: null,
    };
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  componentDidMount = async () => {
    const { Get_Notifications, userId, Push_Notification } = this.props;
    let connection = await connectionHub();

    this.setState({ connection }, () => {
      this.state.connection
        .start()
        .then(() => console.log("Connection started!"))
        .catch((err) => console.log(JSON.stringify(err)));
    });

    this.state.connection.on("task", (not) => {
      Push_Notification(not);
    });
    await Get_Notifications(userId);
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      classes,
      width,
      children,
      modules,
      nameProfile,
      notification,
    } = this.props;
    const { isOpen, user } = this.state;

    const isMobile = ["xs", "sm", "md"].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <Topbar
          className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar,
          })}
          isSidebarOpen={isOpen}
          onToggleSidebar={this.handleToggleOpen}
          title={nameProfile}
          notification={notification}
        />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={this.handleClose}
          open={isOpen}
          variant={isMobile ? "temporary" : "persistent"}
        >
          <Sidebar
            className={classes.sidebar}
            userInfo={user}
            modules={modules}
          />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: shiftContent,
          })}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  notification: PropTypes.number.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
  nameProfile: PropTypes.string.isRequired,
  Get_Notifications: PropTypes.func.isRequired,
  Push_Notification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    modules: state.user.modules ? state.user.modules : [],
    nameProfile: state.user.nameProfile,
    userId: state.user.idusers,
    notification: state.user.notification ? state.user.notification : [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  Get_Notifications: (id) => dispatch(GetNotifications(id)),
  Push_Notification: (data) => dispatch(PushNotification(data)),
});

export default compose(
  withStyles(styles),
  withWidth(),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
