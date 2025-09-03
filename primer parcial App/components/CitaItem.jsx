import React from "react";
import { List } from "react-native-paper";

export default function CitaItem({ cita }) {
  return (
    <List.Item
      title={`Cita con barbero ${cita.barberoId}`}
      description={`${cita.fecha} - ${cita.hora}`}
      left={(props) => <List.Icon {...props} icon="calendar" />}
    />
  );
}
