import React from 'react';
import CalendarFooter from './CalendarFooter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('CalendarFooter', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarFooter />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<CalendarFooter />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
