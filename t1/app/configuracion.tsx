import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function AjustesScreen() {
  const [notificaciones, setNotificaciones] = useState(true);

  const handleCerrarSesion = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Cerrar Sesión', 
          style: 'destructive',
          onPress: () => {
            Alert.alert('Sesión cerrada', 'Has cerrado sesión exitosamente');
          }
        }
      ]
    );
  };

  const menuItems = [
    {
      title: 'Cuenta',
      onPress: () => {
        console.log('Cuenta');
      },
      hasArrow: true
    },
    {
      title: 'Notificaciones',
      component: (
        <Switch 
          value={notificaciones} 
          onValueChange={setNotificaciones}
          trackColor={{ false: '#E5E5EA', true: '#007AFF' }}
          thumbColor={'#ffffff'}
          ios_backgroundColor="#E5E5EA"
        />
      ),
      hasArrow: false
    },
    {
      title: 'Privacidad',
      onPress: () => {
        console.log('Privacidad');
      },
      hasArrow: true
    },
    {
      title: 'Seguridad',
      onPress: () => {
        console.log('Seguridad');
      },
      hasArrow: true
    },
    {
      title: 'Ayuda',
      onPress: () => {
        console.log('Ayuda');
      },
      hasArrow: true
    }
  ];

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
        <ThemedText style={styles.headerTitle}>Ajustes</ThemedText>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Opciones del menú */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === 0 && styles.firstMenuItem,
                index === menuItems.length - 1 && styles.lastMenuItem
              ]}
              onPress={item.onPress}
              activeOpacity={item.component ? 1 : 0.7}
              disabled={!!item.component}
            >
              <View style={styles.menuItemContent}>
                <ThemedText style={styles.menuText}>{item.title}</ThemedText>
                {item.component || (
                  item.hasArrow && <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón de cerrar sesión */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleCerrarSesion}
          activeOpacity={0.7}
        >
          <ThemedText style={styles.logoutText}>Cerrar sesión</ThemedText>
        </TouchableOpacity>

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
  menuContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItem: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  firstMenuItem: {
    // Sin estilos especiales para el primer item
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuText: {
    fontSize: 17,
    color: '#000',
    fontWeight: '400',
  },
  logoutButton: {
    marginHorizontal: 20,
    marginTop: 40,
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 17,
    color: '#007AFF',
    fontWeight: '400',
  },
  bottomSpacing: {
    height: 100,
  },
});