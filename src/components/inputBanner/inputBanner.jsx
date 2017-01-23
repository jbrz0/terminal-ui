import React from 'react';
import cx from 'classnames';
import s from './inputBanner.scss';
import Input from '../input/input.jsx';

export default class InputBanner extends React.Component {
  render() {
    return(
      <div className={s.inputBannerRoot}>
        <div className={s.inputBannerHeader}>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
        </div>
        <Input />
        <a href="#" className={s.inputBannerSubmit}>OK</a>
      </div>
    )
  }
}
