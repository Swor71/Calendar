import React from 'react';
import BookingNav from './BookingNav';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('BookingNav', () => {
  it('renders the component', () => {
    const component = shallow(<BookingNav />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<BookingNav />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
