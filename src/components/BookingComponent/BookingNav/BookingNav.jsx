import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './BookingNav.css';

class BookingNav extends PureComponent {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
  }

  render() {
    const { price, rating, reviews } = this.props;
    let stars = '★'.repeat(rating);
    // if (rating % 2 !== 0) {
    //   stars += '★';
    // }
    return (
      <div className="booking-nav__wrapper">
        <span className="booking-nav__price">{price} zł<small>per night</small></span>
        <span className="booking-nav__rating">{stars}
          <span className="booking-nav__rating--amount">{reviews}</span>
        </span>
      </div>
    );
  }
}

export default BookingNav;
