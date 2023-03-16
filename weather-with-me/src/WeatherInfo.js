import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import CelsiusIcon from "../assets/celsius.svg";

const WeatherInfo = (weatherData) => {
  console.log(weatherData, "정보");
  const {
    weatherData: {
      coord: { lon = 0, lat = 0 } = {},
      weather: [{ main = "", description = "", icon = "" } = {}] = [],
      main: {
        temp = 0,
        feels_like = 0,
        temp_min = 0,
        temp_max = 0,
        pressure = 0,
        humidity = 0,
      } = {},
      wind: { speed = 0, deg = 0 } = {},
      clouds: { all = 0 } = {},
      sys: { country = "", sunrise = 0, sunset = 0 } = {},
      name = "",
      visibility = "",
    },
  } = weatherData;

  const getKoreanDescription = (description) => {
    switch (description) {
      case "clear sky":
        return "맑음";
      case "few clouds":
        return "약간 구름 낀 맑은 하늘";
      case "scattered clouds":
        return "구름이 조금 있음";
      case "broken clouds":
        return "구름이 많음";
      case "overcast clouds":
        return "흐림";
      case "light rain":
        return "약한 비";
      case "moderate rain":
        return "보통 비";
      case "heavy intensity rain":
        return "강한 비";
      case "very heavy rain":
        return "매우 강한 비";
      case "extreme rain":
        return "극심한 비";
      case "freezing rain":
        return "얼어붙는 비";
      case "light intensity shower rain":
        return "약한 소나기";
      case "shower rain":
        return "소나기";
      case "heavy intensity shower rain":
        return "강한 소나기";
      case "ragged shower rain":
        return "불규칙적인 소나기";
      case "light snow":
        return "약한 눈";
      case "snow":
        return "눈";
      case "heavy snow":
        return "강한 눈";
      case "sleet":
        return "진눈깨비";
      case "shower sleet":
        return "소나기 진눈깨비";
      case "light rain and snow":
        return "약한 비와 눈";
      case "rain and snow":
        return "비와 눈";
      case "light shower snow":
        return "약한 소나기 눈";
      case "shower snow":
        return "소나기 눈";
      case "heavy shower snow":
        return "강한 소나기 눈";
      case "mist":
        return "안개";
      case "smoke":
        return "연기";
      case "haze":
        return "연무";
      case "sand, dust whirls":
        return "모래 먼지 난방";
      case "fog":
        return "안개";
      case "sand":
        return "모래";
      case "dust":
        return "먼지";
      case "volcanic ash":
        return "화산재";
      case "squalls":
        return "돌풍";
      case "tornado":
        return "토네이도";
      default:
        return "날씨 정보를 불러오는 중입니다.";
    }
  };

  const tempC = (temp - 273.15).toFixed(1);
  const feelsLikeC = (feels_like - 273.15).toFixed(1);
  const tempMinC = (temp_min - 273.15).toFixed(1);
  const tempMaxC = (temp_max - 273.15).toFixed(1);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 250,
          }}
        >
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.currentDescription}>
            {getKoreanDescription(description)}
          </Text>
        </View>
        <View style={styles.current}>
          <Image
            style={styles.largeIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
            }}
          />
          <Text style={styles.currentTemp}>{tempC}</Text>
          <CelsiusIcon width={100} height={100}></CelsiusIcon>
        </View>
        <Text style={styles.currentDescription}></Text>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              체감온도{" "}
            </Text>
            <Image
              source={require("../assets/temp.png")}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                marginLeft: 50,
              }}
            />
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              {feelsLikeC} <CelsiusIcon width={100} height={100}></CelsiusIcon>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherInfo;

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBF6",
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  headerText: {
    fontSize: 36,
    marginTop: 10,
  },
  extraInfo: {
    flexDirection: "row",
    marginTop: 0,
    justifyContent: "space-between",
    padding: 10,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "rgba(0,0,0, 0.5)",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
  largeIcon: {
    width: 250,
    height: 200,
  },
  current: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  currentTemp: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  currentDescription: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#e96e50",
    paddingLeft: 100,
    paddingRight: 30,
  },
});
