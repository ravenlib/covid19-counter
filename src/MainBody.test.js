import React from 'react';
import {shallow} from 'enzyme';
import MainBody from './MainBody';
import toJson from 'enzyme-to-json';

describe('Snapshots for CardBody with CircularProgress when isLoading', () => {
    test('renders CardBody with only CircularProgress when isLoading desktop', () => {
        const wrapper = shallow(<MainBody isLoading={true}
                                          countriesStat={countriesStat}
                                          totalStat={totalStat}
                                          apNews={apNews}
                                          windowWidth={751}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe('Snapshots for CardBody not isLoading', () => {

    test('renders CardBody when not isLoading desktop', () => {
        const wrapper = shallow(<MainBody isLoading={false}
                                          countriesStat={countriesStat}
                                          totalStat={totalStat}
                                          apNews={apNews}
                                          windowWidth={751}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders CardBody when not isLoading mobile1', () => {
        const wrapper = shallow(<MainBody isLoading={false}
                                          countriesStat={countriesStat}
                                          totalStat={totalStat}
                                          apNews={apNews}
                                          windowWidth={750}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders CardBody  when not isLoading mobile2', () => {
        const wrapper = shallow(<MainBody isLoading={false}
                                          countriesStat={countriesStat}
                                          totalStat={totalStat}
                                          apNews={apNews}
                                          windowWidth={749}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders CardBody no news when not isLoading desktop', () => {
        const wrapper = shallow(<MainBody isLoading={false}
                                          countriesStat={countriesStat}
                                          totalStat={totalStat}
                                          apNews={[]}
                                          windowWidth={751}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

const totalStat = {
    "cases": 254701,
    "deaths": 10447,
    "recovered": 89071,
    "updated": 1584710988792
};

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

const apNews = [{
    "title": "Title1",
    "description": "description1",
    "link": "https://link1.com"
}, {
    "title": "Title2",
    "description": "description2",
    "link": "https://link2.com"
}];