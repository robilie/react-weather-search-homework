import React from "react";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <WeatherTemperature
        celsius={props.data.temperature}
        max={props.data.maxTemp}
        min={props.data.minTemp}
        weatherIcon={props.data.icon}
        iconDescription={props.data.description}
        feelsLikeTemp={props.data.feelsLike}
      />

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
