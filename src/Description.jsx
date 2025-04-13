import React, { useState } from "react";
import axios from "axios";

export default function Description({ setWeatherData }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const api_key = "af57b348473f295cf54345f4042dacac";

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const res = await axios.get(
        "https://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: input,
            limit: 5,
            appid: api_key,
          },
        }
      );
      setSuggestions(res.data);
    }
  };

  const handleSelectCity = async (city) => {
    setSuggestions([]);
    setInput(
      `${city.name}${city.state ? ", " + city.state : ""}, ${city.country}`
    );
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: city.lat,
          lon: city.lon,
          units: "metric",
          appid: api_key,
        },
      }
    );
    setWeatherData(res.data);
  };

  return (
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Weather Now
      </h1>
      <p className="lead">
        <strong>
          Get accurate and up-to-date weather information for cities around the
          world. Search, select, and view live weather updates instantly.
        </strong>
      </p>
      <div className="input-group mb-3 justify-content-md-start">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="list-group">
          {suggestions.map((city, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelectCity(city)}
            >
              {city.name}
              {city.state ? `, ${city.state}` : ""}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
