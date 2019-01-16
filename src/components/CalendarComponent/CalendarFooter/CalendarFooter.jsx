import React, { PureComponent } from 'react';

import './CalendarFooter.css';

class CalendarFooter extends PureComponent {
  render() {
    return (
      <div className='calendar-footer__wrapper'>
        <span>Minimum stay varies</span>
        <span>Updated 23 days ago</span>
      </div>
    );
  }
}

export default CalendarFooter;
