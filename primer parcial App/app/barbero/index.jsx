import React from "react";
import { BottomNavigation } from "react-native-paper";
import Agenda from "./Agenda";
import Clientes from "./Clientes";
import Perfil from "./Perfil";

export default function BarberoMenu() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "agenda", title: "Agenda", focusedIcon: "calendar-check", unfocusedIcon: "calendar" },
    { key: "clientes", title: "Clientes", focusedIcon: "account-group", unfocusedIcon: "account-group-outline" },
    { key: "perfil", title: "Perfil", focusedIcon: "account", unfocusedIcon: "account-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    agenda: Agenda,
    clientes: Clientes,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: "#1c1c1c", // negro barbería
        borderTopWidth: 2,
        borderTopColor: "#d4af37", // dorado elegante
      }}
      activeColor="#d4af37"   // íconos activos en dorado
      inactiveColor="#ffffff" // íconos inactivos en blanco
      shifting={true} // animación moderna al cambiar tabs
      sceneAnimationEnabled={true}
    />
  );
}
