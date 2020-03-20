import React from 'react';
import {shallow} from 'enzyme';
import CardBody from './CardBody';
import toJson from 'enzyme-to-json';

test('renders CardBody with empty countriesStat', () => {
    const wrapper = shallow(<CardBody countriesStat={[]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders CardBody with 1 countriesStat', () => {
    const wrapper = shallow(<CardBody countriesStat={mockDataSingle} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders CardBody with 2 countriesStat', () => {
    const wrapper = shallow(<CardBody countriesStat={mockDataDouble} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

const mockDataSingle = [{
    "country": "China",
    "cases": 80967,
    "todayCases": 39,
    "deaths": 3248,
    "todayDeaths": 3,
    "recovered": 71150,
    "activeCases": 6569,
    "critical": 2136
}];

const mockDataDouble = [{
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