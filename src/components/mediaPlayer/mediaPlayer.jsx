import React from 'react';
import cx from 'classnames';
import s from './mediaPlayer.scss';
import Slider from '../slider/slider.jsx';

import Cover from '../../img/cover-art.png'

const materialIcons = "material-icons";

export default class MediaPlayer extends React.Component {
  render() {
    function preventScroll() {
      document.body.style.overflow='hidden';
    }

    function enableScroll() {
      document.body.style.overflow='auto';
    }
    return(
      <div className={s.mediaPlayerRoot}>
        <div className={s.mediaPlayerTop}>
          <img src={Cover} className={s.coverArt} />
          <div className={s.mediaPlayerControls}>
            <a href="#"><i className={materialIcons}>stop</i></a>
            <a href="#"><i className={materialIcons}>pause</i></a>
            <a href="#"><i className={materialIcons}>play_arrow</i></a>
          </div>
        </div>
        <div className={s.mediaPlayerSlider}>
          <Slider />
        </div>

        <ul className={s.mediaPlayerList} onMouseOver={preventScroll.bind(this)} onMouseOut={enableScroll.bind(this)}>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
          <a href="#"><li>List Item</li></a>
        </ul>
        {/* <i className={materialIcons}>volume_up</i> */}

      </div>
    )
  }
}
