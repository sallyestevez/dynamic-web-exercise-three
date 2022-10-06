import React, { useMemo } from "react";
import Header from "../pages/Header";

function WeatherCard({ city, cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed }) { // props - values being passed into the component
    return (
        <div>
            <h1>Weather App</h1>
            <Header />
            <h2>{city}</h2>
            <p>{weatherType}</p>
            <h3>{currentTemp}°F</h3>
            <p>High: {highTemp}°F</p>
            <p>Low: {lowTemp}°F</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {windSpeed} mph</p>
        </div>
    )
};

export default WeatherCard;