import React, { PureComponent } from 'react';
import CalendarComponent from '../../CalendarComponent/CalendarComponent';
import PropTypes from 'prop-types';
import { calculateAmountOfDays, calculateDiffInMS } from '../../../utils/dateFormats';

import './BookingBody.css';

class BookingBody extends PureComponent {
  static propTypes = {
    availableDates: PropTypes.arrayOf(PropTypes.object),
    calendarData: PropTypes.objectOf(PropTypes.any),
    onHandleSelectDate: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
    onHandleShowCalendar: PropTypes.func,
    price: PropTypes.number,
  }

  render() {
    const { calendarData, calendarData: { checkInDate, checkOutDate, showCalendar }, availableDates, onHandleSelectDate, onHandleMonthChange, onHandleShowCalendar, price } = this.props;

    let lenghtOfStayInDays = 0;

    if (checkInDate && checkOutDate) {
      const ms = calculateDiffInMS(checkInDate, checkOutDate);
      lenghtOfStayInDays = calculateAmountOfDays(ms);
    }

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
        <div className="booking-body__output-wrapper">
          <span className="booking-body__output--header">Total price</span>
          <div className="booking-body__output--total-price">
            <span className={checkInDate && checkOutDate ? 'price-calculated' : ''}>
              {checkInDate && checkOutDate && lenghtOfStayInDays !== 0
                ? `Total price for ${lenghtOfStayInDays} night${lenghtOfStayInDays > 1 ? 's' : ''} is ${lenghtOfStayInDays * price} zł`
                : 'Please select both dates'}</span>
          </div>
        </div>
        <button className="booking-body__confirmation-button">confirm your booking</button>
      </div>
    );
  }
}

export default BookingBody;
