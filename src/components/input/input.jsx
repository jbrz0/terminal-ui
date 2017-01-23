import React from 'react';
import cx from 'classnames';
import s from './input.scss';


export default class Input extends React.Component {
  render() {
    return(
      <div className={s.inputRoot}>
        <input className={s.inputBox} placeholder="Input box" />
      </div>
    )
  }
}
