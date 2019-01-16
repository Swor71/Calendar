import React, { PureComponent } from 'react';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';
import PropTypes from 'prop-types';

import './BookingComponent.css';

class BookingComponent extends PureComponent {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    availableDates: PropTypes.array,
  }

  render() {
    const { price, rating, reviews } = this.props;
    return (
      <div className='booking-component__wrapper'>
        <BookingNav
          price={price}
          rating={rating}
          reviews={reviews}
        />
        <BookingBody />
      </div>
    );
  }
}

export default BookingComponent;
