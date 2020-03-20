import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        marginBottom: 10
    }
});

export default function CountryCard(props) {
    const classes = useStyles();
    const {
        country,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        // activeCases,
        critical,
    } = props.countryStat;
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {country}
                </Typography>
                <Typography color="textSecondary">
                    New Cases: {todayCases}
                </Typography>
                <Typography color="textSecondary">
                    New Deaths: {todayDeaths}
                </Typography>
                <Typography color="textSecondary">
                    Critical: {critical}
                </Typography>
                <Typography color="textSecondary">
                    Total Cases: {cases}
                </Typography>
                <Typography color="textSecondary">
                    Total Deaths: {deaths}
                </Typography>
                <Typography color="textSecondary">
                    Recovered: {recovered}
                </Typography>
            </CardContent>
        </Card>
    )
}

CountryCard.prototype = {
    countryStat: PropTypes.object.isRequired
};