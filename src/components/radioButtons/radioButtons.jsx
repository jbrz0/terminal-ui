import React from 'react';
import cx from 'classnames';
import s from './radioButtons.scss';

export default class RadioButtons extends React.Component {
  render() {
    return(
      <div className={s.radioAllWrap}>
        <div className={s.radioWrap}>
          <input type="radio" id="radio01" name="radio" />
          <label htmlFor="radio01"><span></span>Radio Button 1</label>
        </div>
        <div className={s.radioWrap}>
          <input type="radio" id="radio02" name="radio" />
          <label htmlFor="radio02"><span></span>Radio Button 2</label>
        </div>
      </div>
    )
  }
}
