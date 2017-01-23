import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Router, Route, Link, browserHistory } from 'react-router';


import App from './app.jsx'
import Slideshow from './slideshow.jsx';


render(<App />, document.getElementById('app'));

if (module && module.hot) {
  module.hot.accept('./slideshow.jsx', () => {
    const AppInner = require('./slideshow.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
