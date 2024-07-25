import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4d7ae07a0a5f2fbfd7426e71a2ca93e`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Errro Fetching The Weather Data", error);
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
        />

        <button onClick={getWeather}> Get Weather</button>
      </div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)} C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
