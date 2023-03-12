import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const openWeatherKey = "2f32d23d8511e33f61cc337baaebec19";
const url = `http://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`;

const Weather = async () => {
  const [forecast, setForecate] = useState(null);
  const [refrash, setRefrash] = useState(null);

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("위치정보를 허용해주세요!");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    const response = await fetch(
      `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
    );
    const data = await response.json();

    if (!response.ok) {
      Alert.alert(`날씨정보를 못 받아왔습니다!: ${data.message}`);
    } else {
      setForecast(data);
    }

    setRefreshing(false);
  };

  useEffect(() => {
    loadForecast();
  }, []);

  return (
    <View>
      <Text>Weather</Text>
    </View>
  );
};

export default Weather;
