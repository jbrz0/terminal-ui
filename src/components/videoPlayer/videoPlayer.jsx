import React from 'react';
import cx from 'classnames';
const materialIcons = "material-icons";

import s from './videoPlayer.scss';
import Slider from '../slider/slider.jsx';

export default class videoPlayer extends React.Component {
  render() {
    return(
      <div className={s.videoPlayerRoot}>
        <div className={s.videoWrapper}>
          <iframe className={s.videoIframe} width="560" height="349" src={this.props.children}
            frameBorder="0" allowFullScreen></iframe>
          <div className={s.playBtn}>
            <i className={cx(materialIcons, s.mediaPlayBtn)}>play_arrow</i>
          </div>
          <div className={s.sliderVideoSection}>
            <Slider />
          </div>
          <div className={s.bottomBtnMediaWrap}>
            <div className={s.volBtn}>
              <i className={cx(materialIcons, s.mediaPlayBtn)}>volume_up</i>
            </div>
            <div className={s.fsBtn}>
              <i className={cx(materialIcons, s.mediaPlayBtn)}>fullscreen</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
