import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, List, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function Seguridad() {
  const [twoFactor, setTwoFactor] = useState(false);
  
  const securityItems = [
    {
      id: 1,
      titulo: "Cambiar Contraseña",
      descripcion: "Actualiza tu contraseña de acceso",
      icono: "key-change",
      color: "#10B981",
      status: "Segura"
    },
    {
      id: 2,
      titulo: "Autenticación de Dos Factores",
      descripcion: "Añade una capa extra de seguridad",
      icono: "shield-check",
      color: "#3B82F6",
      status: twoFactor ? "Activada" : "Desactivada"
    },
    {
      id: 3,
      titulo: "Dispositivos Conectados",
      descripcion: "Gestiona los dispositivos autorizados",
      icono: "devices",
      color: "#F59E0B",
      status: "3 dispositivos"
    },
    {
      id: 4,
      titulo: "Actividad de la Cuenta",
      descripcion: "Revisa tu historial de accesos",
      icono: "history",
      color: "#8B5CF6",
      status: "Última: Hoy"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Inicio de sesión exitoso",
      device: "iPhone 13",
      location: "Medellín, Colombia",
      time: "Hace 2 horas",
      icon: "login",
      color: "#10B981"
    },
    {
      id: 2,
      action: "Cambio de configuración",
      device: "MacBook Pro",
      location: "Medellín, Colombia",
      time: "Ayer",
      icon: "cog",
      color: "#3B82F6"
    },
    {
      id: 3,
      action: "Contraseña actualizada",
      device: "Android",
      location: "Medellín, Colombia",
      time: "Hace 3 días",
      icon: "key",
      color: "#F59E0B"
    }
  ];

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="security" size={48} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Seguridad</Text>
          <Text style={styles.subtitle}>
            Protege tu cuenta con configuraciones avanzadas de seguridad
          </Text>
        </View>

        <Card style={styles.statusCard}>
          <Card.Content style={styles.statusContent}>
            <View style={styles.statusIndicator}>
              <MaterialCommunityIcons name="shield-check" size={32} color="#10B981" />
            </View>
            <View style={styles.statusText}>
              <Text style={styles.statusTitle}>Tu cuenta está segura</Text>
              <Text style={styles.statusDescription}>
                Todas las medidas de seguridad están funcionando correctamente
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.settingsCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="shield-account" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Configuraciones de Seguridad</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            {securityItems.map((item, index) => (
              <TouchableOpacity key={item.id} style={styles.securityItem}>
                <View style={styles.itemLeft}>
                  <View style={[styles.itemIconContainer, { backgroundColor: item.color }]}>
                    <MaterialCommunityIcons 
                      name={item.icono} 
                      size={20} 
                      color="#FFFFFF" 
                    />
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{item.titulo}</Text>
                    <Text style={styles.itemDescription}>{item.descripcion}</Text>
                  </View>
                </View>
                <View style={styles.itemRight}>
                  <Text style={styles.statusLabel}>{item.status}</Text>
                  <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />
                </View>
                {index < securityItems.length - 1 && <View style={styles.divider} />}
              </TouchableOpacity>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.activityCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="timeline-clock" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Actividad Reciente</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            {recentActivity.map((activity, index) => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={[styles.activityIcon, { backgroundColor: activity.color }]}>
                  <MaterialCommunityIcons 
                    name={activity.icon} 
                    size={16} 
                    color="#FFFFFF" 
                  />
                </View>
                <View style={styles.activityInfo}>
                  <Text style={styles.activityAction}>{activity.action}</Text>
                  <Text style={styles.activityDetails}>
                    {activity.device} • {activity.location}
                  </Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
                {index < recentActivity.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.alertCard}>
          <Card.Content style={styles.alertContent}>
            <MaterialCommunityIcons name="alert-circle" size={24} color="#EF4444" />
            <View style={styles.alertText}>
              <Text style={styles.alertTitle}>¿Actividad sospechosa?</Text>
              <Text style={styles.alertDescription}>
                Si notas actividad inusual, cambia tu contraseña inmediatamente
              </Text>
            </View>
            <Button
              mode="contained"
              buttonColor="#EF4444"
              labelStyle={styles.alertButtonText}
              onPress={() => console.log('Reportar actividad')}
            >
              Reportar
            </Button>
          </Card.Content>
        </Card>

        <View style={styles.emergencySection}>
          <Text style={styles.emergencyTitle}>Acciones de Emergencia</Text>
          <Button
            mode="outlined"
            icon="logout"
            style={styles.emergencyButton}
            labelStyle={styles.emergencyButtonText}
            onPress={() => console.log('Cerrar todas las sesiones')}
          >
            Cerrar todas las sesiones
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  statusCard: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D1FAE5',
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  statusIndicator: {
    marginRight: 16,
  },
  statusText: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 4,
  },
  statusDescription: {
    fontSize: 14,
    color: '#64748B',
  },
  settingsCard: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginLeft: 12,
  },
  cardContent: {
    padding: 20,
  },
  securityItem: {
    paddingVertical: 16,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 8,
  },
  itemIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#64748B',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  statusLabel: {
    fontSize: 12,
    color: '#8B5CF6',
    fontWeight: '600',
    marginRight: 8,
  },
  activityCard: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  activityItem: {
    paddingVertical: 16,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityInfo: {
    marginLeft: 4,
  },
  activityAction: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  activityDetails: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  alertCard: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FEE2E2',
  },
  alertContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  alertText: {
    flex: 1,
    marginHorizontal: 16,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  alertDescription: {
    fontSize: 14,
    color: '#64748B',
  },
  alertButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emergencySection: {
    marginBottom: 40,
    alignItems: 'center',
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  emergencyButton: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 16,
  },
  emergencyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginTop: 16,
  },
});