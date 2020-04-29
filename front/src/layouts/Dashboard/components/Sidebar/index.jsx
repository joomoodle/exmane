import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

// Material helpers
import { withStyles, Typography } from "@material-ui/core";

// Material components
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  StoreOutlined as StoreIcon,
  AssessmentOutlined as Assessment,
  SendOutlined as Send,
  InboxOutlined as Inbox,
  NotificationsActiveOutlined as Notifi,
  BusinessOutlined as BusinessIcon,
  BugReportOutlined as Bug,
  GroupAdd,
  Commute,
  AccountTree,
  CalendarToday,
  Money,
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

class Sidebar extends Component {
  _renderIcon = (name) => {
    switch (name) {
      case "DashboardIcon":
        return <DashboardIcon />;
      case "PeopleIcon":
        return <PeopleIcon />;
      case "StoreIcon":
        return <StoreIcon />;
      case "AccountBoxIcon":
        return <AccountBoxIcon />;
      case "SettingsIcon":
        return <SettingsIcon />;
      case "Assessment":
        return <Assessment />;
      case "Send":
        return <Send />;
      case "Inbox":
        return <Inbox />;
      case "Notifi":
        return <Notifi />;
      case "BusinessIcon":
        return <BusinessIcon />;
      case "incidents":
        return <Bug />;
      case "client":
        return <GroupAdd />;
      case "seguimiento":
        return <Commute />;
      case "project":
        return <AccountTree />;
      case "calendar":
        return <CalendarToday />;
      case "payment":
        return <Money />;
      default:
        return "";
    }
  };
  _renderMainMenu = () => {
    const { classes, modules } = this.props;
    return modules
      .filter((item) => item.idtask === 1)
      .map((item) => {
        if (item.isMenu) {
          return (
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to={{
                pathname: `../${item.name}`,
              }}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {this._renderIcon(item.icon)}
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.displayName}
              />
            </ListItem>
          );
        }
      });
  };
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.profile}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-edu-2.jpg`}
            alt="#"
            style={{ display: "block", paddingTop: 20 }}
          />
        </div>
        <Typography
          style={{
            color: "#ffffff",
            fontSize: 10,
            marginLeft: 10,
            marginTop: 10,
            fontWeight: 500,
            letterSpacing: 1,
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Menu
        </Typography>
        <List component="div" disablePadding>
          {this._renderMainMenu()}
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
  userInfo: PropTypes.object.isRequired,
};

Sidebar.defaultProps = {
  modules: [],
};
export default withStyles(styles)(Sidebar);
