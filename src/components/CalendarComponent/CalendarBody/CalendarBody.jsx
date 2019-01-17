import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './CalendarBody.css';

class CalendarBody extends PureComponent {
  static propTypes = {
    daysArr: PropTypes.arrayOf(PropTypes.string),
    currentMonth: PropTypes.arrayOf(PropTypes.number),
    emptyBlocks: PropTypes.arrayOf(PropTypes.number),
  }

  render() {
    const { daysArr, currentMonth, emptyBlocks } = this.props;
    return (
      <div className='calendar-body__wrapper'>
        {daysArr.map(day => <div className='weekday' key={day} >{day}</div>)}
        {emptyBlocks.map((block) => <div className="emptyday" key={block}></div>)}
        {currentMonth.map(day => <div className='day' key={day} value={day} >{day}</div>)}
      </div>
    );
  }
}

export default CalendarBody;
