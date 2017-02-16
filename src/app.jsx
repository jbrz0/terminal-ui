import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Grid from './grid/grid.jsx';
import Components from './components/components.jsx';
import NoMatch from './nomatch.jsx';
import Layout from './layout.jsx';
import Slideshow from './slideshow.jsx';

export default class App extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>

        {/* <Route path="/" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./slideshow.jsx').default);
          })
        }} />
        <Route path="grid" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./grid/grid.jsx').default);
          })
        }} />
        <Route path="components" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./components/components.jsx').default);
          })
        }} />
        <Route path="*" getComponent={(nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./nomatch.jsx').default);
          })
        }} /> */}

          <Route path="/" component={Slideshow} />
          <Route path="grid" component={Grid} />
          <Route path="components" component={Components} />
          <Route path="*" component={NoMatch}/>
      </Router>
    );
  }
}
