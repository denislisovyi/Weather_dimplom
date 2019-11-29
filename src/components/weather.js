import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key"><img src="https://img.icons8.com/dusk/32/000000/building.png" alt="c" /> Місто: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    String(this.props.temperature) !== "undefined"  && <p className="weather__key"><img src="https://img.icons8.com/plasticine/32/000000/temperature.png" alt="d" /> Температура: 
                        <span className="weather__value">  {this.props.temperature} С°</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key"><img src="https://img.icons8.com/dusk/32/000000/humidity.png" alt="e"  /> Вологість: 
                        <span className="weather__value">  {this.props.humidity}%</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key"><img src="https://img.icons8.com/color/32/000000/chance-of-storm.png"  alt="f" /> Умови:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.pressure && <p className="weather__key"><img src="https://img.icons8.com/officel/32/000000/pressure.png"  alt="f" /> Тиск: 
                        <span className="weather__value">  {this.props.pressure} мм.рт.ст </span>
                    </p>
                }

                {
                    this.props.speed && <p className="weather__key"><img src="https://img.icons8.com/plasticine/32/000000/wind.png"  alt="f" /> Швидкість вітру: 
                        <span className="weather__value">  {this.props.speed} м/с </span>
                    </p>
                }
                  
                  {
                    this.props.deg && <p className="weather__key"><img src="https://img.icons8.com/plasticine/32/000000/wind.png"  alt="f" /> Направлення вітру: 
                        <span className="weather__value">  {this.props.deg}°</span>
                    </p>
                }  
                 
                 {
                    String(this.props.temp_min) !== "undefined" && <p className="weather__key"><img src="https://img.icons8.com/plasticine/32/000000/temperature.png" alt="d" /> Мінімальна Температура: 
                        <span className="weather__value">  {this.props.temp_min} С°</span>
                    </p>
                }

                 {
                    String(this.props.temp_max) !== "undefined" && <p className="weather__key"><img src="https://img.icons8.com/plasticine/32/000000/temperature.png" alt="d" /> Максимальна Температура: 
                        <span className="weather__value">  {this.props.temp_max} С°</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                    
                }
        
            </div>
        )
    }
}
export default Weather;