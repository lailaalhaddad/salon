import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
import scheduleStore from "../../Store/scheduleStore";
import { TextContent, Button } from "../../styles";

const ScheduleItem = (props) => {
  const scheduleInfo = props.scheduleInfo;

  return (
    <View>
      <TextContent>Date: {scheduleInfo.date}</TextContent>
      <TextContent>Start Time: {scheduleInfo.startTime}</TextContent>
      <TextContent>End Time: {scheduleInfo.endTime}</TextContent>
      <Button onPress={() => scheduleStore.removeSchedule(scheduleInfo.id)}>
        <Text> Delete Time slot </Text>
      </Button>
    </View>
  );
};
export default observer(ScheduleItem);
