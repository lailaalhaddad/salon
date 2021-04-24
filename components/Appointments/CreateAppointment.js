import React, { useState } from "react";
import { observer } from "mobx-react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import appointmentStore from "../../Store/appointmentStore";

const CreateAppointment = () => {
  const [data, setData] = useState({
    date: "",
    time: "",
    price: "",
  });

  const handleSubmit = () => appointmentStore.addAppointment(data);

  return (
    <View>
      <TextInput
        placeholder="Date"
        onChangeText={(date) => setData({ ...data, date })}
      />
      <TextInput
        placeholder="Time"
        onChangeText={(time) => setData({ ...data, time })}
      />
      <TextInput
        placeholder="Price"
        onChangeText={(price) => setData({ ...data, price })}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Approve</Text>
      </TouchableOpacity>
    </View>
  );
};
export default observer(CreateAppointment);
