import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Switch, Card } from "react-native-paper";

export default function Perfil() {
  const [disponible, setDisponible] = React.useState(true);

  return (
    <View style={styles.container}>
      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.content}>
          <Avatar.Icon size={100} icon="account-tie" style={styles.avatar} />
          <Text variant="headlineMedium" style={styles.name}>
            Pedro - Barbero 💈
          </Text>

          <View style={styles.statusContainer}>
            <Switch
              value={disponible}
              onValueChange={() => setDisponible(!disponible)}
              color="#d4af37"
            />
            <Text style={[styles.statusText, { color: disponible ? "#2ecc71" : "#e74c3c" }]}>
              {disponible ? "Disponible" : "No disponible"}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c", // negro barbería
    padding: 20,
  },
  card: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#2c2c2c",
    elevation: 6,
    paddingVertical: 20,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#d4af37", // dorado barbería
    marginBottom: 15,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  statusText: {
    marginLeft: 10,
    fontWeight: "600",
  },
});
