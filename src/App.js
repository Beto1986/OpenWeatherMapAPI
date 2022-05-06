import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import { WEATHER_KEY } from "./keys";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
  });

  const getValuesAPI = async (cityValue, countryValue, WEATHER_KEY) => {
    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;

      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);

      setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null,
      });
      // console.log(state);
    } else {
      setState({ error: "Please enter a valid city and country" });
    }
  };

  const getWeather = (e) => {
    e.preventDefault();
    // console.log("Enviando");
    // console.log(e.target.elements);

    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    // console.log(cityValue, countryValue);

    getValuesAPI(cityValue, countryValue, WEATHER_KEY);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <WeatherForm getWeather={getWeather} />
          <WeatherInfo state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
