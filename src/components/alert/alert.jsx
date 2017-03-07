import React from 'react';
import cx from 'classnames';
const materialIcons = "material-icons";

import s from './alert.scss';

export default class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inActive: false};
  }
  click() {
    this.setState({inActive: true});
  }
  render() {

    let classes = cx({inActive: this.state.inActive});

    return(
      <div className={cx(s.alertWrap, classes)}>
        <a href="#" onClick={this.click.bind(this)} className={s.alertCloseLink}>
          <i className={cx(materialIcons, s.alertClose)}>close</i>
        </a>
        <h3>Alert!!</h3>
        <a href="#" className={s.alertBtn}>SAVE</a>
        <a href="#" className={s.alertBtn} onClick={this.click.bind(this)}>CLOSE</a>
      </div>
    )
  }
}
