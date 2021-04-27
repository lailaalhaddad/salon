import React, { useState } from "react";
import { observer } from "mobx-react";
import { View, Text, TouchableOpacity } from "react-native";
import scheduleStore from "../../Store/scheduleStore";
//Time Picker
import { TimePicker } from "react-native-simple-time-picker";
//Calendar
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
//
import { AddButton } from "../../styles";
const CreateSchedule = () => {
  const [data, setData] = useState({
    date: new Date(),
    startTime: "0",
    endTime: "0",
  });
  const handleSubmit = () => scheduleStore.addSchedule(data);
  console.log(data);
  return (
    <View>
      <ScrollView>
        <View>
          <Calendar
            minDate={"2021-01-01"}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={"2021-12-31"}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(value) => {
              setData({
                ...data,
                date: value.dateString, //***it was value but i added .dateString cuz of BE datatype issue*** BY SAlWA
              }),
                console.log("selected day", value);
            }}
            markedDates={{
              [data.date]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {
              console.log("selected long press day", day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            // monthFormat={"MMM d, yyyy"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {
              console.log("month changed", month);
            }}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={(addMonth) => addMonth()}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
            // Specify style for calendar container element. Default = {}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              height: 300,
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              selectedColor: "red",
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "red",
              textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: "red",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "red",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
              dotColor: "red",
              selectedDotColor: "red",
              arrowColor: "red",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "red",
              indicatorColor: "red",
              textDayFontFamily: "HelveticaNeue-Medium",
              textMonthFontFamily: "HelveticaNeue-Medium",
              textDayHeaderFontFamily: "HelveticaNeue-Medium",
              textDayFontWeight: "300",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
        <View>
          <Text>Start Time:</Text>
          <TimePicker
            placeholder="Start Time"
            onChange={(startTime) =>
              setData({
                ...data,
                startTime: `${startTime.hours}:${startTime.minutes}`,
              })
            }
          />
          <Text>End Time:</Text>
          <TimePicker
            placeholder="End Time"
            onChange={(endTime) =>
              setData({
                ...data,
                endTime: `${endTime.hours}:${endTime.minutes}`,
              })
            }
          />
          <AddButton onPress={handleSubmit}>
            <Text>Add</Text>
          </AddButton>
        </View>
      </ScrollView>
    </View>
  );
};
export default observer(CreateSchedule);
