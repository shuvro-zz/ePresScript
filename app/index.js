import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './containers/RootContainer';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(

  <AppContainer>
    <RootContainer store={store} history={history} />
  </AppContainer>,

  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/RootContainer').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
