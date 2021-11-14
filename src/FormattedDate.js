import React from "react";

export default function FormattedDate() {
  let now = new Date();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];
  let month = months[now.getMonth()];

  let number = now.getDate();

  return (
    <div className="FormattedDate">
      {day} {month} {number} {hours}:{minutes}
    </div>
  );
}
