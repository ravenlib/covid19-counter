import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import toJson from 'enzyme-to-json';

describe('renders App depending on axios result', () => {
    test('renders learn react link', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

