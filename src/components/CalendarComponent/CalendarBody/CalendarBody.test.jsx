import React from 'react';
import CalendarBody from './CalendarBody';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('CalendarBody', () => {
  it('renders the component', () => {
    const component = shallow(<CalendarBody />);
    expect(component.length).toEqual(1);
  });

  it('renders correctly', () => {
    const component = renderer
      .create(<CalendarBody />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
