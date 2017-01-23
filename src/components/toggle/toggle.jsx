import React from 'react';
import cx from 'classnames';
import s from './toggle.scss';


export default class Toggle extends React.Component {
  render() {
    return(
      <div className={s.toggleWrap}>
        <input type="checkbox" className={s.toggleInput} id="switch" />
        <label htmlFor="switch" className={s.toggleLabel}>Toggle</label>
      </div>
    )
  }
}
