import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from '../components/WeatherCard';

function Home() {
    // Value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("Orlando");
    const [searchParams] = useSearchParams();
    
    // Cities: Seoul, Chicago, Tokyo, Bogota
    console.log('searchParams', searchParams.get("city"));

    useEffect (() => {
        const cityToQuery = searchParams.get("city") || city;
        setCity(cityToQuery);

        // Query OpenWeatherAPI for weather data
        // make request to OpenWeather based on city
        axios
        // URL for accessing OpenWeatherAPI with Query Params
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`)
        .then(function (response) {
            setWeatherData(response.data);
        })
        .catch(function(error) {
            console.warn(error);
            setWeatherData({});
        }); 
    }, []);

    const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        return {
            cloudiness: weatherData.clouds && weatherData.clouds.all,
            currentTemp: Math.round(weatherMain.temp),
            highTemp: Math.round(weatherMain.temp_max),
            humidity: weatherMain.humidity,
            lowTemp: Math.round(weatherMain.temp_min),
            weatherType: weatherData.weather && weatherData.weather[0].main,
            windSpeed: weatherData.wind && Math.round(weatherData.wind.speed),
        };
    }, [weatherData]);

    console.log("state value", weatherData);

    return (
        <div>
            <WeatherCard 
                city={city}
                cloudiness={cloudiness}
                currentTemp={currentTemp} 
                highTemp={highTemp}
                humidity={humidity} 
                lowTemp={lowTemp}
                weatherType={weatherType}
                windSpeed={windSpeed}
            />
        </div>
    );
}

export default Home;