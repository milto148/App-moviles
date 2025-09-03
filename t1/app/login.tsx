import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }
    Alert.alert('Éxito', 'Inicio de sesión exitoso');
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google', 'Inicio de sesión con Google - En desarrollo');
  };

  const handleAppleLogin = () => {
    Alert.alert('Apple', 'Inicio de sesión con Apple - En desarrollo');
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperar contraseña', 'Función en desarrollo');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        {/* Título */}
        <ThemedText style={styles.title}>INICIAR SESIÓN</ThemedText>

        {/* Formulario */}
        <View style={styles.formContainer}>
          {/* Campo de email */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Campo de contraseña */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons 
                name={showPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#999" 
              />
            </TouchableOpacity>
          </View>

          {/* ¿Olvidaste tu contraseña? */}
          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordContainer}>
            <ThemedText style={styles.forgotPasswordText}>
              ¿Olvidaste tu contraseña?
            </ThemedText>
          </TouchableOpacity>

          {/* Botón de iniciar sesión */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <ThemedText style={styles.loginButtonText}>
              INICIAR SESIÓN
            </ThemedText>
          </TouchableOpacity>

          {/* Separador "O" */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <ThemedText style={styles.separatorText}>O</ThemedText>
            <View style={styles.separatorLine} />
          </View>

          {/* Botón de Google */}
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
            <View style={styles.socialButtonContent}>
              <View style={styles.googleIcon}>
                <ThemedText style={styles.googleIconText}>G</ThemedText>
              </View>
              <ThemedText style={styles.socialButtonText}>
                Iniciar sesión con Google
              </ThemedText>
            </View>
          </TouchableOpacity>

          {/* Botón de Apple */}
          <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
            <View style={styles.socialButtonContent}>
              <Ionicons name="logo-apple" size={20} color="#000" style={styles.appleIcon} />
              <ThemedText style={styles.socialButtonText}>
                Iniciar sesión con Apple
              </ThemedText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 80,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: 1,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 0,
  },
  eyeIcon: {
    padding: 4,
  },
  forgotPasswordContainer: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  forgotPasswordText: {
    color: '#4285F4',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  separatorText: {
    color: '#999',
    fontSize: 14,
    paddingHorizontal: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  googleIconText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  appleIcon: {
    marginRight: 12,
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
});