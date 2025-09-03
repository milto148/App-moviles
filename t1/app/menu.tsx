import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

// Define un tipo para los nombres de los iconos de Ionicons
type IconName = ComponentProps<typeof Ionicons>['name'];

interface MenuItem {
  id: string;
  title: string;
  icon: IconName;
  iconColor: string;
  iconBackgroundColor: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { 
    id: 'login', 
    title: 'Inicio de sesión', 
    icon: 'lock-closed', 
    iconColor: '#FF1493',
    iconBackgroundColor: '#FFE4E1',
    route: '/login' 
  },
  { 
    id: 'home', 
    title: 'Pantalla principal', 
    icon: 'home', 
    iconColor: '#4169E1',
    iconBackgroundColor: '#E6F3FF',
    route: '/' 
  },
  { 
    id: 'list', 
    title: 'Lista de elementos', 
    icon: 'list', 
    iconColor: '#FF6347',
    iconBackgroundColor: '#FFE4E1',
    route: '/lista-elementos' 
  },
  { 
    id: 'detail', 
    title: 'Detalle de elemento', 
    icon: 'person', 
    iconColor: '#9370DB',
    iconBackgroundColor: '#F0E6FF',
    route: '/detalle-elemento' 
  },
  { 
    id: 'form', 
    title: 'Formulario de registro', 
    icon: 'settings', 
    iconColor: '#708090',
    iconBackgroundColor: '#F5F5F5',
    route: '/registro' 
  },
  { 
    id: 'config', 
    title: 'Configuración', 
    icon: 'person-circle', 
    iconColor: '#696969',
    iconBackgroundColor: '#F0F0F0',
    route: '/configuracion' 
  },
  { 
    id: 'profile', 
    title: 'Perfil de usuario', 
    icon: 'people', 
    iconColor: '#696969',
    iconBackgroundColor: '#F0F0F0',
    route: '/autor' 
  },
  { 
    id: 'services', 
    title: 'Lista de servicios', 
    icon: 'grid', 
    iconColor: '#87CEEB',
    iconBackgroundColor: '#E0F6FF',
    route: '/lista-servicios' 
  }
];

export default function PantallasScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Pantallas</ThemedText>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Lista de pantallas */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.lastMenuItem
              ]}
              onPress={() => router.push(item.route)}
              activeOpacity={0.7}
            >
              <View style={styles.menuItemContent}>
                <View style={[styles.iconContainer, { backgroundColor: item.iconBackgroundColor }]}>
                  <Ionicons 
                    name={item.icon} 
                    size={20} 
                    color={item.iconColor}
                  />
                </View>
                <ThemedText style={styles.menuText}>{item.title}</ThemedText>
                <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
              </View>
            </TouchableOpacity>
          ))}
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#F2F2F7',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  menuContainer: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItem: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuText: {
    fontSize: 17,
    color: '#000',
    fontWeight: '400',
    flex: 1,
  },
  bottomSpacing: {
    height: 100,
  },
});