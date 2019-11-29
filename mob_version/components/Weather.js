import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature }) => {
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color}
      ]}>
      <TextInput style={styles.input}
                       placeholder="Введіть значення пошуку ..."
                       placeholderTextColor = "white"  
                       underlineColorAndroid='transparent'
                       onChangeText={this.onChangeText}
                       onSubmitEditing={this.getWeather}
                       clearButtonMode={"always"}
                       clearTextOnFocus={true}
                       enablesReturnKeyAutomatically={true}
                       returnKeyType={"search"}/>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
        <Text style={styles.tempText}>{temperature} °C</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string,
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    height: 50,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#fff',
    fontSize: 20
  },
  title: {
    fontSize: 60,
    color: '#fff',
    
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  }
});

export default Weather;
