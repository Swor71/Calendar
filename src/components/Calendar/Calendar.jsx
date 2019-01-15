import React, { PureComponent } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';

import './Calendar.css';

class Calendar extends PureComponent {
  render() {
    return (
      <div className='calendar-wrapper'>
        <CalendarNav />
        <CalendarBody />
        <CalendarFooter />
      </div>
    );
  }
}

export default Calendar;
