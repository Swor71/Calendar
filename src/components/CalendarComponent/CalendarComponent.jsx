import React, { PureComponent } from 'react';
import CalendarNav from './CalendarNav/CalendarNav';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';

import { daysArr, monthsArr, month, year, numberOfDaysInMonth, firstDayOfMonth } from '../../utils/dateFormats';

import './CalendarComponent.css';

class CalendarComponent extends PureComponent {
  state = {
    month,
  }

  handleMonthChange = (value) => {
    this.setState(prevState => ({ month: prevState.month + value }));
  }

  render() {
    const { month } = this.state;

    const amountOfDays = numberOfDaysInMonth(year, month);
    const startOfMonth = firstDayOfMonth(year, month);
    let currentMonth = [];
    let emptyBlocks = [];
    for (let i = 0; i <= startOfMonth; i++) {
      emptyBlocks.push(i);
    }
    if (emptyBlocks.length > 6) {
      emptyBlocks = [];
    }
    for (let i = 1; i <= amountOfDays; i++) {
      currentMonth.push(i);
    }
    return (
      <div className='calendar-component__wrapper'>
        <CalendarNav
          date={`${monthsArr[month]} ${year}`}
          onHandleMonthChange={this.handleMonthChange}
        />
        <CalendarBody
          currentMonth={currentMonth}
          daysArr={daysArr}
          emptyBlocks={emptyBlocks}
        />
        <CalendarFooter />
      </div>
    );
  }
}

export default CalendarComponent;
