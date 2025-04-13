import { useState } from "react";
import Description from "./Description";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="container col-xxl-8 px-4 py-5 m-auto App">
        <div className="row justify-content-center align-items-center min-vh-100 g-5 py-5">
          <Description setWeatherData={setWeatherData} />
          <Weather weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}
