import React from 'react';
import cx from 'classnames';
import s from './terminal.scss';

import { Router, Route, Link } from 'react-router';


import Nav from '../nav/nav.jsx'

const materialIcons = "material-icons";


function terminal() {

    let iT = this.refs.terminal.value;

    if (iT === 'welcome' || iT === 'Welcome' || iT === 'WELCOME'
    || iT === 'home' || iT === 'Home' || iT === 'HOME'|| iT === '0') {
      // window.location.href = "/components";
      // this.context.router.transitionTo('/path-to-link');
      this.context.router.push('/');
    } else if (iT === 'grids' || iT === 'Grids' || iT === 'GRIDS'
      || iT === 'grid' || iT === 'Grid' || iT === 'GRID'|| iT === '1') {
      this.context.router.push('/grid');
    } else if (iT === 'component' || iT === 'Component' || iT === 'COMPONENT'
      || iT === 'components' || iT === 'Components' || iT === 'COMPONENTS'|| iT === '2') {
      this.context.router.push('/components');
    } else if (iT === 'download' || iT === 'Download' || iT === 'DOWNLOAD'
      || iT === 'downloads' || iT === 'Downloads' || iT === 'DOWNLOADS'|| iT === '0') {
      this.context.router.push('/');
    } else {
       window.alert("Try a page name!");
    }
}

export default class Terminal extends React.Component {

  constructor(props, context) {
      super(props, context);
    this.state = {
      inputValue: ''
    }
  }

  // static contextTypes = {
  //   router: React.PropTypes.func.isRequired
  // };

  static get contextTypes() {
  return {
    router: React.PropTypes.object.isRequired,
  };
}

  updateInputValue(evt) {
  this.setState({
    inputValue: evt.target.value
  })
}

  render() {
    return(
      <div className={s.terminalWrap}>
        {/* <h3>Grids</h3> */}
        <i className={cx(materialIcons, s.arrowIcon)}>keyboard_arrow_right</i>
        <form onSubmit={terminal.bind(this)} className={s.terminalForm}>
          <input className={s.terminalInput} ref='terminal' value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} placeholder={"type " + this.props.page + " and press ↩ to see the next page"} />
        </form>
        <a href="#"><i className={cx(materialIcons, s.micIcon)}>mic</i></a>
      </div>
    )
  }
}
