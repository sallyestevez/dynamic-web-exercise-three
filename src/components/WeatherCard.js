import React, { useMemo } from "react";
import Header from "../pages/Header";
import WeatherIcon from "./WeatherIcon";

function WeatherCard({ 
    city, 
    cloudiness, 
    currentTemp, 
    highTemp, 
    humidity, 
    lowTemp, 
    weatherType, 
    windSpeed 
}) { // props - values being passed into the component
    return (
        <div>
            <h1 className="websiteTitle">Weather App</h1>
            <Header />
            <div className="card">
                <div className="WeatherCard--weatherType">
                    <h2 className="cityName">{city}</h2>
                    <p><WeatherIcon class="icon" weatherType={weatherType}/></p>
                </div>
                <div className="current">
                    <h3>{weatherType}</h3>
                    <h3>{currentTemp}°F</h3>
                </div>
                <div className="values">
                    <p>High: {highTemp}°F</p>
                    <p>Low: {lowTemp}°F</p>
                    <p>Cloudiness: {cloudiness}%</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind Speed: {windSpeed} mph</p>
                </div>
            </div>
        </div>
    )
};

export default WeatherCard;