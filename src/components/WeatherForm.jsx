import React from "react";

const WeatherForm = ({ getWeather }) => {
  return (
    <div className="card card-body">
      <form onSubmit={getWeather}>
        <div className="form-group m-2">
          <input
            type="text"
            name="city"
            placeholder="City name"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group m-2">
          <input
            type="text"
            name="country"
            placeholder="Country name"
            className="form-control"
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-success btn-block m-2">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
