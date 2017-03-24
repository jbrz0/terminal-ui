import React from 'react';
import cx from 'classnames';
import s from './cardTextDate.scss';

export default class CardTextDate extends React.Component {
  render() {
    return(
      <div className={s.cardTextWrap}>
        <div className={s.cardTextInner}>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
          <span>{this.props.date}</span>
        </div>
      </div>
    )
  }
}
