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
    const { calendarData, calendarData: { date }, onHandleSelectDate, onHandleMonthChange } = this.props;

    return (
      <div className='calendar-component__wrapper'>
        <CalendarNav
          date={date}
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
