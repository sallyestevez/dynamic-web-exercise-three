import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBolt,
    faCloud, 
    faSmog,
    faSnowflake, 
    faSun,
    faUmbrella, 
} from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({ weatherType }) {
    switch(weatherType) {
        // change based on weather type
        case 'Atmosphere':
            return <FontAwesomeIcon icon={faSmog}/>;
        case 'Clear':
            return <FontAwesomeIcon icon={faSun}/>;
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud}/>;
        case 'Rain':
            return <FontAwesomeIcon icon={faUmbrella}/>;
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case 'Sun':
            return <FontAwesomeIcon icon={faSun}/>;
        case 'Thunderstorm':
            return <FontAwesomeIcon icon={faBolt}/>;
        default:
            return null;
    }
};

export default WeatherIcon;