import React from 'react';
import cx from 'classnames';

import s from './inputBannerTwo.scss';
import Input from '../input/input.jsx';
import Cover from '../../img/cover-art.png';

export default class InputBannerTwo extends React.Component {
  render() {
    return(
      <div className={s.inputBannerTwoRoot}>
        <div className={s.inputBannerHeader}>
          <img src={Cover} className={s.inputBannerTwoImg} />
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
        </div>
        <div className={s.inputBannerTwoTextWrap}><Input /></div>
        <a href="#" className={s.inputBannerSubmit}>OK</a>
      </div>
    )
  }
}
