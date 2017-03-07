import React from 'react';
import cx from 'classnames';
import s from './weather.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Weather Icons
import Sunny from '../../img/weather-01.svg';
import Rain from '../../img/weather-02.svg';
import RainCloud from '../../img/weather-03.svg';
import Thunder from '../../img/weather-04.svg';
import Night from '../../img/weather-05.svg';
import SnowCloud from '../../img/weather-06.svg';
import Snow from '../../img/weather-07.svg';
import Tornado from '../../img/weather-08.svg';

export default class Weather extends React.Component {

  render() {
    return (
      <div>
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0} className={s.weatherRoot} >
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
      </div>
    );
  }
}
