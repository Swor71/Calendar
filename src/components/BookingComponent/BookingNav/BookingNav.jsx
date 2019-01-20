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
    const star = '★';
    let stars = star.repeat(rating);

    return (
      <div className="booking-nav__wrapper">
        <span className="booking-nav__price">{price} zł<small>per night</small></span>
        <span className="booking-nav__rating--stars">
          {`${stars}`}
          {rating % 1 !== 0
            ? <span className="booking-nav__rating--half-star">{star}</span>
            : null
          }
          <span className="booking-nav__rating--reviews">{reviews}</span>
        </span>
      </div>
    );
  }
}

export default BookingNav;
