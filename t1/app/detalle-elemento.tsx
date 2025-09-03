import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

const elementosData = {
  1: { 
    titulo: 'Elemento uno', 
    precio: '$29,99',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
};

export default function DetalleElementoScreen() {
  const { id } = useLocalSearchParams();
  const elemento = elementosData[1]; // Siempre mostrará el elemento 1 para coincidir con la imagen

  return (
    <ThemedView style={styles.container}>
      {/* Header con flecha de regreso */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Imagen del producto */}
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Ionicons name="image" size={60} color="white" />
          </View>
        </View>

        {/* Información del producto */}
        <View style={styles.productInfo}>
          <ThemedText style={styles.titulo}>
            {elemento.titulo}
          </ThemedText>
          
          <ThemedText style={styles.precio}>
            {elemento.precio}
          </ThemedText>
          
          <ThemedText style={styles.descripcion}>
            {elemento.descripcion}
          </ThemedText>
        </View>

        {/* Botón de acción */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <ThemedText style={styles.buttonText}>Acción</ThemedText>
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
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#f8f9fa',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#5B7DB1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  precio: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  actionButton: {
    backgroundColor: '#5B7DB1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});