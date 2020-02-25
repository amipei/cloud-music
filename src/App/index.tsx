import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routeConfig from '../routes';
import store from '../redux';
import './app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          { renderRoutes(routeConfig) }
        </div>
      </HashRouter>
    </Provider>
  )
}
export default App;
