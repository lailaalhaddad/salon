import React from "react";
import { View, Text } from "react-native";
import AppointmentList from "../components/Appointments/AppointmentList";
// import DropDownPicker from "react-native-dropdown-picker";
// import CreateAppointment from "../components/Appointments/CreateAppointment";
import { Box, InnBox } from "../styles";
// import { TableContent, CustomTable } from "../styles";

const Appointments = () => {
  return (
    <View>
      <View>{/* <DropDownPicker /> */}</View>
      <Box>
        <InnBox>
          <AppointmentList />
        </InnBox>
      </Box>
    </View>
  );
};

export default Appointments;
