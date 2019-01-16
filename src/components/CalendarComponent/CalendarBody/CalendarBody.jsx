import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './CalendarBody.css';

class CalendarBody extends PureComponent {
  static propTypes = {
    daysArr: PropTypes.array,
    arr: PropTypes.array,
    emptyBlocks: PropTypes.array,
  }

  static defaultProps = {
    daysArr: [],
    arr: [],
  }

  render() {
    const { daysArr, arr, emptyBlocks } = this.props;
    return (
      <div className='calendar-body__wrapper'>
        {daysArr.map((day, index) => <div className='weekday' key={index} >{day}</div>)}
        {emptyBlocks.map((block) => <div className="emptyday" key={block}></div>)}
        {arr.map((day, index) => <div className='day' key={index} value={day} >{day}</div>)}
      </div>
    );
  }
}

export default CalendarBody;
