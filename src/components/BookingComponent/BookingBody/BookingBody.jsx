import React, { PureComponent } from 'react';

import './BookingBody.css';

class BookingBody extends PureComponent {
  render() {
    return (
      <div className="booking-body__wrapper">
        <div className="booking-body__header">Dates</div>
        <div className="booking-body__inputs">
          <input
            type="text"
            placeholder="Check In"
            className="booking-body__inputs--check-in" />
          <span className="booking-body__arrow">⟶</span>
          <input
            type="text"
            placeholder="Check Out"
            className="booking-body__inputs--check-out" />
        </div>
      </div>
    );
  }
}

export default BookingBody;
