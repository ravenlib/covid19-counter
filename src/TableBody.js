import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import React from "react";
import PropTypes from 'prop-types';

export default function TableBody(props) {
    return (
        <BootstrapTable data={props.countriesStat} search={ true } striped hover>
            <TableHeaderColumn dataField='country' isKey headerAlign='center' dataAlign='center' dataSort={ true }>Country</TableHeaderColumn>
            <TableHeaderColumn dataField='todayCases' headerAlign='center' dataAlign='right' dataSort={ true }>New Cases</TableHeaderColumn>
            <TableHeaderColumn dataField='todayDeaths' headerAlign='center' dataAlign='right' dataSort={ true }>New Deaths</TableHeaderColumn>
            <TableHeaderColumn dataField='activeCases' headerAlign='center' dataAlign='right' dataSort={ true }>Active Cases</TableHeaderColumn>
            <TableHeaderColumn dataField='critical' headerAlign='center' dataAlign='right' dataSort={ true }>Critical</TableHeaderColumn>
            <TableHeaderColumn dataField='cases' headerAlign='center' dataAlign='right' dataSort={ true }>Total Cases</TableHeaderColumn>
            <TableHeaderColumn dataField='deaths' headerAlign='center' dataAlign='right' dataSort={ true }>Total Deaths</TableHeaderColumn>
            <TableHeaderColumn dataField='recovered' headerAlign='center' dataAlign='right' dataSort={ true }>Total Recovered</TableHeaderColumn>
        </BootstrapTable>
    )
}

TableBody.prototype = {
    countriesStat: PropTypes.object.isRequired
};