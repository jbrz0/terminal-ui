import React from 'react';
import cx from 'classnames';
import s from './checkboxes.scss';

export default class Checkboxes extends React.Component {
  render() {
    return(
      <div className={s.checkboxAllWrap}>
        {this.props.children}
      </div>
    )
  }
}
