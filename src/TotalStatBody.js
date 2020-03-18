import React from 'react';
import PropTypes from 'prop-types';

export default function TotalStatBody(props) {
    if (props.totalStat !== undefined || !props.isLoading) {
        const updatedDate = new Date(props.totalStat.updated);
        return (
            <div>
                <div>Updated Date: {updatedDate.toDateString() + " " + updatedDate.toLocaleTimeString()}</div>
                <div>Total Cases: {props.totalStat.cases}</div>
                <div>Total Deaths: {props.totalStat.deaths}</div>
                <div>Recovered Cases: {props.totalStat.deaths}</div>
            </div>
        );
    }
    return (
        <div>
            <div>Updated Date: Loading...</div>
            <div>Total Cases: Loading...</div>
            <div>Total Deaths: Loading...</div>
            <div>Recovered Cases: Loading...</div>
        </div>
    )
}

TotalStatBody.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    totalStat: PropTypes.object
}