import TotalStatBody from './TotalStatBody';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardBody from './CardBody';
import TableBody from './TableBody';
import NewsBox from './NewsBox';
import PropTypes from 'prop-types';

export default function MainBody(props) {
    const {
        isLoading,
        totalStat,
        countriesStat,
        apNews,
        windowWidth
    } = props;
    return (
        <div>
            <hr/>
            <TotalStatBody isLoading={isLoading} totalStat={totalStat}/>
            <hr/>
            {isLoading ? <CircularProgress/>
                : (isMobile(windowWidth) ? <CardBody countriesStat={countriesStat}/> :
                    <TableBody countriesStat={countriesStat}/>)
            }
            <hr/>
            {isLoading &&
            apNews.map(newsItem => <NewsBox key={newsItem.title} isLoading={isLoading}
                                                       newsItem={newsItem}></NewsBox>)
            }
        </div>
    )
}

const isMobile = (windowWidth) => {
    return windowWidth <= 750;
};


MainBody.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    totalStat: PropTypes.array.isRequired,
    countriesStat: PropTypes.array.isRequired,
    apNews: PropTypes.array.isRequired,
    windowWidth: PropTypes.number.isRequired
};