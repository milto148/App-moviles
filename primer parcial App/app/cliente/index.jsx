import React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Cortes from "./Cortes";
import MisCitas from "./MisCitas";
import Perfil from "./Perfil";

export default function ClienteMenu() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "cortes", title: "Cortes", focusedIcon: "content-cut" },
    { key: "citas", title: "Mis Citas", focusedIcon: "calendar" },
    { key: "perfil", title: "Perfil", focusedIcon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    cortes: Cortes,
    citas: MisCitas,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
