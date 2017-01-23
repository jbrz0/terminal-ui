import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";

function sunday(day) {
  return day.getDay() === 0;
}

export default class Calendar extends React.Component {
  // state = {
  //   selectedDay: new Date(),
  // }

  constructor(props) {
    super(props);

    this.state = {
      selectedDay: new Date(),
    }
  }

  handleDayClick(e, day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: null })
    } else {
      this.setState({ selectedDay: day });
    }
  }
  render() {
    return (
      <DayPicker
        initialMonth={ new Date(2016, 1) }
        disabledDays={ sunday }
        selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
        onDayClick={ this.handleDayClick.bind(this) }
    />);
  }
}
