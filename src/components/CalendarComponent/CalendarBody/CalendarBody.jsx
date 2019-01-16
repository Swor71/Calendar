import React, { PureComponent } from 'react';
import { daysArr, numberOfDaysInMonth, year, month } from '../../../utils/dateFormats';

import './CalendarBody.css';

class CalendarBody extends PureComponent {
  render() {
    const amountOfDays = numberOfDaysInMonth(year, month);
    let arr = [];
    for (let i = 1; i <= amountOfDays; i++) {
      arr.push(i);
    }
    return (
      <div className='calendar-body__wrapper'>
        {daysArr.map((day, index) => <div className='weekday' key={index} >{day}</div>)}
        {arr.map((day, index) => <div className='day' key={index} value={day} >{day}</div>)}
      </div>
    );
  }
}

export default CalendarBody;
