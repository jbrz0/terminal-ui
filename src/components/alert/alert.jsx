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
        <h3>{this.props.title}</h3>
        <a href={this.props.btnLeftLink} className={s.alertBtn}>{this.props.btnLeft}</a>
        <a href={this.props.btnRightLink} className={s.alertBtn} onClick={this.click.bind(this)}>{this.props.btnRight}</a>
      </div>
    )
  }
}
