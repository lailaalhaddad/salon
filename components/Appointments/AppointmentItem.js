import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import appointmentStore from "../../Store/appointmentStore";
import { TextContent, Button } from "../../styles";
import { DropDownPicker } from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from "native-base";

const AppointmentItem = (props) => {
  const appInfo = props.appInfo;

  return (
    <View>
      <Collapse onPress={() => (appInfo.stat = false)}>
        <CollapseHeader>
          <Separator bordered>
            <Text>Previous Appointments</Text>
          </Separator>
        </CollapseHeader>
        <CollapseBody>
          <ListItem>
            <Text>Date: {appInfo.date}</Text>
          </ListItem>
          <ListItem>
            <Text>Time: {appInfo.time}</Text>
          </ListItem>
          <ListItem last>
            <Text>Price: {appInfo.price}</Text>
          </ListItem>
        </CollapseBody>
      </Collapse>
      <Collapse onPress={() => (appInfo.stat = true)}>
        <CollapseHeader>
          <Separator bordered>
            <Text>Future Appointments</Text>
          </Separator>
        </CollapseHeader>
        <CollapseBody>
          <ListItem>
            <Text>Date: {appInfo.date}</Text>
          </ListItem>
          <ListItem>
            <Text>Time: {appInfo.time}</Text>
          </ListItem>
          <ListItem last>
            <Text>Price: {appInfo.price}</Text>
          </ListItem>
        </CollapseBody>
      </Collapse>
    </View>
  );
};
export default observer(AppointmentItem);
