import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

const conocimientos = [
  {
    categoria: 'Frontend',
    items: ['React Native', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
    icon: 'phone-portrait'
  },
  {
    categoria: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'API REST'],
    icon: 'server'
  },
  {
    categoria: 'Herramientas',
    items: ['Git', 'VS Code', 'Expo', 'Android Studio', 'Xcode'],
    icon: 'build'
  },
  {
    categoria: 'Metodologías',
    items: ['Scrum', 'Agile', 'TDD', 'Clean Code', 'SOLID'],
    icon: 'library'
  }
];

export default function ConocimientosScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Conocimientos Previos</ThemedText>
      </View>

      <ScrollView style={styles.content}>
        {conocimientos.map((categoria, index) => (
          <View key={index} style={styles.categoriaCard}>
            <View style={styles.categoriaHeader}>
              <Ionicons name={categoria.icon as any} size={24} color="#2e78b7" />
              <ThemedText type="subtitle" style={styles.categoriaTitle}>
                {categoria.categoria}
              </ThemedText>
            </View>
            
            <View style={styles.itemsContainer}>
              {categoria.items.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.item}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <ThemedText style={styles.itemText}>{item}</ThemedText>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#2e78b7',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  categoriaCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoriaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoriaTitle: {
    marginLeft: 12,
    color: '#2e78b7',
  },
  itemsContainer: {
    gap: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 8,
    fontSize: 16,
  },
});