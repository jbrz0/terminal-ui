
var React = require('react');
var DatePicker = require('./datepicker/datepicker.jsx');
var moment = require('moment');

import find from 'lodash/find';

// require('./react-datepicker.css');
require('./datepicker/stylesheets/datepicker-cssmodules.scss');
// CSS Modules, react-datepicker-cssmodules.css
// require('react-datepicker/dist/react-datepicker-cssmodules.css');
import cx from 'classnames';
import s from './calendar.scss';

  // if (date === null) {
  // console.log("selected date: %s", date);
  // }
  // else {
  // console.log("selected date: %s", date.format("DD/MM/YYYY"));
  // }

// .react-datepicker

const materialIcons = "material-icons";

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
