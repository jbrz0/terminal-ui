import React from 'react';
import cx from 'classnames';

import s from './cardAvatar.scss';
import Avatar from '../../img/avatar.png';
import ArticleImagePath from '../../img/card-tall-large.jpg';
const ArticleImage = {backgroundImage: 'url(' + ArticleImagePath + ')'}

export default class cardAvatar extends React.Component {
  render() {
    return(
      <div className={s.cardAvatarWrap}>
        <img src={Avatar} className={s.cardAvatar} />
        <h2 className={s.cardAvatarTitle}>Card Title</h2>
        <div style={ArticleImage} className={s.cardDisplayImg}></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" className={s.actionBtn}>Action</a>
      </div>
    )
  }
}
