import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  Text,
  Button,
  ActivityIndicator,
  Searchbar,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import db from "../../db.json";

export default function Cortes() {
  const [cortes, setCortes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCorte, setSelectedCorte] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCortes(db.cortes || []);
      setLoading(false);
    }, 800);
  }, []);

  const filteredCortes = cortes.filter((corte) =>
    corte.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => setSelectedCorte(item)}>
      <Card.Cover source={{ uri: item.imagen }} style={styles.image} />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>
          {item.nombre}
        </Text>
        <View style={styles.row}>
          <MaterialCommunityIcons name="clock-outline" size={16} color="#555" />
          <Text style={styles.infoText}>{item.tiempo}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="currency-usd" size={16} color="#388e3c" />
          <Text style={styles.priceText}>{item.precio}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Buscar corte..."
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={filteredCortes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2} // 🔥 grid 2x2 fijo
        key={2}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron cortes</Text>}
      />

      {/* Modal detalle */}
      <Modal
        visible={!!selectedCorte}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedCorte(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedCorte?.nombre}</Text>
            <View style={styles.selector}>
              <MaterialCommunityIcons name="clock-outline" size={20} color="#555" />
              <Text style={styles.selectorText}>Duración: {selectedCorte?.tiempo}</Text>
            </View>
            <View style={styles.selector}>
              <MaterialCommunityIcons name="currency-usd" size={20} color="#388e3c" />
              <Text style={styles.selectorText}>Precio: {selectedCorte?.precio}</Text>
            </View>
            <View style={styles.modalButtons}>
              <Button mode="outlined" onPress={() => setSelectedCorte(null)}>
                Cerrar
              </Button>
              <Button mode="contained" style={{ marginLeft: 10 }}>
                Agendar
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  searchbar: {
    margin: 12,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#fff",
  },
  list: { padding: 8 },
  emptyText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 20,
    color: "#777",
  },
  card: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
    elevation: 4,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  },
  image: { height: 120 },
  cardContent: { padding: 8 },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1b5e20",
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  infoText: { marginLeft: 6, fontSize: 13, color: "#555" },
  priceText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "bold",
    color: "#388e3c",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
    color: "#1b5e20",
  },
  selector: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 8,
  },
  selectorText: {
    fontSize: 15,
    marginLeft: 10,
    color: "#333",
  },
  modalButtons: { flexDirection: "row", justifyContent: "flex-end", marginTop: 16 },
});
