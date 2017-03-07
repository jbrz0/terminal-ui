import React from 'react';
import s from './components.scss';
import cx from 'classnames';
import Nav from '../nav/nav.jsx';

// Individiaul components
import Alert from './alert/alert.jsx';
import Weather from './weather/weather.jsx';
import WeatherIcons from './weather/weatherIcons.jsx';
import Time from './time/time.jsx';
import Calendar from './calendar/calendar.jsx';
import Rows from './rows/rows.jsx';
import Dropdown from './dropdown/dropdown.jsx';
import Input from './input/input.jsx';
import List from './list/list.jsx';
import Button from './button/button.jsx';
import Slider from './slider/slider.jsx';
import MediaPlayer from './mediaPlayer/mediaPlayer.jsx';
import CardText from './cardText/cardText.jsx';
import CardTextDate from './cardTextDate/cardTextDate.jsx';
import CardPhotoTall from './cardPhotoTall/cardPhotoTall.jsx';
import CardPhotoShort from './cardPhotoShort/cardPhotoShort.jsx';
import Toggle from './toggle/toggle.jsx';
import ToggleDisabled from './toggle/toggleDisabled.jsx';
import RadioButtons from './radioButtons/radioButtons.jsx';
import Checkboxes from './checkboxes/checkboxes.jsx';
import TabScroll from './tabScroll/tabScroll.jsx';
import ColorPicker from './colorPicker/colorPicker.jsx';
import InputBanner from './inputBanner/inputBanner.jsx';
import InputLine from './inputLine/inputLine.jsx';
import VideoPlayer from './videoPlayer/videoPlayer.jsx';
import CardAvatar from './cardAvatar/cardAvatar.jsx';
import InputBannerTwo from './inputBannerTwo/inputBannerTwo.jsx';
import Terminal from '../terminal/terminal.jsx';

export default class Components extends React.Component {

  render() {
    return (
      <div className={s.componentWrap}>
        <Nav />
        <Terminal page="downloads" />
        <div className={cx(s.gridWrap, s.gridWrapComponents)}>
          <div className={s.gridOneFourth}>
            <Alert />
            <Weather />
            <WeatherIcons />
            <Time />
            <CardTextDate />
            <CardPhotoTall />
          </div>
          <div className={s.gridOneFourth}>
            <Calendar />
            <Dropdown />
            <Input />
            <List />
            <Button buttonText="Button" buttonLink="/" />
            <MediaPlayer />
            <CardPhotoShort />
            <CardText />
          </div>
          <div className={s.gridOneFourth}>
            <Rows />
            <Toggle />
            <ToggleDisabled />
            <RadioButtons />
            <Checkboxes />
            <Slider />
            <div className={s.linkWrap}>
              <a href="#" className={s.link}>Link</a>
              &nbsp;&nbsp;&nbsp;
              <a href="#" className={s.linkBox}>Link</a>
            </div>
            <InputBanner />
            <CardAvatar />
          </div>
          <div className={s.gridOneFourth}>
            <TabScroll />
            <ColorPicker />
            <InputLine />
            <VideoPlayer />
            <InputBannerTwo />
          </div>
        </div>
      </div>
    )
  }
}
