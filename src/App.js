import React from 'react';
import styled from 'styled-components';
import TotalStatBody from './TotalStatBody';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class App extends React.Component {

  state = {
    isFailed: false,
    isLoading: true,
    countriesStat: []
  }
  async componentDidMount() {
    try {
      const totalStat = await (await axios.get('https://covid19-counter-api.herokuapp.com/v1/statistics/summary')).data;
      const countriesStat = await (await axios.get('https://corona.lmao.ninja/countries')).data;
      this.setState({
        isLoading: false,
        totalStat,
        countriesStat
      })
    } catch(err) {
      this.setState({
        isFailed: true
      })
    }
  }

  render() {
    console.log(this.state.totalStat);
    if (this.state.totalStat !== undefined) {
      console.log(new Date(this.state.totalStat.updated));
    }
    return (
      <div>
        {this.state.isFailed && <Alert variant="danger">Error has occurred, please refresh the page or contact the administrator</Alert>}
        <MainWrapper>
          <hr />
          <TitleWrapper>
            <h1>COVID-19 Counter</h1>
          </TitleWrapper>
          <hr />
          <TotalStatBody isLoading={this.state.isLoading} totalStat={this.state.totalStat} />
          <hr />
          {this.state.isLoading ? <Spinner animation='grow' role="status" size='xxl'><span className='sr-only'>Loading...</span></Spinner>
            : <BootstrapTable data={this.state.countriesStat} search={ true } striped hover>
                <TableHeaderColumn dataField='country' isKey headerAlign='center' dataAlign='center' dataSort={ true }>Country</TableHeaderColumn>
                <TableHeaderColumn dataField='todayCases' headerAlign='center' dataAlign='right' dataSort={ true }>New Cases</TableHeaderColumn>
                <TableHeaderColumn dataField='todayDeaths' headerAlign='center' dataAlign='right' dataSort={ true }>New Deaths</TableHeaderColumn>
                <TableHeaderColumn dataField='critical' headerAlign='center' dataAlign='right' dataSort={ true }>Critical</TableHeaderColumn>
                <TableHeaderColumn dataField='cases' headerAlign='center' dataAlign='right' dataSort={ true }>Total Cases</TableHeaderColumn>
                <TableHeaderColumn dataField='deaths' headerAlign='center' dataAlign='right' dataSort={ true }>Total Deaths</TableHeaderColumn>
                <TableHeaderColumn dataField='recovered' headerAlign='center' dataAlign='right' dataSort={ true }>Total Recovered</TableHeaderColumn>
              </BootstrapTable>
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
