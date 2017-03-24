import React from 'react';
import cx from 'classnames';
import s from './cardText.scss';

export default class CardText extends React.Component {
  render() {
    return(
      <div className={s.cardTextWrap}>
        <div className={s.cardTextInner}>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
