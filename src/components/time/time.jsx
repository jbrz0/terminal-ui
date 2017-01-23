/* eslint no-console:0 */

import React from 'react';

// import moment from 'moment';
import TimePicker from 'react-gradient-timepicker';
import s from './time.scss';
import cx from 'classnames';

const materialIcons = "material-icons";

export default class Time extends React.Component {
  render() {
    return(
      <div>
        <i className={cx(materialIcons, s.timeIcon)}>access_time</i>
        <TimePicker
          time="01:00"
          // theme="Bourbon"
          className={s.timePicker}
          headerColor="#1B98FC"
          // theme={"#1B98FC"}
          color1="#1B98FC"
          placeholder="Start Time"
          onSet={(val) => {
            alert('val:' + val.format12);
          }}
        />
      </div>
    )
  }
}
