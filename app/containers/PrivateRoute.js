import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

// import { checkToken } from '../../features/security';
//
// const mapDispatchToProps = {
//   checkToken,
// };

const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
});

class PrivateRoute extends PureComponent {
  // if the access token is valid, we're getting the component we want
  // if not, we're redirected to the login
  render() {
    const {
      component: Component,
      Page,
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

export default connect(mapStateToProps, null)(PrivateRoute);
