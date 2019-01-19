import React, { PureComponent } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import PropTypes from 'prop-types';


import './CalendarComponent.css';

class CalendarComponent extends PureComponent {
  static propTypes = {
    availableDates: PropTypes.arrayOf(PropTypes.object),
    calendarData: PropTypes.objectOf(PropTypes.any),
    onHandleSelectDate: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
  }

  render() {
    const { calendarData, calendarData: { currentDate, activeInput }, availableDates, onHandleSelectDate, onHandleMonthChange } = this.props;
    const selectedInput = 'calendar-component__wrapper ' + (activeInput === 'checkOutDate' ? 'checkOutDate' : 'checkInDate');

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
