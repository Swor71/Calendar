import React, { PureComponent } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import PropTypes from 'prop-types';


import './CalendarComponent.css';

class CalendarComponent extends PureComponent {
  static propTypes = {
    calendarData: PropTypes.object,
    onHandleSelectDate: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
  }

  render() {
    const { calendarData, calendarData: { currentDate, activeInput }, onHandleSelectDate, onHandleMonthChange } = this.props;

    const inputSelect = 'calendar-component__wrapper ' + `${activeInput === 'checkOutDate' ? 'checkOutDate' : 'checkInDate'}`;
    return (
      <div className={inputSelect}>
        <CalendarNav
          currentDate={currentDate}
          onHandleMonthChange={onHandleMonthChange}
        />
        <CalendarBody
          calendarData={calendarData}
          onHandleSelectDate={onHandleSelectDate}
        />
        <CalendarFooter />
      </div>
    );
  }
}

export default CalendarComponent;
