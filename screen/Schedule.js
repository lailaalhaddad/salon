import React from "react";
import { Text, View } from "react-native";
// import CreateDate from "../components/Schedule/CreateSchedule";
import ScheduleList from "../components/Schedule/ScheduleList";
import { Box, InnBox } from "../styles";
const Schedule = () => {
  return (
    <View>
      {/* <View>
        <CreateDate />
      </View> */}
      <Box>
        <InnBox>
          <ScheduleList />
        </InnBox>
      </Box>
    </View>
  );
};

export default Schedule;
