import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col-sm-4 daily-temp">
            <h1>{Math.round(props.celsius)}°C</h1>
          </div>
          <div className="col-sm-4 daily-temp">
            <div className="high-low">
              <sup id="high">{Math.round(props.max)}</sup>/
              <sub id="low">{Math.round(props.min)}</sub>
            </div>
            <div className="alter-ego">
              <sup>
                °C |
                <a href="/" className="temp-link" onClick={showFahrenheit}>
                  °F
                </a>
              </sup>
            </div>
          </div>
          <div className="col-sm-4 daily-temp">
            <img
              id="weather-image-today"
              src={props.weatherIcon}
              className="weather-size"
              alt={props.iconDescription}
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
            <h6 className="feels-like">
              Feels Like {Math.round(props.feelsLikeTemp)}°
            </h6>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    let fahrenheitMax = props.max * 1.8 + 32;
    let fahrenheitMin = props.min * 1.8 + 32;
    let fahrenheitFeels = props.feelsLikeTemp * 1.8 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col-sm-4 daily-temp">
            <h1>{Math.round(fahrenheit)}°F</h1>
          </div>
          <div className="col-sm-4 daily-temp">
            <div className="high-low">
              <sup id="high">{Math.round(fahrenheitMax)}</sup>/
              <sub id="low">{Math.round(fahrenheitMin)}</sub>
            </div>
            <div className="alter-ego">
              <sup>
                <a href="/" className="temp-link" onClick={showCelsius}>
                  °C{" "}
                </a>
                | °F
              </sup>
            </div>
          </div>
          <div className="col-sm-4 daily-temp">
            <img
              src={props.weatherIcon}
              className="weather-size"
              alt={props.iconDescription}
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
            <h6 className="feels-like">
              Feels Like {Math.round(fahrenheitFeels)}°
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
