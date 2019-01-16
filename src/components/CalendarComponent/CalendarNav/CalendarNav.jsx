import React, { PureComponent } from 'react';
import { monthsArr, month, year } from '../../../utils/dateFormats';

import './CalendarNav.css';

class CalendarNav extends PureComponent {
  render() {
    return (
      <div className="calendar-nav__wrapper">
        <button className="calendar-nav__btn--arrow-left">⟵</button>
        <span className="calendar-nav__date">{`${monthsArr[month]} ${year}`}</span>
        <button className="calendar-nav__btn--arrow-right">⟶</button>
      </div>
    );
  }
}

export default CalendarNav;
