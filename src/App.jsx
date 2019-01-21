import React, { Component } from 'react';
import BookingComponent from './components/BookingComponent/BookingComponent';
import { currentMonth, currentYear, numberOfDaysInMonth, firstDayOfMonth, formatDate, selectDate, dayOfMonth, dateToMS } from './utils/dateFormats';

import './App.css';

class App extends Component {
  state = {
    month: currentMonth,
    year: currentYear,
    checkInDate: '',
    checkOutDate: '',
    activeInput: '',
    showCalendar: false,
    availableDates: [],
  }

  componentDidMount() {
    this.setState({ availableDates: this.generateAvailableDates() });
  }

  generateAvailableDates() {
    let availableDates = [];
    const amountOfDays = numberOfDaysInMonth(currentYear, currentMonth);

    for (let i = 1; i <= amountOfDays; i++) {
      const randomNumber = Math.floor(Math.random() * 10);

      if (i < dayOfMonth) {
        availableDates.push({
          available: false,
        });
      } else {
        availableDates.push({
          available: randomNumber >= 3,
        });
      }
    }

    return availableDates;
  }

  handleShowCalendar = (type) => {
    this.setState({ showCalendar: true, activeInput: type });
  }

  handleCloseCalendar = () => {
    const { showCalendar } = this.state;
    if (showCalendar) {
      this.setState({ showCalendar: false });
    }
  }

  handleMonthChange = (value) => {
    this.setState(prevState => ({ month: prevState.month + value }));
  }

  handleSelectDate = (day) => {
    const { activeInput, month, year, checkInDate, checkOutDate } = this.state;
    const date = selectDate(year, month, day);

    if (activeInput === 'checkInDate') {
      if (dateToMS(date) > dateToMS(checkOutDate)) {
        return null;
      }
      this.setState({ [activeInput]: date, activeInput: 'checkOutDate' });
    } else if (activeInput === 'checkOutDate') {
      if (dateToMS(date) < dateToMS(checkInDate)) {
        return null;
      }
      this.setState({ [activeInput]: date, showCalendar: false });
    }
  }

  render() {
    const { checkInDate, checkOutDate, showCalendar, month, year, activeInput, availableDates } = this.state;
    const currentDate = formatDate(year, month);
    const startOfMonth = firstDayOfMonth(year, month);

    let emptyBlocks = [];
    for (let i = 0; i <= startOfMonth; i++) {
      emptyBlocks.push(i);
    }
    if (emptyBlocks.length > 6) {
      emptyBlocks = [];
    }

    let daysInMonth = [];
    const amountOfDays = numberOfDaysInMonth(year, month);
    for (let i = 1; i <= amountOfDays; i++) {
      daysInMonth.push({
        dayNumber: i,
      });
    }

    return (
      <div className='App'
      // onClick={this.handleCloseCalendar}>
      >
        <BookingComponent
          price={298}
          rating={4.5}
          reviews={123}
          availableDates={availableDates}
          calendarData={{ emptyBlocks, daysInMonth, month, currentDate, showCalendar, checkInDate, checkOutDate, activeInput }}
          onHandleShowCalendar={this.handleShowCalendar}
          onHandleMonthChange={this.handleMonthChange}
          onHandleSelectDate={this.handleSelectDate}
        />
      </div>
    );
  }
}

export default App;
