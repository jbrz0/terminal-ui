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


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Weather extends React.Component {
  handleSelect(index, last) {
    // console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (
      <div>
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className={s.weatherRoot}
      >

        <TabList className={s.weatherTab}>
          <Tab>
            <img src={Sunny} />
            <span>MON</span>
          </Tab>
          <Tab>
            <img src={Rain} />
            <span>TUE</span>
          </Tab>
          <Tab>
            <img src={Snow} />
            <span>WED</span>
          </Tab>
        </TabList>


        <TabPanel className={s.weatherTabPanel}>
          <img src={Sunny} className={s.weatherIcon} />
          &nbsp;25°
        </TabPanel>
        <TabPanel className={s.weatherTabPanel}>
          <img src={Rain} className={s.weatherIcon} />
          &nbsp;15°
        </TabPanel>
        <TabPanel className={s.weatherTabPanel}>
          <img src={Snow} className={s.weatherIcon} />
          &nbsp;-22°
        </TabPanel>
      </Tabs>

      {/* <WeatherIcons /> */}
    </div>
    );
  }
}

// class WeatherIcons extends React.Component {
//   render() {
//     return(
//       <div className={s.weatherIcons}>
//         <div className={s.weatherIconsCol}><img src={Sunny} /></div>
//         <div className={s.weatherIconsCol}><img src={Rain} /></div>
//         <div className={s.weatherIconsCol}><img src={RainCloud} /></div>
//         <div className={s.weatherIconsCol}><img src={Thunder} /></div>
//         <div className={s.weatherIconsCol}><img src={Night} /></div>
//         <div className={s.weatherIconsCol}><img src={SnowCloud} /></div>
//         <div className={s.weatherIconsCol}><img src={Snow} /></div>
//         <div className={s.weatherIconsCol}><img src={Tornado} /></div>
//       </div>
//     )
//   }
// }
