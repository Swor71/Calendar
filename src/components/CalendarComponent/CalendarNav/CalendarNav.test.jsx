import React from 'react';
import { shallow } from 'enzyme';
import CalendarNav from './CalendarNav';

describe('CalendarNav', () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'error');
  });

  it('should match snapshot without current date prop', () => {
    const component = shallow(<CalendarNav currentDate="January 2022" />);

    expect(component).toMatchSnapshot();
  });

  it('should render the component and verify whether arrows work properly', () => {
    const propsMock = {
      onHandleMonthChange: jest.fn(),
    };
    const component = shallow(<CalendarNav {...propsMock} />);
    const arrowLeft = component.find('.calendar-nav__btn--arrow-left');
    const arrowRight = component.find('.calendar-nav__btn--arrow-right');

    arrowLeft.simulate('click');

    expect(propsMock.onHandleMonthChange).toHaveBeenCalledTimes(1);
    expect(propsMock.onHandleMonthChange).toHaveBeenCalledWith(-1);

    arrowRight.simulate('click');

    expect(propsMock.onHandleMonthChange).toHaveBeenCalledTimes(2);
    expect(propsMock.onHandleMonthChange).toHaveBeenCalledWith(1);

    arrowLeft.simulate('click');
    arrowRight.simulate('click');
    arrowLeft.simulate('click');

    expect(propsMock.onHandleMonthChange).toHaveBeenCalledTimes(5);
  });

  it('shows no errors on console', () => {
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
