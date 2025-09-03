import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  Card,
  Text,
  Chip,
  Avatar,
  ActivityIndicator,
  Appbar,
} from "react-native-paper";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { FaClock, FaUser, FaCut, FaSignOutAlt } from "react-icons/fa";
import db from "../../db.json";

export default function Agenda() {
  const [citas, setCitas] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation(); // 👈 acceso a navegación

  
  useEffect(() => {
    setTimeout(() => {
      setCitas(db.citas);
      setLoader(false);
    }, 1000);
  }, []);

  const getChipStyle = (estado) => {
    switch (estado) {
      case "Pendiente":
        return { backgroundColor: "#f1c40f", textColor: "black" };
      case "Completada":
        return { backgroundColor: "#2ecc71", textColor: "white" };
      case "Cancelada":
        return { backgroundColor: "#e74c3c", textColor: "white" };
      default:
        return { backgroundColor: "#7f8c8d", textColor: "white" };
    }
  };
const handleLogout = () => {
  console.log("Cerrando sesión...");
  navigation.navigate("index");
};

  if (loader) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" animating={true} color="#d4af37" />
        <Text style={styles.loaderText}>Cargando tus citas 💈...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      {/* Barra superior con botón de logout */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Agenda" titleStyle={styles.appbarTitle} />
        <Appbar.Action
          icon={() => <FaSignOutAlt color="#fff" />}
          onPress={handleLogout}
        />
      </Appbar.Header>

      {/* Lista de citas */}
      <FlatList
        data={citas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const chipStyle = getChipStyle(item.estado);

          return (
            <Card style={styles.card} mode="elevated">
              <Card.Title
                title={item.cliente}
                subtitle={`✂️ Barbero: ${item.barbero}`}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon={() => <FaUser color="#fff" />}
                    style={styles.avatar}
                  />
                )}
                right={() => (
                  <Chip
                    style={{
                      backgroundColor: chipStyle.backgroundColor,
                      alignSelf: "center",
                      borderRadius: 12,
                      paddingHorizontal: 6,
                    }}
                    textStyle={{
                      color: chipStyle.textColor,
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    {item.estado}
                  </Chip>
                )}
              />
              <Card.Content style={styles.content}>
                <View style={styles.row}>
                  <FaClock style={styles.icon} />
                  <Text style={styles.info}>
                    {item.fecha} - {item.hora}
                  </Text>
                </View>
                <View style={styles.row}>
                  <FaCut style={styles.icon} />
                  <Text style={styles.info}>{item.servicio}</Text>
                </View>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#1c1c1c",
  },
  appbarTitle: {
    color: "#f1c40f",
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 14,
    borderRadius: 18,
    backgroundColor: "#111",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  title: {
    color: "#f1c40f",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 2,
  },
  avatar: {
    backgroundColor: "#f1c40f",
  },
  content: {
    marginTop: -6,
    paddingBottom: 12,
    borderTopWidth: 0.6,
    borderTopColor: "#333",
    paddingTop: 8,
  },
  info: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  icon: {
    color: "#f1c40f",
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
    color: "#f1c40f",
    fontWeight: "bold",
  },
});
