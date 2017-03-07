import React from 'react';
import find from 'lodash/find';
import cx from 'classnames';
import moment from 'moment';
const materialIcons = "material-icons";

var DatePicker = require('./datepicker/datepicker.jsx');
require('./datepicker/stylesheets/datepicker-cssmodules.scss');
import s from './calendar.scss';

export default class Calendar extends React.Component {

  constructor(props) {
  super(props);

    this.state = {
      displayName: 'Calendar',
      startDate: moment()
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return(
      <div>
        <i className={cx(materialIcons, s.calendarIcon)}>date_range</i>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        />
      </div>
    )
  }
}
