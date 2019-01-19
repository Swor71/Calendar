import React, { Component } from 'react';
import BookingComponent from './components/BookingComponent/BookingComponent';
import { month, year, numberOfDaysInMonth, firstDayOfMonth, formatDate, selectDate } from './utils/dateFormats';

import './App.css';

class App extends Component {
  state = {
    month,
    year,
    checkInDate: '',
    checkOutDate: '',
    activeInput: '',
    showCalendar: false,
    availableDates: [],
  }

  componentDidMount() {
    let availableDates = [];
    const amountOfDays = numberOfDaysInMonth(year, month);
    for (let i = 1; i <= amountOfDays; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      availableDates.push({
        available: randomNumber >= 5 ? true : false,
      });
    }
    this.setState({ availableDates });
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
      <div className='App'>
        <BookingComponent
          price={298}
          rating={4.5}
          reviews={123}
          availableDates={availableDates}
          calendarData={{ emptyBlocks, daysInMonth, currentDate, showCalendar, checkInDate, checkOutDate, activeInput }}
          onHandleShowCalendar={this.handleShowCalendar}
          onHandleMonthChange={this.handleMonthChange}
          onHandleSelectDate={this.handleSelectDate}
        />
      </div>
    );
  }
}

export default App;
