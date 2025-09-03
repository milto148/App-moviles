import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  const menuItems = [
    {
      icon: 'create-outline',
      title: 'Editar perfil',
      onPress: () => {
        // Navegar a pantalla de edición de perfil
        console.log('Editar perfil');
      }
    },
    {
      icon: 'notifications-outline',
      title: 'Notificaciones',
      onPress: () => {
        // Navegar a configuración de notificaciones
        console.log('Notificaciones');
      }
    },
    {
      icon: 'settings-outline',
      title: 'Configuración',
      onPress: () => {
        // Navegar a configuración
        console.log('Configuración');
      }
    },
    {
      icon: 'help-circle-outline',
      title: 'Ayuda',
      onPress: () => {
        // Navegar a ayuda
        console.log('Ayuda');
      }
    }
  ];

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
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
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar y información del usuario */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100/B8D4E3/FFFFFF?text=JD' }}
              style={styles.avatar}
            />
          </View>
          
          <ThemedText style={styles.userName}>John Doe</ThemedText>
          <ThemedText style={styles.userEmail}>johndoe@email.com</ThemedText>
        </View>

        {/* Opciones del menú */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <View style={styles.menuItemContent}>
                <Ionicons 
                  name={item.icon as any} 
                  size={24} 
                  color="#666" 
                  style={styles.menuIcon}
                />
                <ThemedText style={styles.menuText}>{item.title}</ThemedText>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón de cerrar sesión */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <ThemedText style={styles.logoutText}>Cerrar sesión</ThemedText>
        </TouchableOpacity>
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
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#B8D4E3',
  },
  userName: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 1,
    borderRadius: 0,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: 16,
    width: 24,
  },
  menuText: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '400',
  },
  logoutButton: {
    marginHorizontal: 20,
    marginBottom: 40,
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});