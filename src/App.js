import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import CircularProgress from "@material-ui/core/CircularProgress";
import AppNavBar from './AppNavBar'
import MainBody from './MainBody';

export default class App extends React.Component {

    state = {
        isFailed: false,
        isLoading: true,
        countriesStat: [],
        totalStat: {},
        apNews: [],
        displayTable: true,
        windowWidth: window.innerWidth
    };

    async componentDidMount() {
        try {
            const totalStat = await (await axios.get('https://covid19-counter-api.herokuapp.com/v1/statistics/summary')).data;
            const countriesStat = await (await axios.get('https://covid19-counter-api.herokuapp.com/v1/statistics/countries')).data.countries;
            const apNews = await (await axios.get('https://covid19-counter-api.herokuapp.com/v1/news')).data.news;
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({
                isLoading: false,
                totalStat,
                countriesStat,
                apNews
            })
        } catch (err) {
            this.setState({
                isFailed: true
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({windowWidth: window.innerWidth});
    };

    render() {
        return (
            <div>
                <AppNavBar />
                {this.state.isFailed &&
                <Alert variant="danger">Error has occurred, please refresh the page or contact the
                    administrator</Alert>}
                <MainWrapper>
                    {this.state.isLoading ? <ProgressWrapper><CircularProgress/></ProgressWrapper> :
                        <MainBody countriesStat={this.state.countriesStat} apNews={this.state.apNews}
                                  isLoading={this.state.isLoading} totalStat={this.state.totalStat}
                                  windowWidth={this.state.windowWidth}/>
                    }
                </MainWrapper>
            </div>
        );
    }
}

const MainWrapper = styled.section`
    width: 90%;
    text-align: center;
    margin: auto;
`;

const ProgressWrapper = styled.section`
    margin: 1.5em;
`;