import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBolt,
    faCloud, 
    faUmbrella, 
    faSnowflake, 
    faSun 
} from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({ weatherType }) {
    switch(weatherType) {
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud}/>;
        // change base on weather type
        case 'Rain':
            return <FontAwesomeIcon icon={faUmbrella}/>;
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case 'Thunder':
            return <FontAwesomeIcon icon={faBolt}/>;
        case 'Sun' || 'Clear':
            return <FontAwesomeIcon icon={faSun}/>;
        default:
            return null;
    }
    return <div>
        <FontAwesomeIcon icon={WeatherIcon} />
    </div>
};

export default WeatherIcon;