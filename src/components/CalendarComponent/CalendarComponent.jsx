import React, { PureComponent } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';

import { daysArr, monthsArr, month, year, numberOfDaysInMonth, firstDayOfMonth } from '../../utils/dateFormats';

import './CalendarComponent.css';

class CalendarComponent extends PureComponent {

  render() {
    const amountOfDays = numberOfDaysInMonth(year, month);
    const startOfMonth = firstDayOfMonth(year, month);
    let arr = [];
    let emptyBlocks = [];
    for (let i = 0; i <= startOfMonth; i++) {
      emptyBlocks.push(i);
    }
    for (let i = 1; i <= amountOfDays; i++) {
      arr.push(i);
    }
    return (
      <div className='calendar-component__wrapper'>
        <CalendarNav date={`${monthsArr[month]} ${year}`} />
        <CalendarBody arr={arr} daysArr={daysArr} emptyBlocks={emptyBlocks} />
        <CalendarFooter />
      </div>
    );
  }
}

export default CalendarComponent;
