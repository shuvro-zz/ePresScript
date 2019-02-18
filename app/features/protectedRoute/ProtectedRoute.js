import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
});

class ProtectedRoute extends PureComponent {
  // if the user is logged in , we're getting the component we want
  // if not, we're redirected to the login
  render() {
    const {
      component: Component,
      loggedIn,
      ...rest
    } = this.props;
console.log(this.props);
    return (
      <Route
        {...rest}
        render={props => (loggedIn
          ? (
            <Component {...props} />
          )
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          ))
        }
      />
    );
  }
}

export default connect(mapStateToProps, null)(ProtectedRoute);
