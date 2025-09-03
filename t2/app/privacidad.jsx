import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, List, Switch } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function Privacidad() {
  const [datosPersonales, setDatosPersonales] = useState(true);
  const [historialNavegacion, setHistorialNavegacion] = useState(false);
  const [ubicacion, setUbicacion] = useState(true);
  const [publicidad, setPublicidad] = useState(false);

  const privacySettings = [
    {
      id: 1,
      titulo: "Datos Personales",
      descripcion: "Controla qué información personal se comparte",
      icono: "account-lock",
      valor: datosPersonales,
      onChange: setDatosPersonales,
      color: "#10B981"
    },
    {
      id: 2,
      titulo: "Historial de Navegación",
      descripcion: "Permitir el seguimiento de tu actividad en la app",
      icono: "history",
      valor: historialNavegacion,
      onChange: setHistorialNavegacion,
      color: "#F59E0B"
    },
    {
      id: 3,
      titulo: "Ubicación",
      descripcion: "Compartir tu ubicación para servicios locales",
      icono: "map-marker",
      valor: ubicacion,
      onChange: setUbicacion,
      color: "#3B82F6"
    },
    {
      id: 4,
      titulo: "Publicidad Personalizada",
      descripcion: "Recibir anuncios basados en tus intereses",
      icono: "bullhorn",
      valor: publicidad,
      onChange: setPublicidad,
      color: "#EF4444"
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
            <MaterialCommunityIcons name="shield-lock" size={48} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Privacidad</Text>
          <Text style={styles.subtitle}>
            Controla tu información personal y configuraciones de privacidad
          </Text>
        </View>

        <Card style={styles.infoCard}>
          <Card.Content style={styles.infoContent}>
            <MaterialCommunityIcons name="information" size={24} color="#8B5CF6" />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Tu privacidad es importante</Text>
              <Text style={styles.infoDescription}>
                Estas configuraciones te ayudan a controlar qué información compartes y cómo se usa.
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.settingsCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="cog" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Configuraciones de Privacidad</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            {privacySettings.map((setting, index) => (
              <View key={setting.id} style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <View style={[styles.settingIconContainer, { backgroundColor: setting.color }]}>
                    <MaterialCommunityIcons 
                      name={setting.icono} 
                      size={20} 
                      color="#FFFFFF" 
                    />
                  </View>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingTitle}>{setting.titulo}</Text>
                    <Text style={styles.settingDescription}>{setting.descripcion}</Text>
                  </View>
                </View>
                <Switch
                  value={setting.valor}
                  onValueChange={setting.onChange}
                  color="#8B5CF6"
                  style={styles.switch}
                />
                {index < privacySettings.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.dataCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="database" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Gestión de Datos</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <List.Item
              title="Descargar mis datos"
              description="Obtén una copia de tu información personal"
              left={() => <MaterialCommunityIcons name="download" size={24} color="#10B981" />}
              right={() => <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />}
              style={styles.listItem}
              onPress={() => console.log('Descargar datos')}
            />
            <View style={styles.divider} />
            <List.Item
              title="Eliminar cuenta"
              description="Eliminar permanentemente tu cuenta y datos"
              left={() => <MaterialCommunityIcons name="delete" size={24} color="#EF4444" />}
              right={() => <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />}
              style={styles.listItem}
              onPress={() => console.log('Eliminar cuenta')}
            />
          </Card.Content>
        </Card>

        <Card style={styles.supportCard}>
          <Card.Content style={styles.supportContent}>
            <MaterialCommunityIcons name="help-circle" size={32} color="#8B5CF6" />
            <View style={styles.supportText}>
              <Text style={styles.supportTitle}>¿Tienes dudas sobre privacidad?</Text>
              <Text style={styles.supportDescription}>
                Consulta nuestras políticas o contacta soporte
              </Text>
            </View>
            <MaterialCommunityIcons name="arrow-right" size={20} color="#8B5CF6" />
          </Card.Content>
        </Card>
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
  infoCard: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  infoText: {
    marginLeft: 16,
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  infoDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
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
  settingItem: {
    paddingVertical: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 12,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
  },
  switch: {
    alignSelf: 'flex-end',
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginTop: 16,
  },
  dataCard: {
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
  listItem: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  supportCard: {
    marginBottom: 40,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E0E7FF',
  },
  supportContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  supportText: {
    flex: 1,
    marginHorizontal: 16,
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  supportDescription: {
    fontSize: 14,
    color: '#64748B',
  },
});