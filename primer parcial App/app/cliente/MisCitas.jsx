import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Alert } from "react-native";
import {
  ActivityIndicator,
  Text,
  Avatar,
  Card,
  Button,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import db from "../../db.json";

export default function MisCitas() {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  if (!db.usuarios) {
    router.replace("/login");
    return null;
  }

  useEffect(() => {
    setTimeout(() => {
      setCitas(db.citas || []);
      setLoading(false);
    }, 800);
  }, []);

  const handleEliminar = (id) => {
    Alert.alert("Eliminar cita", "¿Estás seguro de eliminar esta cita?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: () => setCitas(citas.filter((cita) => cita.id !== id)),
      },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating size="large" color="#2e7d32" />
        <Text style={styles.loaderText}>Preparando tu agenda...</Text>
      </View>
    );
  }

  if (citas.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Avatar.Icon
          size={100}
          icon="calendar-remove"
          style={styles.emptyIcon}
          color="white"
        />
        <Text style={styles.emptyText}>No tienes citas programadas</Text>
        <Text style={styles.emptySubText}>
          Agenda un corte y mantente siempre fresco 💈
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content style={styles.cardContent}>
        <Text style={styles.corteName}>{item.corte}</Text>
        <View style={styles.row}>
          <MaterialCommunityIcons name="calendar" size={18} color="#555" />
          <Text style={styles.infoText}>{item.fecha}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="clock-outline" size={18} color="#555" />
          <Text style={styles.infoText}>{item.hora}</Text>
        </View>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <Button
          mode="contained"
          icon="trash-can-outline"
          buttonColor="#d32f2f"
          style={styles.deleteButton}
          labelStyle={{ fontSize: 13 }}
          onPress={() => handleEliminar(item.id)}
        >
          Eliminar
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <FlatList
      data={citas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
    color: "#444",
    fontWeight: "500",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fafafa",
  },
  emptyIcon: {
    backgroundColor: "#2e7d32",
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  emptySubText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  listContent: {
    padding: 12,
    paddingBottom: 24,
  },
  card: {
    marginBottom: 14,
    borderRadius: 14,
    elevation: 4,
    backgroundColor: "#f9f9f9",
  },
  cardContent: {
    paddingBottom: 8,
  },
  corteName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1b5e20",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  infoText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#555",
  },
  cardActions: {
    justifyContent: "flex-end",
    paddingRight: 8,
    paddingBottom: 6,
  },
  deleteButton: {
    borderRadius: 18,
    paddingHorizontal: 6,
    height: 36,
  },
});
