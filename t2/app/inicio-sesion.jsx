import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import usuarios from '../assets/usuarios.json'; 

export default function InicioSesion() {
  const router = useRouter();
  const [correo, setCorreo] = React.useState('');
  const [clave, setClave] = React.useState('');

  const iniciarSesion = () => {
    if (!correo || !clave) {
      Alert.alert('Error de inicio de sesión', 'Por favor, ingresa tu correo y contraseña.');
      return;
    }

    const usuario = usuarios.find((u) => u.email === correo);

    if (!usuario) {
      Alert.alert('Error de inicio de sesión', 'Credenciales Incorrectas.');
      return;
    }

    if (usuario.clave !== clave) {
      Alert.alert('Error de inicio de sesión', 'El correo o la contraseña son incorrectos.');
      return;
    }

    Alert.alert('¡Bienvenido!', `Sesión iniciada como: ${usuario.nombre}`);
    console.log('Sesión iniciada por:', usuario.nombre);
  };

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={{ uri: 'https://placehold.co/100x100/8B5CF6/ffffff' }} 
              style={styles.logo} 
            />
          </View>
          <Text style={styles.titulo}>
            Bienvenido de nuevo
          </Text>
          <Text style={styles.subtitulo}>
            Inicia sesión para continuar
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            label="Correo electrónico"
            value={correo}
            onChangeText={setCorreo}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.campo}
            left={<TextInput.Icon icon="email-outline" />}
            theme={{
              colors: {
                primary: '#8B5CF6',
                outline: '#E5E7EB',
                background: '#FFFFFF'
              }
            }}
          />

          <TextInput
            label="Contraseña"
            value={clave}
            onChangeText={setClave}
            mode="outlined"
            secureTextEntry
            style={styles.campo}
            left={<TextInput.Icon icon="lock-outline" />}
            theme={{
              colors: {
                primary: '#8B5CF6',
                outline: '#E5E7EB',
                background: '#FFFFFF'
              }
            }}
          />

          <TouchableOpacity style={styles.olvidoClave}>
            <Text style={styles.olvidoClaveText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <Button
            mode="contained"
            onPress={iniciarSesion}
            style={styles.botonIniciar}
            labelStyle={styles.botonIniciarTexto}
            buttonColor="#FFFFFF"
          >
            Iniciar sesión
          </Button>

          <View style={styles.divisorContainer}>
            <View style={styles.linea} />
            <Text style={styles.divisorTexto}>o</Text>
            <View style={styles.linea} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity 
              style={styles.socialIcono} 
              onPress={() => console.log('Iniciar sesión con Google')}
            >
              <MaterialCommunityIcons name="google" size={24} color="#8B5CF6" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialIcono} 
              onPress={() => console.log('Iniciar sesión con Apple')}
            >
              <MaterialCommunityIcons name="apple" size={24} color="#8B5CF6" />
            </TouchableOpacity>
          </View>

          <View style={styles.registroContainer}>
            <Text style={styles.registroText}>¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => router.push('/registro')}>
              <Text style={styles.registroLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#E5E7EB',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  campo: {
    marginBottom: 16,
  },
  olvidoClave: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  olvidoClaveText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  botonIniciar: {
    borderRadius: 16,
    paddingVertical: 8,
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  botonIniciarTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  divisorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  linea: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  divisorTexto: {
    width: 40,
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 16,
  },
  socialIcono: {
    borderWidth: 2,
    borderColor: '#8B5CF6',
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#F8FAFC',
  },
  registroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registroText: {
    color: '#64748B',
    fontSize: 16,
  },
  registroLink: {
    color: '#8B5CF6',
    fontWeight: 'bold',
    fontSize: 16,
  },
});