import React from "react";
import { observer } from "mobx-react";
import { View } from "react-native";
import scheduleStore from "../../Store/scheduleStore";
import ScheduleItem from "./ScheduleItem";

const ScheduleList = () => {
  const scheduleList = scheduleStore.schedules.map((schedule) => (
    <ScheduleItem scheduleInfo={schedule} key={schedule.id} />
  ));
  return <View>{scheduleList}</View>;
};

export default observer(ScheduleList);
