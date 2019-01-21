import React from 'react';
import BookingBody from './BookingBody';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('BookingBody', () => {
  it('renders the component', () => {
    const component = shallow(<BookingBody />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<BookingBody />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
