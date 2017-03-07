import React from 'react';
import Terminal from './terminal/terminal.jsx';
import Nav from './nav/nav.jsx';
import s from './slideshow.scss';
import cx from 'classnames';

import Calendar from './components/calendar/calendar.jsx';
import Weather from './components/weather/weather.jsx';
import Rows from './components/rows/rows.jsx';
import Dropdown from './components/dropdown/dropdown.jsx';
import MediaPlayer from './components/mediaPlayer/mediaPlayer.jsx';
import Button from './components/button/button.jsx';
import terminalIcon from './img/terminal-icon.svg';
import Illustrator from './img/tech/illustrator.svg';
import Sketch from './img/tech/sketch.svg';
import Sass from './img/tech/sass.svg';
import ReactLogo from './img/tech/react.svg';
import Html from './img/tech/html.svg';
import Css from './img/tech/css.svg';
import Javascript from './img/tech/javascript.svg';

const {Fullpage, Slide, TopNav, SideNav} = require('fullpage-react');

let fullPageOptions = {
  threshold: 100,
  sensitivity: 100
};

let topNavOptions = {
  footer: false,
  align: 'left',
  activeStyles: {backgroundColor: 'white'},
  hoverStyles: {backgroundColor: 'yellow'},
  nonActiveStyles: {backgroundColor: 'gray'}
};

let sideNavOptions = {
  right: '15px',
  top: '50%',
};


class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {active: 0};

    this.updateActiveState = this.updateActiveState.bind(this);
  }
  updateActiveState(newActive) {
    this.setState({'active': newActive});
  }
  shouldComponentUpdate(nP, nS) {
    return nS.active != this.state.active;
  }
  onMouseOver(idx) {
    this.setState({'hover': idx});
  }
  onMouseOut(e) {
    this.setState({'hover': null});
  }
  compareStyles(component, idx) {
    return idx == this.state.active ? component.activeStyles : idx == this.state.hover ? component.hoverStyles : component.nonActiveStyles
  }
  render() {

    let navCount = 3;
    let navArr = [];
    for (let i = 0; i < navCount; i++) {
      navArr.push(i);
    }

    return (
      <Fullpage active={this.updateActiveState}>
        <Nav />
        <Terminal page="grids" />
        <Slide style={{position: 'relative'}}>
          <div id="title" className={s.slideshowRoot}>
            <div className={cx(s.slideshowWrapTop, s.gridWrapTop)}>
              <div className={cx(s.gridHeaderBg, s.slideshowHeaderBg)}>
                <img src={terminalIcon} />
              </div>
              <div className={cx(s.gridHeader, s.slideshowGridHeader)}>
                <h1>Terminal UI Kit</h1>
                <p>
                  A collection of components, and styling to use in web projects. Includes a <a href="grid">grid</a> system to integrate components into. Also a collection of <a href="components">components</a> to add. Scroll down to view the downloads, or check it out on <a href="https://github.com/brz0/terminal-ui">github</a>.
                </p>

                <TopNav {...topNavOptions}>
                  {navArr.map((n, idx) => {
                  return <span key={idx} ref={1} className={s.DownloadLink}>Downloads</span>
                  }, this)}
                </TopNav>

              </div>
            </div>
          </div>

        </Slide>
        <Slide style={{position: 'relative'}}>
          <a name="part3"></a>
          <div className={cx(s.gridWrap, s.slideshowGridWrap)}>
            <div className={cx(s.gridOneHalf, s.blueBg)}>
              <h1>Select Package</h1>
              <p>Download the kit files. Design files include .sketch and .ai files with colors and mockups of all components. Developer kit includes react components to easily be copied into layouts, within the <a href="grid">grid</a>. Production files that can be used with HTML layouts coming soon. Updates and code can also be found on github <a href="https://github.com/brz0/terminal-ui">here</a>.</p>
            </div>
            <div className={cx(s.gridOneHalf, s.slideshowDownload)}>
              <div className={s.downloadThird}>
                <h4>Design Files</h4>
                <p>Sketch & Adobe Illustrator files for design</p>
                <img src={Illustrator} /> <img src={Sketch} /><br />
              </div>
              <div className={s.downloadThird}>
                <h4>Developer</h4>
                <p>React components and SASS styling files</p>
                <img src={Sass} className={s.sassIcon} /> <img src={ReactLogo} /><br />
              </div>
              <div className={cx(s.downloadThird)}>
                <h4>Production</h4>
                <p>Minifed and ready to use static elements</p>
                <img src={Html} className={s.htmlIcon} /> <img src={Css} className={s.cssIcon} /> <img src={Javascript} className={s.jsIcon} /><br />
              </div>
              <div className={s.downloadThird}>
                <Button buttonText="download" buttonLink="http://bit.ly/2kvIFC0" />
              </div>
              <div className={s.downloadThird}>
                <Button buttonText="download" buttonLink="https://github.com/brz0/terminal-ui" />
              </div>
              <div className={s.downloadThird}>
                <div className={s.disableBtnWrap}>
                  <Button buttonText="soon" buttonLink="" />
                </div>
              </div>
              <div className={s.downloadSm}>
                <h4>Downloads</h4>
                <a href="#"><p>Design Files (sketch/illustrator)</p></a>
                <a href="#"><p>Developer Files (Node/ReactJS/Sass)</p></a>
              </div>
            </div>
          </div>
        </Slide>

        <SideNav {...sideNavOptions}>
          {navArr.map((n, idx) => {
            return <div key={idx} ref={idx}>&#x25CF;</div>
          }, this)}
        </SideNav>
      </Fullpage>
    );
  }
};

module.exports = Slideshow;
