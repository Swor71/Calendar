import React, { Component } from 'react';
import CalendarComponent from './components/CalendarComponent/CalendarComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CalendarComponent />
      </div>
    );
  }
}

export default App;
