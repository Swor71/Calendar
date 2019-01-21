import React from 'react';
import CalendarComponent from './CalendarComponent';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('CalendarComponent', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarComponent />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<CalendarComponent />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
