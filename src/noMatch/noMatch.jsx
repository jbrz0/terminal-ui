import React from 'react';
import s from './grid.scss';
import cx from 'classnames';
import Nav from '../nav/nav.jsx';
import Terminal from '../terminal/terminal.jsx';
import gridIcon from '../img/grid-icon.svg';

export default class noMatch extends React.Component {
  render() {
    return (
      <div className={s.gridRoot}>
        <Nav />
        <div className={s.gridWrapTop}>
          <div className={s.gridHeaderBg}>
            <img src={gridIcon} />
          </div>
          <div className={s.gridHeader}>
            <h1>404</h1>
            <p>This page cannot be found, Go <a href="/">home</a></p>
          </div>
        </div>
        <Terminal page="downloads" />
      </div>
    )
  }
}
