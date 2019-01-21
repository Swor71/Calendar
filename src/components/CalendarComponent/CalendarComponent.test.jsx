import React from 'react';
import CalendarComponent from './CalendarComponent';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('CalendarComponent', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarComponent currentDate={'January 2019'} />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<CalendarComponent currentDate={'January 2019'} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
