import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div id="recBox">
        <div className="row">
          <div className="col-sm-4 daily-temp">
            <h1>21°C</h1>
          </div>
          <div className="col-sm-4 daily-temp">
            <div className="high-low">
              <sup id="high">25</sup>/<sub id="low">18</sub>
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
              src="https://www.freeiconspng.com/uploads/cloud-sun-weather-icon-32.png"
              className="weather-size"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h6 className="date-time">Mon October 11, 2:00pm</h6>
          </div>
          <div className="col-6">
            <h6 className="feels-like" id="feels-like-temp">
              Feels like 25°
            </h6>
          </div>
        </div>
        <h2>White Rock</h2>

        <h3>Partly cloudy skies</h3>

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
                  <span id="humidity">42 </span>%
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
                  <span id="wind-speed"> 1</span>
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
}
