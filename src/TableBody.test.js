import React from 'react';
import {shallow} from 'enzyme';
import TableBody from './TableBody';
import toJson from 'enzyme-to-json';

test('renders TableBody with empty countriesStat', () => {
    const wrapper = shallow(<TableBody countriesStat={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders TableBody with countriesStat', () => {
    const wrapper = shallow(<TableBody countriesStat={countriesStat} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

const countriesStat = [{
    "country": "China",
    "cases": 80967,
    "todayCases": 39,
    "deaths": 3248,
    "todayDeaths": 3,
    "recovered": 71150,
    "activeCases": 6569,
    "critical": 2136
}, {
    "country": "Italy",
    "cases": 12313,
    "todayCases": 234,
    "deaths": 123,
    "todayDeaths": 23,
    "recovered": 32523,
    "activeCases": 4324,
    "critical": 2345
}];