import React from 'react';
import cx from 'classnames';
import s from './cardTextDate.scss';

export default class CardTextDate extends React.Component {
  render() {
    return(
      <div className={s.cardTextWrap}>
        <div className={s.cardTextInner}>
          <h2>Card Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <span>11/17/2017</span>
        </div>
      </div>
    )
  }
}
