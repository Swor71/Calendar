import React from 'react';
import BookingComponent from './BookingComponent';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('BookingComponent', () => {
  it('renders the component', () => {
    const component = shallow(<BookingComponent />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<BookingComponent />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
