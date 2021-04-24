import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import appointmentStore from "../../Store/appointmentStore";
import { TextContent, Button } from "../../styles";

const AppointmentItem = (props) => {
  const appInfo = props.appInfo;

  return (
    <View>
      <TextContent>Date: {appInfo.date}</TextContent>
      <TextContent>Time: {appInfo.time}</TextContent>
      <TextContent>Price: {appInfo.price}</TextContent>
      <Button onPress={() => appointmentStore.removeAppointment(appInfo.id)}>
        <Text> Reject Appointment </Text>
      </Button>
    </View>
  );
};
export default observer(AppointmentItem);
