import React, { useEffect, useState } from 'react';
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import axios from 'axios';
// URL for accessing OpenWeatherAPI with Query Params
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${0be43d215ae9eb94782c2e5915138139}';

function Home(){
    // value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});
    
useEffect(() => {
    //Query OpenWeatherAPI for weather data
    // make request to OpenWeather based on city
    axios
        .get(openWeatherUrl)
        .then(function (response) {
            setWeatherData(response.data)
         })
         .catch(function (error) {
            console.warn(error);
            setWeatherData({});
         });

}, []);

    //display this weather data in our app
    console.log("state value", weatherData);

    return (
    <div>
        <h1>Weather App</h1>
        <p>{openWeatherUrl}</p>
        <h2>{weatherData.name}</h2>
        <p>Humidty: {weatherData.main && weatherData.humidity}</p>
    </div>)
}

export default Home;