import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CalendarNav.css';
import { monthList, currentMonth, currentYear } from '../../../utils/dateFormats';

class CalendarNav extends Component {
  static propTypes = {
    currentDate: PropTypes.string,
    onHandleMonthChange: PropTypes.func,
  };

  static defaultProps = {
    currentDate: `${monthList[currentMonth]} ${currentYear}`
  };

  render() {
    const { currentDate, onHandleMonthChange } = this.props;
    return (
      <div className="calendar-nav__wrapper">
        <button
          className="calendar-nav__btn--arrow-left"
          onClick={() => onHandleMonthChange(-1)}
        >⟵</button>
        <span className="calendar-nav__date">{currentDate}</span>
        <button
          className="calendar-nav__btn--arrow-right"
          onClick={() => onHandleMonthChange(1)}
        >⟶</button>
      </div>
    );
  }
}

export default CalendarNav;
