import React, { PureComponent } from 'react';

import './BookingNav.css';

class BookingNav extends PureComponent {
  render() {
    return (
      <div className="booking-nav__wrapper">
        <span className="booking-nav__price">298 zł <small>per night</small></span>
        <span className="booking-nav__rating">★★★★★ <span className="booking-nav__rating--amount">123</span></span>
      </div>
    );
  }
}

export default BookingNav;
