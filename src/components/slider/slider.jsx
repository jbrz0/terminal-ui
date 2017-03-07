import React from 'react';
import cx from 'classnames';
import s from './slider.scss';

export default class Slider extends React.Component {
  render() {
    return(
      <div className={s.sliderWrap}>
        <input className={s.sliderInput} type="range" />
      </div>
    )
  }
}
