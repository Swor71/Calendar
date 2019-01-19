import React, { Component } from 'react';
import BookingComponent from './components/BookingComponent/BookingComponent';
import { numberOfDaysInMonth, month, year } from './utils/dateFormats';

import './App.css';

class App extends Component {
  render() {
    let availableDates = [];
    const amountOfDays = numberOfDaysInMonth(year, month);
    for (let i = 1; i <= amountOfDays; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      availableDates.push({
        dayNumber: i,
        available: randomNumber >= 5 ? true : false,
      });
    }

    return (
      <div className='App'>
        <BookingComponent
          price={298}
          rating={4.5}
          reviews={123}
          availableDates={availableDates}
        />
      </div>
    );
  }
}

export default App;
