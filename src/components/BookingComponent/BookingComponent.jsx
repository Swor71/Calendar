import React, { PureComponent } from 'react';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';
import PropTypes from 'prop-types';
import { month, year, firstDayOfMonth, formatDate, selectDate } from '../../utils/dateFormats';

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
    const { activeInput, month, year } = this.state;
    const date = selectDate(year, month, day);
    this.setState({ [activeInput]: date, showCalendar: false });
  }

  render() {
    const { checkInDate, checkOutDate, showCalendar, month, year, activeInput } = this.state;
    const { price, rating, reviews, availableDates: currentMonth } = this.props;

    const currentDate = formatDate(year, month);

    const startOfMonth = firstDayOfMonth(year, month);
    let emptyBlocks = [];
    for (let i = 0; i <= startOfMonth; i++) {
      emptyBlocks.push(i);
    }
    if (emptyBlocks.length > 6) {
      emptyBlocks = [];
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
