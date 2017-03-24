import React from 'react';
import cx from 'classnames';
import s from './cardPhotoShort.scss';

export default class CardPhotoShort extends React.Component {
  render() {
    return(
      <div className={s.cardPhotoShortWrap}>
        <div className={s.cardPhotoShortImg}
          style={this.props.photo}>
            <h2>{this.props.title}</h2>
          </div>
        <div className={s.cardPhotoShortText}>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
