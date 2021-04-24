import React from "react";
import { View } from "react-native";
import AppointmentList from "../components/Appointments/AppointmentList";
import CreateAppointment from "../components/Appointments/CreateAppointment";
import { Box, InnBox } from "../styles";
// import { TableContent, CustomTable } from "../styles";

const Appointments = () => {
  return (
    <Box>
      <InnBox>
        <AppointmentList />
      </InnBox>
    </Box>
  );
};

export default Appointments;
