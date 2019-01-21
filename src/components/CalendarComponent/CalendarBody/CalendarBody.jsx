import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dayList, dayOfMonth, currentMonth } from '../../../utils/dateFormats';

import './CalendarBody.css';

class CalendarBody extends Component {
  static propTypes = {
    calendarData: PropTypes.object,
    availableDates: PropTypes.arrayOf(PropTypes.object),
    onHandleSelectDate: PropTypes.func.isRequired,
  };

  static defaultProps = {
    calendarData: {},
    availableDates: [],
  };

  render() {
    const { calendarData: { month, daysInMonth, emptyBlocks }, availableDates, onHandleSelectDate } = this.props;

    let daysAndAvailability = [];
    daysInMonth.forEach((item, i) => {
      daysAndAvailability.push(Object.assign({}, item, availableDates[i]));
    });

    return (
      <div className='calendar-body__wrapper'>
        {dayList.map(day => <div className='weekday' key={day} >{day}</div>)}
        {emptyBlocks.map(block => <div className="emptyday" key={block}></div>)}
        {daysAndAvailability.map(day => {
          const { available, dayNumber } = day;
          const disabledClass = (month >= currentMonth) && available ? '' : 'disabled';
          const today = (dayOfMonth === dayNumber) && (currentMonth === month) ? 'today' : '';
          return (
            <button
              key={dayNumber}
              className={`day ${disabledClass} ${today}`}
              disabled={month < currentMonth || !available}
              onClick={() => onHandleSelectDate(dayNumber)}
            >{dayNumber}</button>
          );
        })}
      </div>
    );
  }
}
export default CalendarBody;
