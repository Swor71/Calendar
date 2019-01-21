import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CalendarNav.css';

class CalendarNav extends Component {
  static propTypes = {
    currentDate: PropTypes.string,
    onHandleMonthChange: PropTypes.func,
  }

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
