import React from 'react';
import CalendarNav from './CalendarNav';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('CalendarNav', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarNav />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<CalendarNav />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('renders currentDate as a number', () => {
    const component = shallow(<CalendarNav />);
    expect(component.find('.calendar-nav__date')).not.toBeNaN();
  });
});
