import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-4 daily-temp">
          <h1>{Math.round(props.data.temperature)}°C</h1>
        </div>
        <div className="col-sm-4 daily-temp">
          <div className="high-low">
            <sup id="high">{Math.round(props.data.maxTemp)}</sup>/
            <sub id="low">{Math.round(props.data.minTemp)}</sub>
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
            src={props.data.icon}
            className="weather-size"
            alt={props.data.description}
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
            Feels Like {Math.round(props.data.feelsLike)}°
          </h6>
        </div>
      </div>
      <h2>{props.data.city}</h2>

      <h3>{props.data.description}</h3>

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
                <span id="humidity">{Math.round(props.data.humidity)} </span>%
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
                <span id="wind-speed"> {Math.round(props.data.wind)}</span>
                <sub>km/hr </sub>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
