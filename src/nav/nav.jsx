import React from 'react';
import cx from 'classnames';
import s from './nav.scss';

import Logo from '../img/logo.svg';
import Menu from '../img/menu.svg';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  click() {
    let activeClass = (this.state.active === false) ? true : false;
    this.setState({active: activeClass});
  }


  render() {
    let classes = cx('menuOpen', {active: this.state.active});

    return (
      <div>
        <div className={s.navWrap}>
          <a href="/"><img src={Logo} className={s.logoNav}/></a>
          <a className={s.menuLink} onClick={this.click.bind(this)}>
            <img src={Menu} className={s.logoMenu}/>
          </a>
        </div>
        <div className={cx(s.navMenuOpen, classes)}>
          <ul className={s.navList}>
            <a href="/"><li><span>(0)</span> Welcome</li></a>
            <a href="grid"><li><span>(1)</span> Grid</li></a>
            <a href="components"><li><span>(2)</span> Components</li></a>
            {/* <a href="#"><li><span>(3)</span> News</li></a>
            <a href="#"><li><span>(4)</span> Form</li></a>
            <a href="#"><li><span>(5)</span> Grids</li></a>
            <a href="#"><li><span>(6)</span> Download</li></a> */}
          </ul>
        </div>
      </div>
    )
  }
}
