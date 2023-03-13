import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/Test";
import Weather from "./src/Weather";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Weather app!</Text>
      <StatusBar style="auto" />
      <Test />
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
