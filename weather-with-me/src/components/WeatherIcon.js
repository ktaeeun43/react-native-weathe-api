import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
import logoSvg from "../../assets/openweathermap/01d.svg";
const WeatherIcon = (description) => {
  console.log(description.description);
  let weatherUri = `https://weathericon-kt43.s3.ap-northeast-2.amazonaws.com/${description.description}.svg`;
  return (
    <View style={styles.largeIcon}>
      <SvgUri width="100%" height="100%" uri={weatherUri} />
    </View>
  );
};

export default WeatherIcon;
const styles = StyleSheet.create({
  largeIcon: {
    width: 250,
    height: 200,
  },
});
