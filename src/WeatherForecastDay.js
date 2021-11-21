import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="card">
        <div className="card-header">{day()}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="forecastIcon">
              <img
                src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                alt="forecast Icon"
              />
            </p>
            <footer className="next-day-forecast next-day">
              <br />
              <p>
                <span className="WeatherForecast-temperature-max">
                  {maxTemperature()}°
                </span>{" "}
                <span className="WeatherForecast-temperature-min">
                  {minTemperature()}°
                </span>
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
