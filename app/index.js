import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/RootPage';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(

    <Root store={store} history={history} />,

  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./containers/Root', () => {
//     // eslint-disable-next-line global-require
//     const NextRoot = require('./containers/RootPage').default;
//     render(
//       <AppContainer>
//         <NextRoot store={store} history={history} />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }
