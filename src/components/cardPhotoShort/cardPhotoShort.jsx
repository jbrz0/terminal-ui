import React from 'react';
import cx from 'classnames';

import s from './cardPhotoShort.scss';
import PhotoPath from '../../img/card-tall-large.jpg';
const Photo = {backgroundImage: 'url(' + PhotoPath + ')'}

export default class CardPhotoShort extends React.Component {
  render() {
    return(
      <div className={s.cardPhotoShortWrap}>
        <div className={s.cardPhotoShortImg}
          style={Photo}>
            <h2>Card Title</h2>
          </div>
        <div className={s.cardPhotoShortText}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    )
  }
}
