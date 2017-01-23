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
          {/* <IndexRoute path="/" component={Slideshow} /> */}
          {/* add to package.json maybe --history-api-fallback */}
          <Route path="/" component={Slideshow} />
          <Route path="grid" component={Grid} />
          <Route path="components" component={Components} />
          <Route path="*" component={NoMatch}/>
      </Router>
    );
  }
}
