import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Box, InnBox, ButtonContainer, Title } from "../styles";

const HomePage = ({ navigation }) => {
  return (
    <View>
      <View>
        <View>
          <Title>Appointments</Title>
          <ButtonContainer
            onPress={() => navigation.navigate("Appointments")}
          ></ButtonContainer>
        </View>
      </View>
      <View>
        <View>
          <Title>Schedule</Title>
          <ButtonContainer
            onPress={() => navigation.navigate("Schedule")}
          ></ButtonContainer>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
