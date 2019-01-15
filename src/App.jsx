import React, { Component } from 'react';
import Calendar from './components/Calendar/Calendar';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
