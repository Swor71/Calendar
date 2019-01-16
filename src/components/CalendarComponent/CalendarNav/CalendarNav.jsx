import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './CalendarNav.css';

class CalendarNav extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
  }

  render() {
    const { date } = this.props;
    return (
      <div className="calendar-nav__wrapper">
        <button className="calendar-nav__btn--arrow-left">⟵</button>
        <span className="calendar-nav__date">{date}</span>
        <button className="calendar-nav__btn--arrow-right">⟶</button>
      </div>
    );
  }
}

export default CalendarNav;
