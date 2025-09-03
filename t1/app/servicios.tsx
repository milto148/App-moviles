import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  icon: string;
  iconColor: string;
  iconBackgroundColor: string;
  badge?: string;
}

const servicios: Servicio[] = [
  {
    id: '1',
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Abrir servicios telefónicos para alertas de dispositivos para mejor la notificación en tiempo real de',
    icon: 'call',
    iconColor: '#FFFFFF',
    iconBackgroundColor: '#4CAF50',
  },
  {
    id: '2',
    titulo: 'Protección inteligente',
    descripcion: 'Aplicación de alarma para el hogar, protegiendo la seguridad de tu hogar',
    icon: 'shield-checkmark',
    iconColor: '#FFFFFF',
    iconBackgroundColor: '#2196F3',
  },
  {
    id: '3',
    titulo: 'Compras',
    descripcion: 'Encuentra rápidamente productos y marcas, descubre más productos inteligentes',
    icon: 'bag',
    iconColor: '#FFFFFF',
    iconBackgroundColor: '#FF9800',
  },
  {
    id: '4',
    titulo: 'Maestro de iluminación',
    descripcion: 'Proporciona soluciones de iluminación personalizadas a basadas en IA',
    icon: 'bulb',
    iconColor: '#FFFFFF',
    iconBackgroundColor: '#9C27B0',
    badge: 'NEW',
  },
  {
    id: '5',
    titulo: 'Asistente de voz de terceros',
    descripcion: 'Utiliza altavoces inteligentes,',
    icon: 'mic',
    iconColor: '#FFFFFF',
    iconBackgroundColor: '#2196F3',
  },
];

export default function ListaServiciosScreen() {
  const handleServicePress = (servicio: Servicio) => {
    console.log(`Servicio seleccionado: ${servicio.titulo}`);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="home" size={24} color="#000" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Lista de servicios</ThemedText>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Lista de servicios */}
        <View style={styles.servicesContainer}>
          {servicios.map((servicio) => (
            <TouchableOpacity
              key={servicio.id}
              style={styles.serviceCard}
              onPress={() => handleServicePress(servicio)}
              activeOpacity={0.7}
            >
              <View style={styles.serviceContent}>
                {/* Icono del servicio */}
                <View style={[styles.iconContainer, { backgroundColor: servicio.iconBackgroundColor }]}>
                  <Ionicons 
                    name={servicio.icon as any} 
                    size={24} 
                    color={servicio.iconColor}
                  />
                </View>

                {/* Información del servicio */}
                <View style={styles.serviceInfo}>
                  <View style={styles.titleContainer}>
                    <ThemedText style={styles.serviceTitle}>{servicio.titulo}</ThemedText>
                    {servicio.badge && (
                      <View style={styles.badge}>
                        <ThemedText style={styles.badgeText}>{servicio.badge}</ThemedText>
                      </View>
                    )}
                  </View>
                  <ThemedText style={styles.serviceDescription}>
                    {servicio.descripcion}
                  </ThemedText>
                </View>

                {/* Flecha indicadora */}
                <View style={styles.arrowContainer}>
                  <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#F2F2F7',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  servicesContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
    marginRight: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  badge: {
    backgroundColor: '#FF9500',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
  },
  bottomSpacing: {
    height: 100,
  },
});