import React from 'react';
import cx from 'classnames';
import s from './cardPhotoTall.scss';

export default class CardPhotoTall extends React.Component {
  render() {
    return(
      <div className={s.cardPhotoTallWrap}>
        <div className={s.cardPhotoTallImg}
          style={this.props.photo}></div>
        <div className={s.cardPhotoTallText}>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
