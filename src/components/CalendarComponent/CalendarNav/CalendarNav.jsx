import React, { PureComponent } from 'react';

import './CalendarNav.css';

class CalendarNav extends PureComponent {
  render() {
    return (
      <div className="calendar-nav__wrapper">
        <button className="calendar-nav__btn--arrow-left">⟵</button>
        <span className="calendar-nav__date">June 2018</span>
        <button className="calendar-nav__btn--arrow-right">⟶</button>
      </div>
    );
  }
}

export default CalendarNav;
