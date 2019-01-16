import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './CalendarBody.css';

class CalendarBody extends PureComponent {
  static propTypes = {
    daysArr: PropTypes.arrayOf(PropTypes.number),
    currentMonth: PropTypes.arrayOf(PropTypes.number),
    emptyBlocks: PropTypes.arrayOf(PropTypes.number),
  }

  static defaultProps = {
    daysArr: [],
    currentMonth: [],
    emptyBlocks: [],
  }

  render() {
    const { daysArr, currentMonth, emptyBlocks } = this.props;
    return (
      <div className='calendar-body__wrapper'>
        {daysArr.map((day, index) => <div className='weekday' key={index} >{day}</div>)}
        {emptyBlocks.map((block) => <div className="emptyday" key={block}></div>)}
        {currentMonth.map((day, index) => <div className='day' key={index} value={day} >{day}</div>)}
      </div>
    );
  }
}

export default CalendarBody;
