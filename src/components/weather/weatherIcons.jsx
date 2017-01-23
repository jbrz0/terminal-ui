import React from 'react';
import cx from 'classnames';
import s from './weather.scss';

// Weather Icons
import Sunny from '../../img/weather-01.svg';
import Rain from '../../img/weather-02.svg';
import RainCloud from '../../img/weather-03.svg';
import Thunder from '../../img/weather-04.svg';
import Night from '../../img/weather-05.svg';
import SnowCloud from '../../img/weather-06.svg';
import Snow from '../../img/weather-07.svg';
import Tornado from '../../img/weather-08.svg';

export default class WeatherIcons extends React.Component {
  render() {
    return(
      <div className={s.weatherIcons}>
        <div className={s.weatherIconsCol}><img src={Sunny} /></div>
        <div className={s.weatherIconsCol}><img src={Rain} /></div>
        <div className={s.weatherIconsCol}><img src={RainCloud} /></div>
        <div className={s.weatherIconsCol}><img src={Thunder} /></div>
        <div className={s.weatherIconsCol}><img src={Night} /></div>
        <div className={s.weatherIconsCol}><img src={SnowCloud} /></div>
        <div className={s.weatherIconsCol}><img src={Snow} /></div>
        <div className={s.weatherIconsCol}><img src={Tornado} /></div>
      </div>
    )
  }
}
