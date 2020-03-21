import React from 'react';
import { shallow } from 'enzyme';
import AppNavBar from './AppNavBar';
import toJson from 'enzyme-to-json';

test('renders AppNavBar', () => {
    const wrapper = shallow(<AppNavBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
});