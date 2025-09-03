import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button, Text, ActivityIndicator, Card } from "react-native-paper";
import { useRouter } from "expo-router";
import { usuarios } from "../usuario";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaLock, FaSignInAlt, FaCut } from "react-icons/fa";

export default function Index() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      const user = usuarios.find(
        (u) => u.username === username && u.password === password
      );

      setLoading(false);

      if (user) {
        toast.success("¡Bienvenido a Barber App 💈!");
        if (user.rol === "cliente") {
          router.push("/cliente");
        } else if (user.rol === "barbero") {
          router.push("/barbero");
        }
      } else {
        toast.error("Usuario o contraseña incorrectos ❌");
      }
    }, 1000);
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/vzn4Mhy/barber-bg.jpg" }} // Fondo de barbería
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.header}>
              <FaCut size={40} color="#d4af37" />
              <Text variant="headlineMedium" style={styles.title}>
                Barber App 💈
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <FaUser style={styles.icon} />
              <TextInput
                label="Usuario"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <FaLock style={styles.icon} />
              <TextInput
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />
            </View>

            {loading ? (
              <ActivityIndicator animating={true} color="#d4af37" />
            ) : (
              <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
                icon={() => <FaSignInAlt color="white" />}
              >
                Iniciar Sesión
              </Button>
            )}
          </Card.Content>
        </Card>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  card: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
    color: "#555",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
  },
  button: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: "#d4af37", // dorado barbería
  },
});
