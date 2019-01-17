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
    selectedDate: '',
    showCalendar: false,
  }

  handleShowCalendar = () => {
    this.setState({ showCalendar: true });
  }

  handleMonthChange = (value) => {
    this.setState(prevState => ({ month: prevState.month + value }));
  }

  handleSelectDate = (day) => {
    const date = `${day}/${this.state.month + 1}/${this.state.year}`;
    this.setState({ selectedDate: date, showCalendar: false });
  }

  render() {
    const { selectedDate, showCalendar, month, year } = this.state;
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
          calendarData={{ emptyBlocks, currentMonth, currentDate, showCalendar, selectedDate }}
          onHandleShowCalendar={this.handleShowCalendar}
          onHandleMonthChange={this.handleMonthChange}
          onHandleSelectDate={this.handleSelectDate}
        />
      </div>
    );
  }
}

export default BookingComponent;
