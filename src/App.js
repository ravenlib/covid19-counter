import React from 'react';
import styled from 'styled-components';
import TotalStatBody from './TotalStatBody';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import NewsBox from './NewsBox';
import TableBody from "./TableBody";
import CardBody from './CardBody';
import CircularProgress from "@material-ui/core/CircularProgress";

export default class App extends React.Component {

    state = {
        isFailed: false,
        isLoading: true,
        countriesStat: [],
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

    isMobile = () => {
        console.log(this.state.windowWidth <= 750);
        return this.state.windowWidth <= 750;
    };

    render() {
        return (
            <div>
                {this.state.isFailed &&
                <Alert variant="danger">Error has occurred, please refresh the page or contact the
                    administrator</Alert>}
                <MainWrapper>
                    <hr/>
                    <TitleWrapper>
                        <h1>COVID-19 Counter</h1>
                    </TitleWrapper>
                    <hr/>
                    <TotalStatBody isLoading={this.state.isLoading} totalStat={this.state.totalStat}/>
                    <hr/>
                    {this.state.isLoading ? <CircularProgress/>
                        : (this.isMobile() ? <CardBody countriesStat={this.state.countriesStat}/> :
                            <TableBody countriesStat={this.state.countriesStat}/>)
                    }
                    <hr/>
                    {!this.state.isLoading &&
                    this.state.apNews.map(newsItem => <NewsBox key={newsItem.title} isLoading={this.state.isLoading}
                                                               newsItem={newsItem}></NewsBox>)
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

const TitleWrapper = styled.section`
  margin: 1.5em;
  h1 {
    font-size: 1.5em;
  }
`;
