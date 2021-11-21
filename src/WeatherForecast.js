import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <h4>NEXT 5 DAYS</h4>

      <div className="card-group forecast">
        <div className="card">
          <div className="card-header">Sun</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p className="forecast-icon">
                <img
                  src="https://openweathermap.org/img/wn/01d@2x.png"
                  alt="forecast icon"
                />
              </p>
              <footer className="next-day-forecast next-day">
                <br />
                <p>
                  <span className="WeatherForecast-temperature-max">7°</span>{" "}
                  <span className="WeatherForecast-temperature-min">3°</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
