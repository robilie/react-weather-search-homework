import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherTemperature(props) {
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
}
