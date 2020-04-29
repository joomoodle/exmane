import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Externals
import classNames from "classnames";
import compose from "recompose/compose";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography,
} from "@material-ui/core";

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon,
} from "@material-ui/icons";

// Shared services
//import { connectionHub } from 'services/notification';

// Custom components
import { NotificationList } from "./components";

// Component styles
import styles from "./styles";

class Topbar extends Component {
  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 10,
    notificationsCount: 0,
    notificationsEl: null,
    connection: null,
  };

  componentDidMount = async () => {
    this.signal = true;
  };

  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;
    localStorage.clear();
    localStorage.setItem("isAuthenticated", false);
    history.push("/sign-in");
  };

  handleShowNotifications = (event) => {
    this.setState({
      notificationsEl: event.currentTarget,
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null,
    });
  };

  render() {
    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar,
      notification,
    } = this.props;
    const { notifications, notificationsEl } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <IconButton
              className={classes.notificationsButton}
              onClick={this.handleShowNotifications}
            >
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon
                  style={{
                    color: notifications.length === 0 ? "#8E8686" : "#F71212",
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              onClick={this.handleSignOut}
            >
              <InputIcon />
            </IconButton>
          </Toolbar>
        </div>
        <Popover
          anchorEl={notificationsEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={this.handleCloseNotifications}
          open={showNotifications}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <NotificationList
            notifications={notification}
            onSelect={this.handleCloseNotifications}
          />
        </Popover>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  notification: PropTypes.array.isRequired,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string,
};

Topbar.defaultProps = {
  notification: [],
  onToggleSidebar: () => {},
};

export default compose(withRouter, withStyles(styles))(Topbar);
