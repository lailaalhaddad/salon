import React from "react";
import { View, Text } from "react-native";
import AppointmentList from "../components/Appointments/AppointmentList";
// import DropDownPicker from "react-native-dropdown-picker";
// import CreateAppointment from "../components/Appointments/CreateAppointment";
import { Box, InnBox } from "../styles";
// import { TableContent, CustomTable } from "../styles";
// import { Accordion } from "native-base";

const Appointments = () => {
  return (
    <View>
      <Box>
        <InnBox>
          <AppointmentList />
        </InnBox>
      </Box>
    </View>
  );
};

export default Appointments;
