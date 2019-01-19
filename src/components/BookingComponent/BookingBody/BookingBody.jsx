import React, { PureComponent } from 'react';
import CalendarComponent from '../../CalendarComponent/CalendarComponent';
import PropTypes from 'prop-types';

import './BookingBody.css';

class BookingBody extends PureComponent {
  static propTypes = {
    availableDates: PropTypes.arrayOf(PropTypes.object),
    calendarData: PropTypes.objectOf(PropTypes.any),
    onHandleSelectDate: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
    onHandleShowCalendar: PropTypes.func,
  }

  render() {
    const { calendarData, calendarData: { checkInDate, checkOutDate, showCalendar }, availableDates, onHandleSelectDate, onHandleMonthChange, onHandleShowCalendar } = this.props;

    return (
      <div className="booking-body__wrapper">
        <div className="booking-body__header">Dates</div>
        <div className="booking-body__inputs">
          <input
            onClick={() => onHandleShowCalendar('checkInDate')}
            readOnly
            type="text"
            placeholder="Check In"
            className="booking-body__inputs--check-in"
            value={checkInDate}
          />
          <span className="booking-body__arrow">⟶</span>
          <input
            onClick={() => onHandleShowCalendar('checkOutDate')}
            readOnly
            type="text"
            placeholder="Check Out"
            className="booking-body__inputs--check-out"
            value={checkOutDate}
          />
          {showCalendar
            ? <CalendarComponent
              calendarData={calendarData}
              availableDates={availableDates}
              onHandleSelectDate={onHandleSelectDate}
              onHandleMonthChange={onHandleMonthChange}
            />
            : null}
        </div>
      </div>
    );
  }
}

export default BookingBody;
