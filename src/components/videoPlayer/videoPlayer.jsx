import React from 'react';
import cx from 'classnames';
// import ResponsiveVideo from './videoPlayerPlugin.jsx';
import s from './videoPlayer.scss';
import Slider from '../slider/slider.jsx';


// class ResponsiveVideo extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       constant: this.props.height/this.props.width
//     }
//   }
//
//   handleResize (e) {
//     this.setState({videoHeight: React.findDOMNode(this.refs.iframe).offsetWidth * this.state.constant});
//   }
//
//   componentWillMount () {
//     window.addEventListener('resize', this.handleResize);
//   }
//
//   componentDidMount () {
// 		var videoWidth = React.findDOMNode(this.refs.iframe).offsetWidth;
// 		var videoHeight = videoWidth * this.state.constant;
//     this.setState({videoHeight: videoHeight});
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }
// 	render () {
// 		return (
// 			<iframe ref="iframe" src={this.props.source} frameBorder="0" height={this.state.videoHeight} allowFullScreen></iframe>
// 		);
// 	}
// }

const materialIcons = "material-icons";


export default class videoPlayer extends React.Component {
  render() {
    return(
      <div className={s.videoPlayerRoot}>


      {/*
      TRY THIS YOUTUBE COMPONENT FOR PLAYBACK CONTROLS
      https://github.com/troybetz/react-youtube
      https://developers.google.com/youtube/iframe_api_reference#onStateChange
       */}

        <div className={s.videoWrapper}>
          <iframe className={s.videoIframe} width="560" height="349" src="https://www.youtube.com/embed/hoj4Qv7nrN8" frameBorder="0" allowFullScreen></iframe>
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
