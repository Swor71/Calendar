import React, { PureComponent } from 'react';
import CalendarComponent from '../../CalendarComponent/CalendarComponent';

import './BookingBody.css';

class BookingBody extends PureComponent {
  state = {
    showCalendar: true,
  }

  handleShowCalendar = ({ target }) => {
    const { value } = target;
    this.setState(prevState => ({ showCalendar: !prevState.showCalendar, cell: value }));
  }

  render() {
    return (
      <div className="booking-body__wrapper">
        <div className="booking-body__header">Dates</div>
        <div className="booking-body__inputs">
          <input
            onClick={this.handleShowCalendar}
            type="text"
            placeholder="Check In"
            className="booking-body__inputs--check-in" />
          <span className="booking-body__arrow">⟶</span>
          <input
            onClick={this.handleShowCalendar}
            type="text"
            placeholder="Check Out"
            className="booking-body__inputs--check-out" />
          {this.state.showCalendar ? <CalendarComponent /> : null}
        </div>
      </div>
    );
  }
}

export default BookingBody;
