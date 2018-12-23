import { push } from 'connected-react-router';

// import { DRAWER_CLOSED } from '../ui/constants';
// import { history } from '../../../store';

// let the store know that the drawer is closed
// const navCloseDrawer = () => ({ type: DRAWER_CLOSED });

// we give it the current location and the requested path
const navigateTo = (path, location) => (dispatch) => {
  console.log("inside navigateTo action");
  console.log(path);
  console.log(location);
  // don't route unnecessarily!
  if (location !== path) dispatch(push(path));
};

export default navigateTo;
