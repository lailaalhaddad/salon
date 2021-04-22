import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Box, InnBox, ButtonContainer, Title } from "../styles";

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Box>
        <InnBox>
          <Title>Appointments</Title>
          <ButtonContainer
            onPress={() => navigation.navigate("Appointments")}
          ></ButtonContainer>
        </InnBox>
      </Box>
      <Box>
        <InnBox>
          <Title>Schedule</Title>
          <ButtonContainer
            onPress={() => navigation.navigate("Schedule")}
          ></ButtonContainer>
        </InnBox>
      </Box>
    </View>
  );
};

export default HomePage;
