import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
// import SWeather from "./components/stateless_weather";
// import SForm from "./components/stateless_form"
import Titles from "./components/titles";
class App extends React.Component {

  state = {

    temperature: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    speed: undefined,
    error: undefined,
    weatherCondition: null
  }
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=ua&units=metric&appid=51f329630a0d837ecbf387f9c7a8fbd0`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        temp_min: response.main.temp_min,
        temp_max: response.main.temp_max,
        pressure: response.main.pressure,
        speed: response.wind.speed,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      
      this.setState({
        error: "Введіть значення пошуку ..."
      })
    }
  }
  render() {
    return (
      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    pressure={this.state.pressure}
                    speed={this.state.speed}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;
