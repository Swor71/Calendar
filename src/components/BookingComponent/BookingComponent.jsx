import React, { Component } from 'react';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';
import PropTypes from 'prop-types';
import { month, year, numberOfDaysInMonth, firstDayOfMonth, formatDate } from '../../utils/dateFormats';

import './BookingComponent.css';

class BookingComponent extends Component {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    availableDates: PropTypes.arrayOf(PropTypes.object),
  }

  state = {
    month,
    year,
    checkInDate: '',
    checkOutDate: '',
    activeInput: '',
    showCalendar: false,
  }

  handleShowCalendar = (type) => {
    this.setState({ showCalendar: true, activeInput: type });
  }

  handleMonthChange = (value) => {
    this.setState(prevState => ({ month: prevState.month + value }));
  }

  handleSelectDate = (day) => {
    const { activeInput } = this.state;
    let _month = this.state.month;
    let _year = this.state.year;
    if (_month >= 12) {
      _month -= 12;
      _year += 1;
    } else if (_month < 0) {
      _month += 12;
      _year -= 1;
    }
    const date = `${day}/${_month + 1}/${_year}`;
    if (activeInput === 'checkInDate') {
      this.setState({ checkInDate: date, showCalendar: false });
    } else if (activeInput === 'checkOutDate') {
      this.setState({ checkOutDate: date, showCalendar: false });
    }
  }

  render() {
    const { checkInDate, checkOutDate, showCalendar, month, year, activeInput } = this.state;
    const { price, rating, reviews } = this.props;
    const currentDate = formatDate(year, month);

    const amountOfDays = numberOfDaysInMonth(year, month);
    const startOfMonth = firstDayOfMonth(year, month);
    let currentMonth = [];
    let emptyBlocks = [];
    for (let i = 0; i <= startOfMonth; i++) {
      emptyBlocks.push(i);
    }
    if (emptyBlocks.length > 6) {
      emptyBlocks = [];
    }
    for (let i = 1; i <= amountOfDays; i++) {
      currentMonth.push(i);
    }

    return (
      <div className='booking-component__wrapper'>
        <BookingNav
          price={price}
          rating={rating}
          reviews={reviews}
        />
        <BookingBody
          calendarData={{ emptyBlocks, currentMonth, currentDate, showCalendar, checkInDate, checkOutDate, activeInput }}
          onHandleShowCalendar={this.handleShowCalendar}
          onHandleMonthChange={this.handleMonthChange}
          onHandleSelectDate={this.handleSelectDate}
        />
      </div>
    );
  }
}

export default BookingComponent;
