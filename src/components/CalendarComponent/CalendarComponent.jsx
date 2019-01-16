import React, { PureComponent } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';

import './CalendarComponent.css';

class CalendarComponent extends PureComponent {
  render() {
    return (
      <div className='calendar-component__wrapper'>
        <CalendarNav />
        <CalendarBody />
        <CalendarFooter />
      </div>
    );
  }
}

export default CalendarComponent;
