import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function RegistroScreen() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    const { nombre, email, password, confirmPassword } = formData;
    
    if (!nombre || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    Alert.alert('Éxito', 'Registro completado exitosamente', [
      { text: 'OK', onPress: () => router.back() }
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Registro</ThemedText>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Formulario */}
        <View style={styles.formContainer}>
          {/* Campo Nombre */}
          <View style={styles.fieldContainer}>
            <ThemedText style={styles.fieldLabel}>Nombre</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.nombre}
              onChangeText={(value) => handleInputChange('nombre', value)}
              autoCapitalize="words"
              placeholder=""
            />
          </View>

          {/* Campo Correo electrónico */}
          <View style={styles.fieldContainer}>
            <ThemedText style={styles.fieldLabel}>Correo electrónico</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder=""
            />
          </View>

          {/* Campo Contraseña */}
          <View style={styles.fieldContainer}>
            <ThemedText style={styles.fieldLabel}>Contraseña</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
              secureTextEntry={true}
              placeholder=""
            />
          </View>

          {/* Campo Confirmar contraseña */}
          <View style={styles.fieldContainer}>
            <ThemedText style={styles.fieldLabel}>Confirmar contraseña</ThemedText>
            <TextInput
              style={styles.input}
              value={formData.confirmPassword}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
              secureTextEntry={true}
              placeholder=""
            />
          </View>

          {/* Botón de registro */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <ThemedText style={styles.registerButtonText}>
              Registrarse
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Espaciado inferior */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#F2F2F7',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  fieldContainer: {
    marginBottom: 24,
  },
  fieldLabel: {
    fontSize: 17,
    color: '#000',
    marginBottom: 8,
    fontWeight: '400',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 17,
    color: '#000',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    height: 48,
  },
  registerButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 100,
  },
});