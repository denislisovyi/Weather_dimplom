import React from 'react';
import { StyleSheet, Text, Font, View, Animated, Image, ImageBackground, ActivityIndicator, AppRegistry } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

import { API_KEY } from './utils/WeatherAPIKey';

import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    humidity: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Помилка отримання погодних умов'
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={[styles.loadingContainer, styles.horizontal]}>
            <Text style={styles.loadingText}>Отримання погоди</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#228B22'
    
 },
  loadingText: {
    fontSize: 30 
  }
});