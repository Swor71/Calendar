import React, { PureComponent } from 'react';

import './CalendarBody.css';

class CalendarBody extends PureComponent {

  render() {
    let daysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    let arr = [];
    for (let i = 1; i <= 31; i++) {
      arr.push(i);
    }
    return (
      <div className='calendar-body-wrapper'>
        {daysArr.map((day, index) => <div className='weekday' key={index} >{day}</div>)}
        {arr.map((day, index) => <div className='day' key={index} >{day}</div>)}
      </div>
    );
  }
}

export default CalendarBody;
