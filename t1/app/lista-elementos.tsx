import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

const elementos = [
  { 
    id: 1, 
    titulo: 'Item uno', 
    descripcion: 'Descripción del elemento.\nLorem ipsum dolor sit amet.', 
  },
  { 
    id: 2, 
    titulo: 'Item dos', 
    descripcion: 'Descripción del elemento.\nLorem ipsum dolor sit amet.', 
  },
  { 
    id: 3, 
    titulo: 'Item tres', 
    descripcion: 'Descripción del elemento.\nLorem ipsum dolor sit amet.', 
  },
  { 
    id: 4, 
    titulo: 'Item cuatro', 
    descripcion: 'Descripción del elemento.\nLorem ipsum dolor sit amet.', 
  },
];

export default function ListaElementosScreen() {
  const [searchText, setSearchText] = useState('');

  const handleAction = (itemId: number, itemTitle: string) => {
    Alert.alert('Acción', `Acción ejecutada en ${itemTitle}`);
  };

  const filteredElements = elementos.filter(elemento =>
    elemento.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
    elemento.descripcion.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Lista</ThemedText>
      </View>

      <View style={styles.content}>
        {/* Barra de búsqueda */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#8E8E93"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de elementos */}
        <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
          {filteredElements.map((elemento) => (
            <View key={elemento.id} style={styles.elementoCard}>
              <View style={styles.elementoContent}>
                {/* Icono de imagen */}
                <View style={styles.imageIconContainer}>
                  <Ionicons name="image" size={24} color="#FFFFFF" />
                </View>

                {/* Información del elemento */}
                <View style={styles.elementoInfo}>
                  <ThemedText style={styles.titulo}>
                    {elemento.titulo}
                  </ThemedText>
                  <ThemedText style={styles.descripcion}>
                    {elemento.descripcion}
                  </ThemedText>
                </View>

                {/* Botón de acción */}
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleAction(elemento.id, elemento.titulo)}
                >
                  <ThemedText style={styles.actionButtonText}>
                    Acción
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#F2F2F7',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 36,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#000',
    paddingVertical: 0,
  },
  listContainer: {
    flex: 1,
  },
  elementoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  elementoContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  imageIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  elementoInfo: {
    flex: 1,
    marginRight: 12,
  },
  titulo: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 15,
    color: '#8E8E93',
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});