import React from 'react';
import TimePicker from 'react-gradient-timepicker';
import cx from 'classnames';
const materialIcons = "material-icons";

import s from './time.scss';

export default class Time extends React.Component {
  render() {
    return(
      <div>
        <i className={cx(materialIcons, s.timeIcon)}>access_time</i>
        <TimePicker
          time="01:00"
          className={s.timePicker}
          headerColor="#1B98FC"
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
