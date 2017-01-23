import React from 'react';
import cx from 'classnames';
import s from './tabScroll.scss';

import Cover from '../../img/cover-art.png';
import CoverTwo from '../../img/cover-art-2.png';
import CoverThree from '../../img/cover-art-3.png';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class TabScroll extends React.Component {

// onmouseover="document.body.style.overflow='hidden';" onmouseout="document.body.style.overflow='auto';"

  handleSelect(index, last) {
    // console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {

    function preventScroll() {
      document.body.style.overflow='hidden';
    }

    function enableScroll() {
      document.body.style.overflow='auto';
    }

    return (
      <div className={s.tabScrollWrap}>
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className={s.tabRoot}
      >

        <TabList className={s.tabs}>
          <Tab>
            Tab #1
          </Tab>
          <Tab>
            Tab #2
          </Tab>
          <Tab>
            Tab #3
          </Tab>
        </TabList>


        <TabPanel className={s.tabsPanel} onMouseOver={preventScroll.bind(this)} onMouseOut={enableScroll.bind(this)}>
          <img src={Cover} className={s.tabCoverImg} />
          Lorem ipsum dolor sit amet, consur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et.<br /><br />
          <img src={Cover} className={s.tabCoverImg} />
          Lorem ipsum dolor sit amet, consur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et.<br />
        </TabPanel>
        <TabPanel className={s.tabsPanel} onMouseOver={preventScroll.bind(this)} onMouseOut={enableScroll.bind(this)}>
          <img src={CoverTwo} className={s.tabCoverImg} />
          Lorem ipsum dolor sit amet, consur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et.<br /><br />
          <img src={CoverTwo} className={s.tabCoverImg} />
          Lorem ipsum dolor sit amet, consur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et.<br />
        </TabPanel>
        <TabPanel className={s.tabsPanel} onMouseOver={preventScroll.bind(this)} onMouseOut={enableScroll.bind(this)}>
          <img src={CoverThree} className={s.tabCoverImg} />
          Lorem ipsum dolor sit amet, consur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et.<br /><br />
          <img src={CoverThree} className={s.tabCoverImg} />
          Lorem ipsum dolor sit amet, consur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Sed do eiusmod tempor incididunt ut labore et.<br />
        </TabPanel>
      </Tabs>

    </div>
    );
  }
}
