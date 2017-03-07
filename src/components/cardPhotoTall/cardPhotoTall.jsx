import React from 'react';
import cx from 'classnames';

import s from './cardPhotoTall.scss';
import PhotoPath from '../../img/card-tall-large.jpg';
const Photo = {backgroundImage: 'url(' + PhotoPath + ')'}

export default class CardPhotoTall extends React.Component {
  render() {
    return(
      <div className={s.cardPhotoTallWrap}>
        <div className={s.cardPhotoTallImg}
          style={Photo}></div>
        <div className={s.cardPhotoTallText}>
          <h2>Card Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    )
  }
}
