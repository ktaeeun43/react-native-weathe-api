import {
  View,
  Text,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import * as Location from "expo-location";

const openWeatherKey = "2f32d23d8511e33f61cc337baaebec19";
const url = `http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${openWeatherKey}`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [refrash, setRefrash] = useState(false);

  const weatherDataResponse = async () => {
    try {
      setRefrash(false);
      const res = await fetch(url);
      if (res.status === 200) {
        const data = await res.json();
        setWeatherData(data);
        console.log(weatherData);
      } else {
        setWeatherData(null);
      }
      setRefrash(true);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  useEffect(() => {
    weatherDataResponse();
  }, []);
  const RefrashRender = () => {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  };
  if (!refrash) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather</Text>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7d7",
    paddingTop: Constants.statusBarHeight,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#030a24",
    height: 80,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  loading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
