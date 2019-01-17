import React, { Component } from 'react';
import BookingComponent from './components/BookingComponent/BookingComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BookingComponent
          price={298}
          rating={4.5}
          reviews={123}
          availableDates={[{}]}
        />
      </div>
    );
  }
}

export default App;
