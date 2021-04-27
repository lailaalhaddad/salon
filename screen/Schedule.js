import React from "react";
import { ScrollView, View } from "react-native";
import CreateSchedule from "../components/Schedule/CreateSchedule";
import ScheduleList from "../components/Schedule/ScheduleList";
import { Box, InnBox } from "../styles";
const Schedule = () => {
  return (
    <ScrollView>
      <ScrollView>
        <CreateSchedule />
      </ScrollView>
      <ScrollView>
        <Box>
          <InnBox>
            <ScheduleList />
          </InnBox>
        </Box>
      </ScrollView>
    </ScrollView>
  );
};

export default Schedule;
