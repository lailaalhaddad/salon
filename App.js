import React from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "./screen/HomePage";
import Appointments from "./screen/Appointments";
import Schedule from "./screen/Schedule";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator initialRouteName="HomePage">
          <Screen name="HomePage" component={HomePage} />
          <Screen name="Appointments" component={Appointments} />
          <Screen name="Schedule" component={Schedule} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
