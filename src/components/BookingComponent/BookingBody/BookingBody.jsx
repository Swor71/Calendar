import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarComponent from '../../CalendarComponent/CalendarComponent';
import { calculateDiffInDays } from '../../../utils/dateFormats';

import './BookingBody.css';

class BookingBody extends Component {
  static propTypes = {
    availableDates: PropTypes.arrayOf(PropTypes.object),
    calendarData: PropTypes.object,
    onHandleSelectDate: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
    onHandleShowCalendar: PropTypes.func,
    price: PropTypes.number,
  };

  render() {
    const { calendarData, calendarData: { checkInDate, checkOutDate, showCalendar }, availableDates, onHandleSelectDate, onHandleMonthChange, onHandleShowCalendar, price } = this.props;
    const lengthOfStayInDays = (checkInDate && checkOutDate) ? calculateDiffInDays(checkInDate, checkOutDate) : 0;

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
            && <CalendarComponent
              calendarData={calendarData}
              availableDates={availableDates}
              onHandleSelectDate={onHandleSelectDate}
              onHandleMonthChange={onHandleMonthChange}
            />
          }
        </div>
        <div className="booking-body__output-wrapper">
          <span className="booking-body__output--header">Total price</span>
          <div className="booking-body__output--total-price">
            <span className={checkInDate && checkOutDate ? 'price-calculated' : ''}>
              {checkInDate && checkOutDate && lengthOfStayInDays !== 0
                ? `Total price for ${lengthOfStayInDays} night${lengthOfStayInDays > 1 ? 's' : ''} is ${lengthOfStayInDays * price} zł`
                : 'Please select both dates'}</span>
          </div>
        </div>
        <button className="booking-body__confirmation-button">confirm your booking</button>
      </div>
    );
  }
}

export default BookingBody;
