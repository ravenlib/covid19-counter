import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function TotalStatBody(props) {
    const updatedDate = new Date(props.totalStat.updated);
    return (
        <div>
            <Typography variant='h6' color='textSecondary'>
                Updated Date
            </Typography>
            <Typography variant='h4' color='textPrimary'>
                {updatedDate.toDateString() + " " + updatedDate.toLocaleTimeString()}
            </Typography>

            <Typography variant='h6' color='textSecondary'>
                Total Cases
            </Typography>
            <Typography variant='h4' color='textPrimary'>
                {props.totalStat.cases}
            </Typography>

            <Typography variant='h6' color='textSecondary'>
                Total Deaths
            </Typography>
            <Typography variant='h4' color='textPrimary'>
                {props.totalStat.deaths}
            </Typography>

            <Typography variant='h6' color='textSecondary'>
                Recovered Cases
            </Typography>
            <Typography variant='h4' color='textPrimary'>
                {props.totalStat.recovered}
            </Typography>
        </div>
    );

}

TotalStatBody.propTypes = {
    totalStat: PropTypes.object
};