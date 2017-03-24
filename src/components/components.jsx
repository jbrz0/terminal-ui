import React from 'react';
import s from './components.scss';
import cx from 'classnames';
import Nav from '../nav/nav.jsx';

// Assets
import Avatar from '../img/avatar.png';
import ArticleImagePath from '../img/card-tall-large.jpg';
const ArticleImage = {backgroundImage: 'url(' + ArticleImagePath + ')'}
import PhotoPath from '../img/card-tall-large.jpg';
const Photo = {backgroundImage: 'url(' + PhotoPath + ')'}
// Weather Icons
import Sunny from '../img/weather-01.svg';
import Rain from '../img/weather-02.svg';
import RainCloud from '../img/weather-03.svg';
import Thunder from '../img/weather-04.svg';
import Night from '../img/weather-05.svg';
import SnowCloud from '../img/weather-06.svg';
import Snow from '../img/weather-07.svg';
import Tornado from '../img/weather-08.svg';

// Individiaul components
import Alert from './alert/alert.jsx';
import Weather from './weather/weather.jsx';
import WeatherIcons from './weather/weatherIcons.jsx';
import Time from './time/time.jsx';
import Calendar from './calendar/calendar.jsx';
import Rows from './rows/rows.jsx';
import DropdownWrap from './dropdown/dropdownWrap.jsx';
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
import Radio from './radioButtons/radio.jsx';
import Checkboxes from './checkboxes/checkboxes.jsx';
import Checkbox from './checkboxes/checkbox.jsx';
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
            <Alert
              title="Alert!!"
              btnLeft="SAVE" btnRight="CLOSE"
              btnLeftLink="#" btnRightLink="#"
            />

            <Weather
              tabOne="MON" tabTwo="TUE" tabThree="WED"
              weatherOne={Sunny} weatherTwo={Rain} weatherThree={Snow}
              tempOne="25" tempTwo="15" tempThree="-22"
            />

            <WeatherIcons />

            <Time />

            <CardTextDate title="Card Title" date="11/17/2017"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

            <CardPhotoTall title="Card Title" photo={Photo}
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          </div>
          <div className={s.gridOneFourth}>
            <Calendar />

            <DropdownWrap>
              <Dropdown link="#" text="Settings" />
              <Dropdown link="#" text="Profile" />
              <Dropdown link="#" text="Log Out" />
            </DropdownWrap>

            <Input placeholder="Input Box" />

            <List
              textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do."
              textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do."
            />

            <Button buttonText="Button" buttonLink="/" />

            <MediaPlayer />

            <CardPhotoShort title="Card Title" photo={Photo}
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />

            <CardText title="Card Title"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
          </div>
          <div className={s.gridOneFourth}>
            <Rows
              textOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et cursus dui, id semper lectus, nullam erat turpis."
              textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              textThree="Lorem ipsum dolor sit amet, Etiam et cursus dui, id semper lectus, consectetur adipisicing elit."
            />

            <Toggle id="switch" name="switch" />

            <ToggleDisabled id="switchDisabled" name="switchDisabled" />

            <RadioButtons>
              <Radio id="radio01" name="radio" text="Radio Button 1" />
              <Radio id="radio02" name="radio" text="Radio Button 2" />
            </RadioButtons>

            <Checkboxes>
              <Checkbox id="checkbox01" name="checkbox" text="Checkbox 1" />
              <Checkbox id="checkbox02" name="checkbox" text="Checkbox 2" />
            </Checkboxes>

            <Slider id="slider" name="slider" />

            <div className={s.linkWrap}>
              <a href="#" className={s.link}>Link</a> &nbsp;&nbsp;
              <a href="#" className={s.linkBox}>Link</a>
            </div>

            <InputBanner />

            <CardAvatar title="Card Title" avatar={Avatar} image={ArticleImage}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CardAvatar>
          </div>
          <div className={s.gridOneFourth}>
            <TabScroll />

            <ColorPicker />

            <InputLine placeholder="Input Box" icon="search" />

            <VideoPlayer>
              https://www.youtube.com/embed/hoj4Qv7nrN8
            </VideoPlayer>

            <InputBannerTwo placeholder="Input Box" />
          </div>
        </div>
      </div>
    )
  }
}
