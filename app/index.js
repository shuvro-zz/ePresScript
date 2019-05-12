import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './containers/RootContainer';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import Provider from "react-redux/es/components/Provider";
const { ipcRenderer } = require('electron');
import systemPrinters from './features/systemEnv';
const store = configureStore();

store.dispatch(systemPrinters(ipcRenderer.sendSync('fetch-system-printers', 'printers')));

//ipcRenderer.removeListener("send-to-randerer");

render(
    <Provider store={store}>
      <AppContainer>
        <RootContainer store={store} history={history} />
      </AppContainer>
    </Provider>,
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
