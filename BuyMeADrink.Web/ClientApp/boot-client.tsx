import './static/plugin/font-awesome/webfonts/fa-brands-400.eot';
import './static/plugin/font-awesome/webfonts/fa-brands-400.svg';
import './static/plugin/font-awesome/webfonts/fa-brands-400.ttf';
import './static/plugin/font-awesome/webfonts/fa-brands-400.woff';
import './static/plugin/font-awesome/webfonts/fa-brands-400.woff2';

import './static/plugin/font-awesome/webfonts/fa-regular-400.eot';
import './static/plugin/font-awesome/webfonts/fa-regular-400.svg';
import './static/plugin/font-awesome/webfonts/fa-regular-400.ttf';
import './static/plugin/font-awesome/webfonts/fa-regular-400.woff';
import './static/plugin/font-awesome/webfonts/fa-regular-400.woff2';

import './static/plugin/font-awesome/webfonts/fa-solid-900.eot';
import './static/plugin/font-awesome/webfonts/fa-solid-900.svg';
import './static/plugin/font-awesome/webfonts/fa-solid-900.ttf';
import './static/plugin/font-awesome/webfonts/fa-solid-900.woff';
import './static/plugin/font-awesome/webfonts/fa-solid-900.woff2';

  
import './static/js/jquery-3.2.1.min.js';
import './static/plugin/bootstrap/css/bootstrap.min.css';
import './static/plugin/font-awesome/css/fontawesome-all.min.css';
import './static/plugin/owl-carousel/css/owl.carousel.min.css';
import './static/plugin/owl-carousel/css/owl.video.play.png';
import './static/js/jquery-3.2.1.min.js';
import './static/js/jquery-migrate-3.0.0.min.js';
import './static/plugin/bootstrap/js/popper.min.js';
import './static/plugin/bootstrap/js/bootstrap.js';
import './static/plugin/parallax/parallax.min.js';
import './static/plugin/mixitup/mixitup.min.js';
import './static/plugin/owl-carousel/js/owl.carousel.min.js';
import './static/js/singlepagenav.jquery.js';
import './static/js/custom.js';


import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { ApplicationState } from './store';
import * as RoutesModule from './routes';




let routes = RoutesModule.routes;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);

function renderApp() {
  // This code starts up the React app when it runs in a browser. It sets up the routing configuration
  // and injects the app into a DOM element.
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history} children={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-app')
  );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require<typeof RoutesModule>('./routes').routes;
    renderApp();
  });
}
