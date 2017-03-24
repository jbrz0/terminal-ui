import React from 'react';
import cx from 'classnames';
import s from './weather.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Weather extends React.Component {

  render() {
    return (
      <div>
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0} className={s.weatherRoot} >
          <TabList className={s.weatherTab}>
            <Tab>
              <img src={this.props.weatherOne} />
              <span>{this.props.tabOne}</span>
            </Tab>
            <Tab>
              <img src={this.props.weatherTwo} />
              <span>{this.props.tabTwo}</span>
            </Tab>
            <Tab>
              <img src={this.props.weatherThree} />
              <span>{this.props.tabThree}</span>
            </Tab>
          </TabList>
          <TabPanel className={s.weatherTabPanel}>
            <img src={this.props.weatherOne} className={s.weatherIcon} />
            &nbsp;{this.props.tempOne}°
          </TabPanel>
          <TabPanel className={s.weatherTabPanel}>
            <img src={this.props.weatherTwo} className={s.weatherIcon} />
            &nbsp;{this.props.tempTwo}°
          </TabPanel>
          <TabPanel className={s.weatherTabPanel}>
            <img src={this.props.weatherThree} className={s.weatherIcon} />
            &nbsp;{this.props.tempThree}°
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
