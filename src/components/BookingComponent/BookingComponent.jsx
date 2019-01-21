import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';

import './BookingComponent.css';

class BookingComponent extends Component {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    availableDates: PropTypes.arrayOf(PropTypes.object),
    calendarData: PropTypes.object,
    onHandleShowCalendar: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
    onHandleSelectDate: PropTypes.func,
  }

  render() {
    const { price, rating, reviews, calendarData, onHandleShowCalendar, onHandleMonthChange, onHandleSelectDate, availableDates } = this.props;

    return (
      <div className='booking-component__wrapper'>
        <BookingNav
          price={price}
          rating={rating}
          reviews={reviews}
        />
        <BookingBody
          price={price}
          availableDates={availableDates}
          calendarData={calendarData}
          onHandleShowCalendar={onHandleShowCalendar}
          onHandleMonthChange={onHandleMonthChange}
          onHandleSelectDate={onHandleSelectDate}
        />
      </div>
    );
  }
}

export default BookingComponent;
