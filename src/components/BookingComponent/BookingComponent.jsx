import React, { PureComponent } from 'react';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';
import PropTypes from 'prop-types';
import { monthsArr, month, year, numberOfDaysInMonth, firstDayOfMonth } from '../../utils/dateFormats';

import './BookingComponent.css';

class BookingComponent extends PureComponent {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    availableDates: PropTypes.arrayOf(PropTypes.object),
  }

  state = {
    month,
    selectedDate: '',
    showCalendar: false,
  }

  handleShowCalendar = () => {
    this.setState(prevState => ({ showCalendar: !prevState.showCalendar }));
  }

  handleMonthChange = (value) => {
    this.setState(prevState => ({ month: prevState.month + value }));
  }

  handleSelectDate = (day) => {
    const date = `${day}/${month + 1}/${year}`;
    this.setState({ selectedDate: date, showCalendar: false });
  }

  render() {
    const { selectedDate, showCalendar, month } = this.state;
    const { price, rating, reviews } = this.props;

    const date = `${monthsArr[month]} ${year}`;

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
          calendarData={{ emptyBlocks, currentMonth, date, showCalendar, selectedDate }}
          onHandleShowCalendar={this.handleShowCalendar}
          onHandleMonthChange={this.handleMonthChange}
          onHandleSelectDate={this.handleSelectDate}
        />
      </div>
    );
  }
}

export default BookingComponent;
