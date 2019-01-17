import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { daysArr } from '../../../utils/dateFormats';

import './CalendarBody.css';

class CalendarBody extends PureComponent {
  static propTypes = {
    calendarData: PropTypes.object,
    onHandleSelectDate: PropTypes.func,
  }

  render() {
    const { calendarData: { currentMonth, emptyBlocks }, onHandleSelectDate } = this.props;
    return (
      <div className='calendar-body__wrapper'>
        {daysArr.map(day => <div className='weekday' key={day} >{day}</div>)}
        {emptyBlocks.map(block => <div className="emptyday" key={block}></div>)}
        {currentMonth.map(day => {
          const { available, dayNumber } = day;
          const disabledClass = available ? '' : 'disabled';
          return (
            <button
              key={dayNumber}
              className={`day ${disabledClass}`}
              disabled={available ? null : true}
              onClick={() => onHandleSelectDate(dayNumber)}
            >{dayNumber}</button>
          );
        })}
      </div>
    );
  }
}
export default CalendarBody;
