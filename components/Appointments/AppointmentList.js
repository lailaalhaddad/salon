import React from "react";
import { observer } from "mobx-react";
import { View } from "react-native";
import appointmentStore from "../../Store/appointmentStore";
import AppointmentItem from "./AppointmentItem";

const AppointmentList = () => {
  const appointmentList = appointmentStore.appointments.map((app) => (
    <AppointmentItem appInfo={app} key={app.id} />
  ));
  return <View>{appointmentList}</View>;
};

export default observer(AppointmentList);
