import React from "react";
import { Text, View } from "react-native";

import { Table, Row, Rows } from "react-native-table-component";
const Appointments = () => {
  const table = [
    { headTable: ["Date", "Time", "Service", "Price"] },
    { dataTable: [] },
  ];
  return (
    <View>
      <Table>
        <Row data={table.headTable} />
        <Rows data={table.dataTable} />
      </Table>
    </View>
  );
};

export default Appointments;
