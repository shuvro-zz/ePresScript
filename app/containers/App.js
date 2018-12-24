// // @flow
// import * as React from 'react';
// import Sidebar from "../components/DashboardItems";
// import AppBar from "../components/AppBar";
// import Provider from "react-redux/es/components/Provider";
// import {ConnectedRouter} from "connected-react-router";
// import routes from "../Routes";
// import PropTypes from "prop-types";
// import connect from "react-redux/es/connect/connect";
// import Root from "../components/Root";
// import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";
// import type {Store} from "../reducers/types";
// import {withStyles} from "@material-ui/core";
// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   content: {
//     marginTop: 64,
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//   },
// });
// type Props = {
//   store: Store,
//   history: {}
// };
// const mapStateToProps = state => ({
//   authentication: state.authentication
// });
//
// class App extends React.Component<Props> {
//   render() {
//     console.log(this.props);
//     const { loggedIn} = this.props.authentication.loggedIn;
//     const {store , history, classes} = this.props;
//     return (
//       <div className={classes.root}>
//         {loggedIn // render the bars if we're logged in
//         && (
//           <div>
//             <Sidebar />
//             <AppBar />
//           </div>
//         )
//         }
//         <main className={classes.content}>
//           <Provider store={store}>
//             <ConnectedRouter history={history}>
//               {routes}
//             </ConnectedRouter>
//           </Provider>
//         </main>
//       </div>
//
//     );
//   }
// }
// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };
// export default connect(mapStateToProps)(withStyles(styles)(App)) ;
