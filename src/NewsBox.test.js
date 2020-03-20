import React from 'react';
import {shallow} from 'enzyme';
import NewsBox from './NewsBox';
import toJson from 'enzyme-to-json';

test('renders NewsBox correctly with newsItem isNotLoading', () => {
    const wrapper = shallow(<NewsBox isLoading={false}
                                     newsItem={newsItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders NewsBox correctly with newsItem isLoading', () => {
    const wrapper = shallow(<NewsBox isLoading={true}
                                     newsItem={newsItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

const newsItem = {
    "title": "Title1",
    "description": "description1",
    "link": "https://link1.com"
};