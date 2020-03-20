import React from 'react';
import {shallow} from 'enzyme';
import TotalStatBody from './TableBody';
import toJson from 'enzyme-to-json';

test('renders TableBody with empty totalStat', () => {
    const wrapper = shallow(<TotalStatBody totalStat={[]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders TableBody with totalStat', () => {
    const wrapper = shallow(<TotalStatBody totalStat={totalStat}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

const totalStat = {
    "cases": 254701,
    "deaths": 10447,
    "recovered": 89071,
    "updated": 1584710988792
};