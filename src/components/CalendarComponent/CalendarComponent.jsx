import React, { Component } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import PropTypes from 'prop-types';

import './CalendarComponent.css';

class CalendarComponent extends Component {
  static propTypes = {
    availableDates: PropTypes.arrayOf(PropTypes.object),
    calendarData: PropTypes.object,
    onHandleSelectDate: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
  }

  static defaultProps = {
    availableDates: [{}],
    calendarData: {
      currentDate: '',
      activeInput: '',
      daysInMonth: [],
      emptyBlocks: [],
    },
  }

  render() {
    const { calendarData, availableDates, onHandleSelectDate, onHandleMonthChange } = this.props;
    const { currentDate, activeInput } = calendarData;
    const selectedInput = `calendar-component__wrapper ${(activeInput === 'checkOutDate') ? 'checkOutDate' : 'checkInDate'}`;

    return (
      <div className={selectedInput}>
        <CalendarNav
          currentDate={currentDate}
          onHandleMonthChange={onHandleMonthChange}
        />
        <CalendarBody
          calendarData={calendarData}
          availableDates={availableDates}
          onHandleSelectDate={onHandleSelectDate}
        />
        <CalendarFooter />
      </div>
    );
  }
}

export default CalendarComponent;
