import React, { Component } from "react";

// Externals
import PropTypes from "prop-types";
import classNames from "classnames";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import { Button } from "@material-ui/core";

// Shared components
import { SearchInput } from "../../components";

// Component styles
import styles from "./styles";

//redux
import { connect } from "react-redux";
import compose from "recompose/compose";

class Toolbar extends Component {
  state = {
    values: {
      start: null,
      end: null,
      moneda: null
    }
  };

  handleDateChange = (fieldName, value) => {
    const { values } = this.state;
    values[fieldName] = value;
    this.setState({ values: values });
  };

  onClickButton = () => {
    const { values } = this.state;
    const { onClick } = this.props;

    onClick(values.start, values.end);
  };

  actionButton = action => {
    const { onDelete, onEdit, onAdd } = this.props;
    switch (action) {
      case "edit":
        onEdit();
        break;
      case "add":
        onAdd();
        break;
      case "delete":
        onDelete();
        break;
      default:
        break;
    }
  };

  renderTask = () => {
    const { classes, modules, ModuleId, options } = this.props;
    const myTask = modules.filter(
      item => item.idmodules === ModuleId && item.idtask !== 1
    );
    return myTask.map(item => {
      const isHidden = options.hiddenButtons
        ? options.hiddenButtons[item.taskName]
        : false;
      return (
        <Button
          color="primary"
          size="small"
          variant="outlined"
          onClick={() => {
            this.actionButton(item.taskName);
          }}
          className={classes.btn}
          style={{ display: isHidden ? "none" : "inline-flex" }}
        >
          {item.taskDisplayName}
        </Button>
      );
    });
  };

  render() {
    const { classes, className, options, OnChageSearch } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <div className={classes.row}>
          <span className={classes.spacer} />
          {this.renderTask()}
        </div>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder={options.placeholder ? options.placeholder : ""}
            onChange={event => {
              OnChageSearch(event);
            }}
          />
          <span className={classes.spacer} />
        </div>
      </div>
    );
  }
}
Toolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedUsers: PropTypes.array.isRequired,
  modules: PropTypes.array.isRequired,
  ModuleId: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  OnChageSearch: PropTypes.func,
  options: PropTypes.object
};

Toolbar.defaultProps = {
  selectedUsers: [],
  modules: [],
  ModuleId: null,
  onDelete: () => {},
  onEdit: () => {},
  onAdd: () => {},
  options: {}
};

const mapStateToProps = state => {
  return {
    modules: state.user.modules ? state.user.modules : []
  };
};

const mapDispatchToProps = dispatch => ({});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Toolbar);
