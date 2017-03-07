import React from 'react';
import s from './grid.scss';
import cx from 'classnames';
import Nav from '../nav/nav.jsx';
import Terminal from '../terminal/terminal.jsx';
import gridIcon from '../img/grid-icon.svg';

export default class Grid extends React.Component {
  render() {
    return (
      <div className={s.gridRoot}>
        <Nav />
        <div className={s.gridWrapTop}>
          <div className={s.gridHeaderBg}>
            <img src={gridIcon} />
          </div>
          <div className={s.gridHeader}>
            <h1>Grids</h1>
            <p>This page can be used as a reference for the grids used in this kit. The sections can be split into 1-4 sections with different formatting. All component cards will fit inside the grid item and won't need to be adjusted. You can see the components <a href="/components">here</a></p>
          </div>
        </div>
        <div className={s.gridWrap}>
          <div className={s.gridOneThird} style={{height: '200px'}}></div>
          <div className={s.gridOneThird} style={{height: '200px'}}></div>
          <div className={s.gridOneThird} style={{height: '200px'}}></div>
        </div>
        <div className={s.gridWrap}>
          <div className={s.gridOneHalf} style={{height: '200px'}}></div>
          <div className={s.gridOneHalf} style={{height: '200px'}}></div>
        </div>
        <div className={s.gridWrap}>
          <div className={cx(s.gridOneFourth, s.gridOneFourthNarrow)} style={{height: '200px'}}></div>
          <div className={cx(s.gridOneFourth, s.gridOneFourthWide)} style={{height: '200px'}}></div>
          <div className={cx(s.gridOneFourth, s.gridOneFourthNarrow)} style={{height: '200px'}}></div>
        </div>
        <div className={s.gridWrap}>
          <div className={s.gridOneFourthBottom} style={{height: '200px'}}></div>
          <div className={s.gridOneFourthBottom} style={{height: '200px'}}></div>
          <div className={s.gridOneFourthBottom} style={{height: '200px'}}></div>
          <div className={s.gridOneFourthBottom} style={{height: '200px'}}></div>
        </div>
        <Terminal page="components" />
      </div>
    )
  }
}
