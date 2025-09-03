import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Avatar, Text, Chip, Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    navigation.replace("index");
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.content}>
          <Avatar.Icon size={100} icon="account" style={styles.avatar} />
          <Text variant="headlineMedium" style={styles.name}>
            Carlos - Cliente
          </Text>
          <Chip
            icon="check-circle"
            style={styles.chip}
            textStyle={{ color: "white", fontWeight: "bold" }}
          >
            Activo
          </Chip>
          <Button
            mode="contained-tonal"
            icon="logout"
            buttonColor="#d32f2f"
            textColor="white"
            style={styles.logoutButton}
            onPress={() => setModalVisible(true)}
          >
            Cerrar sesión
          </Button>
        </Card.Content>
      </Card>

      {/* Modal de confirmación */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cerrar sesión</Text>
            <Text style={styles.modalMessage}>
              ¿Estás seguro de que deseas cerrar sesión?
            </Text>
            <View style={styles.modalButtons}>
              <Button
                mode="outlined"
                onPress={() => setModalVisible(false)}
              >
                Cancelar
              </Button>
              <Button
                mode="contained"
                buttonColor="#d32f2f"
                textColor="white"
                onPress={handleLogout}
                style={{ marginLeft: 10 }}
              >
                Cerrar sesión
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    padding: 20,
  },
  card: {
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#2e7d32",
    elevation: 6,
  },
  content: {
    alignItems: "center",
    padding: 25,
  },
  avatar: {
    backgroundColor: "white",
    marginBottom: 15,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
  chip: {
    backgroundColor: "#1b5e20",
    marginTop: 10,
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 10,
    width: "60%",
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#d32f2f",
  },
  modalMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
});
