import React, { PureComponent } from 'react';

import './CalendarNav.css';

class CalendarNav extends PureComponent {
  render() {
    return (
      <div className="calendar-nav-wrapper">
        <button className="btn-arrow-left">⟵</button>
        <span className="month-year">June 2018</span>
        <button className="btn-arrow-right">⟶</button>
      </div>
    );
  }
}

export default CalendarNav;
