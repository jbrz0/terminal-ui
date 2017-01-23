import React from 'react';
import cx from 'classnames';
import s from './inputLine.scss';

const materialIcons = "material-icons";

export default class InputLine extends React.Component {
  render() {
    return(
      <div className={s.inputLineRoot}>
        <i className={cx(materialIcons, s.inputLineIcon)}>search</i>
        <input className={s.inputLineBox} placeholder="Input box" />
      </div>
    )
  }
}
