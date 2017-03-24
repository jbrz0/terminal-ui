import React from 'react';
import cx from 'classnames';
import s from './cardAvatar.scss';

export default class cardAvatar extends React.Component {
  render() {
    return(
      <div className={s.cardAvatarWrap}>
        <img src={this.props.avatar} className={s.cardAvatar} />
        <h2 className={s.cardAvatarTitle}>{this.props.title}</h2>
        <div style={this.props.image} className={s.cardDisplayImg}></div>
        <p>{this.props.children}</p>
        <a href="#" className={s.actionBtn}>Action</a>
      </div>
    )
  }
}
