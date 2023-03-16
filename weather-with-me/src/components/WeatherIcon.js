import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import sunset from "../../assets/sunrise.png";
const WeatherIcon = (description) => {
  console.log(description.description, "WeatherIcon");
  return (
    <View>
      {/* <Text>{description.description}</Text> */}
      <Image style={styles.largeIcon} source={sunset} />
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
