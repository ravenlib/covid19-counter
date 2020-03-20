import React from 'react';
import {shallow} from 'enzyme';
import CountryCard from './CountryCard';
import toJson from 'enzyme-to-json';

test('renders CardBody with countryStat', () => {
    const wrapper = shallow(<CountryCard countryStat={mockData} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

const mockData = {
    "country": "China",
    "cases": 80967,
    "todayCases": 39,
    "deaths": 3248,
    "todayDeaths": 3,
    "recovered": 71150,
    "activeCases": 6569,
    "critical": 2136
};