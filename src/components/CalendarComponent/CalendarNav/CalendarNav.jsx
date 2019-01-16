import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './CalendarNav.css';

class CalendarNav extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
    onHandleMonthChange: PropTypes.func,
  }

  render() {
    const { date, onHandleMonthChange } = this.props;
    return (
      <div className="calendar-nav__wrapper">
        <button
          className="calendar-nav__btn--arrow-left"
          onClick={() => onHandleMonthChange(-1)}
        >⟵</button>
        <span className="calendar-nav__date">{date}</span>
        <button
          className="calendar-nav__btn--arrow-right"
          onClick={() => onHandleMonthChange(1)}
        >⟶</button>
      </div>
    );
  }
}

export default CalendarNav;
