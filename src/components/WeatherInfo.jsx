import React from "react";

const WeatherInfo = ({ state }) => {
  // console.log(state);
  return (
    <>
      {state.error && (
        <div className="alert alert-danger">
          <p>{state.error}</p>
        </div>
      )}

      {state.temperature ? (
        <div className="card card-body">
          <p>
            Location: {state.city}, {state.country}
          </p>
          <p>
            Temperature: {state.temperature}°C, {state.description}
          </p>
          <p>Humidity: {state.humidity}%</p>
          <p>Wind Speed: {state.wind_speed}Km/h</p>
        </div>
      ) : (
        <div className="card card-body">
          <p>No request yet</p>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
