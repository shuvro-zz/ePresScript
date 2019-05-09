import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Snackbar,
  withStyles,
  SnackbarContent,
  Slide,
} from '@material-ui/core';

import classNames from 'classnames';
import { closeSnackBar } from '../features/ui';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  snackbar: {
    marginTop: 10,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
});
const mapStateToProps = state => ({
  open: state.uiReducer.snackBarOpen,
  variant: state.uiReducer.snackBarVariant,
});

const mapDispatchToProps = {
  closeSnackBarAlias: closeSnackBar,
};

class CustomSnackBar extends PureComponent {

  render() {
    const {
      classes,
      variant,
      open,
      message,
      closeSnackBarAlias,
    } = this.props;

    const messageCatch = message === undefined ? 'Service Unavailable, Try Again Later!' : message;

    return (
      <Slide
        in={open}
        direction="down"
      >
        <Snackbar
          open={open}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={4000}
          onClose={closeSnackBarAlias}
          className={classes.snackbar}
        >
          <SnackbarContent
            className={classNames(classes[variant])}
            message={messageCatch}
          />
        </Snackbar>
      </Slide>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CustomSnackBar));
