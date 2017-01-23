import React from 'react';
import cx from 'classnames';
import s from './cardText.scss';


export default class CardText extends React.Component {
  render() {
    return(
      <div className={s.cardTextWrap}>
        <div className={s.cardTextInner}>
          <h2>Card Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    )
  }
}
