import React from 'react';
import { render } from 'react-dom';
import styles from './index.scss';
// import { AppContainer } from 'react-hot-loader';
//
// import { Router, Route, Link, browserHistory } from 'react-router';

// let injectTapEventPlugin = require('react-tap-event-plugin');
// window.React = React;
// injectTapEventPlugin();

import App from './app.jsx'
// import Slideshow from './slideshow.jsx';



render(<App />, document.getElementById('app'));

// if (module && module.hot) {
//   module.hot.accept('./slideshow.jsx', () => {
//     const AppInner = require('./slideshow.jsx').default;
//     render(
//       <AppContainer>
//         <App/>
//       </AppContainer>,
//       document.querySelector("#app")
//     );
//   });
// }
