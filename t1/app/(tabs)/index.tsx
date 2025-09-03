import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Sección de bienvenida */}
        <View style={styles.welcomeSection}>
          <ThemedText style={styles.welcomeTitle}>
            ¡Bienvenido!
          </ThemedText>
          <ThemedText style={styles.welcomeSubtitle}>
            ¡Nos alegra tenerte aquí!
          </ThemedText>
        </View>

        {/* Espacio para la imagen/ilustración */}
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            {/* Aquí puedes agregar tu imagen personalizada */}
            <ThemedText style={styles.placeholderText}>
              Espacio para imagen
            </ThemedText>
          </View>
        </View>

        {/* Botón de empezar */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push('/menu')}
            activeOpacity={0.8}
          >
            <ThemedText style={styles.startButtonText}>
              Empezar
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    fontWeight: '400',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  imagePlaceholder: {
    width: 280,
    height: 320,
    backgroundColor: '#e9ecef',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#dee2e6',
    borderStyle: 'dashed',
  },
  placeholderText: {
    color: '#6c757d',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 25,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    minWidth: 250,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});