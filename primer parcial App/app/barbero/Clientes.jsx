import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Text, Avatar, ActivityIndicator } from "react-native-paper";
import db from "../../db.json";
import { FaUser } from "react-icons/fa";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClientes(db.usuarios);
      setLoader(false);
    }, 1000); // Simula tiempo de carga
  }, []);

  if (loader) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#d4af37" />
        <Text style={styles.loaderText}>Cargando clientes 💈...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={clientes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card} mode="elevated">
          <Card.Title
            title={item.nombre}
            subtitle={`Usuario: ${item.username}`}
            titleStyle={styles.title}
            subtitleStyle={styles.subtitle}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon={() => <FaUser color="#fff" />}
                style={styles.avatar}
              />
            )}
          />
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
  loaderText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "#1c1c1c",
    elevation: 6,
  },
  title: {
    color: "#d4af37",
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    color: "#bbb",
    fontSize: 14,
  },
  avatar: {
    backgroundColor: "#d4af37",
  },
});
