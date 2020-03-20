import React, {useState} from 'react';
import PropTypes from 'prop-types';

import CountryCard from "./CountryCard";
import TextField from "@material-ui/core/TextField";

export default function CardBody(props) {
    const [filter, setFilter] = useState("");
    return (
        <div>
            <TextField id="standard-basic" label="Filter" onChange={event => setFilter(event.target.value)}/>
            {props.countriesStat.filter(countryStat => countryStat.country.toLowerCase().includes(filter.toLowerCase()))
                .map(countryStat => <CountryCard key={countryStat.country} countryStat={countryStat}/>)}
        </div>
    )
}

CardBody.prototype = {
    countriesStat: PropTypes.array.isRequired
};