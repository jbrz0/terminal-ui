import React from 'react';
import cx from 'classnames';
import s from './checkboxes.scss';


export default class Checkboxes extends React.Component {
  render() {
    return(
        <div className={s.checkboxAllWrap}>

          <div className={s.checkboxWrap}>
            <input type="checkbox" id="checkbox01" name="checkbox" />
            <label htmlFor="checkbox01"><span></span>Checkbox 1</label>
          </div>

          <div className={s.checkboxWrap}>
           <input type="checkbox" id="checkbox02" name="checkbox" />
           <label htmlFor="checkbox02"><span></span>Checkbox 2</label>
          </div>

        </div>
    )
  }
}
