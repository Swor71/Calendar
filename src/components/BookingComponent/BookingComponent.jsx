import React, { PureComponent } from 'react';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';

import './BookingComponent.css';

class BookingComponent extends PureComponent {
  render() {
    return (
      <div className='booking-component__wrapper'>
        <BookingNav />
        <BookingBody />
      </div>
    );
  }
}

export default BookingComponent;
