import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div id="recBox">
          <div className="row">
            <div className="col-sm-4 daily-temp">
              <h1>{Math.round(weatherData.temperature)}°C</h1>
            </div>
            <div className="col-sm-4 daily-temp">
              <div className="high-low">
                <sup id="high">{Math.round(weatherData.maxTemp)}</sup>/
                <sub id="low">{Math.round(weatherData.minTemp)}</sub>
              </div>
              <div className="alter-ego">
                <sup>
                  <a href="/" id="celsius-link" className="temp-link">
                    °C
                  </a>{" "}
                  |
                  <a href="/" id="fahrenheit-link" className="temp-link">
                    °F
                  </a>
                </sup>
              </div>
            </div>
            <div className="col-sm-4 daily-temp">
              <img
                id="weather-image-today"
                src={weatherData.icon}
                className="weather-size"
                alt={weatherData.description}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6 className="date-time">
                <FormattedDate />
              </h6>
            </div>
            <div className="col-6">
              <h6 className="feels-like" id="feels-like-temp">
                Feels Like {Math.round(weatherData.feelsLike)}°
              </h6>
            </div>
          </div>
          <h2>{weatherData.city}</h2>

          <h3>{weatherData.description}</h3>

          <br />
          <h4>DETAIL</h4>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/219/219816.png"
                  class="card-img-top"
                  alt="humidity"
                />
                <div className="card-body">
                  <p className="card-text">
                    Humidity
                    <br />
                    <span id="humidity">
                      {Math.round(weatherData.humidity)}{" "}
                    </span>
                    %
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/959/959711.png"
                  className="card-img-top"
                  alt="wind"
                />
                <div className="card-body">
                  <p className="card-text">
                    Wind
                    <br />
                    <span id="wind-speed"> {Math.round(weatherData.wind)}</span>
                    <sub>km/hr </sub>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <form id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the City"
                  autoFocus="on"
                  id="search-text-input"
                />
              </div>
              <div className="col-3">
                <button
                  type="submit"
                  className="btn btn-light"
                  id="submit-city-button"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3e9b7fb8cbac59f9b2f8b3d635b8d32";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "The app is loading...";
  }
}
