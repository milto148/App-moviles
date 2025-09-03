import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, List } from 'react-native-paper';
import usuarios from '../assets/usuarios-motos.json';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetalleUsuario() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const usuario = usuarios.find(u => u.id.toString() === id);

  if (!usuario) {
    return (
      <LinearGradient
        colors={['#8B5CF6', '#A855F7', '#C084FC']}
        style={[styles.container, styles.center]}
      >
        <Card style={styles.errorCard}>
          <Card.Content style={styles.errorContent}>
            <MaterialCommunityIcons name="account-off" size={48} color="#64748B" />
            <Text style={styles.errorText}>Usuario no encontrado.</Text>
          </Card.Content>
        </Card>
      </LinearGradient>
    );
  }

  const handleEditProfile = () => {
    console.log('Navegar a la pantalla de edición de perfil');
  };

  const handleNotifications = () => {
    console.log('Navegar a la pantalla de notificaciones');
  };

  const handleConfiguracion = () => {
    console.log('Navegar a la pantalla de configuración');
    router.push('/configuracion');
  };

  const handleAyuda = () => {
    console.log('Navegar a la pantalla de ayuda');
    router.push('/ayuda');
  };

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: usuario.avatar }}
              style={styles.avatar}
            />
            <View style={styles.statusIndicator} />
          </View>
          <Text style={styles.name}>{usuario.nombre}</Text>
          <Text style={styles.role}>Entusiasta de Motos</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>127</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>89</Text>
              <Text style={styles.statLabel}>Siguiendo</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Motos</Text>
            </View>
          </View>
        </View>

        <Card style={styles.infoCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="information" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Información de contacto</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="email-outline" size={20} color='#64748B' />
              <View style={styles.infoTextContainer}>
                <Text style={styles.label}>Correo electrónico</Text>
                <Text style={styles.value}>{usuario.email}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="phone-outline" size={20} color='#64748B' />
              <View style={styles.infoTextContainer}>
                <Text style={styles.label}>Teléfono</Text>
                <Text style={styles.value}>{usuario.telefono}</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.optionsCard}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="cog" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Opciones de Usuario</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <TouchableOpacity style={styles.optionItem} onPress={handleEditProfile}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIconContainer, { backgroundColor: '#10B981' }]}>
                  <MaterialCommunityIcons name="pencil-outline" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>Editar Perfil</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={handleNotifications}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIconContainer, { backgroundColor: '#F59E0B' }]}>
                  <MaterialCommunityIcons name="bell-outline" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>Notificaciones</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={handleConfiguracion}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIconContainer, { backgroundColor: '#8B5CF6' }]}>
                  <MaterialCommunityIcons name="cog-outline" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>Configuración</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={handleAyuda}>
              <View style={styles.optionLeft}>
                <View style={[styles.optionIconContainer, { backgroundColor: '#3B82F6' }]}>
                  <MaterialCommunityIcons name="help-circle-outline" size={20} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>Ayuda</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#64748B" />
            </TouchableOpacity>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#10B981',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#E5E7EB',
    marginBottom: 24,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 32,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#E5E7EB',
  },
  infoCard: {
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
  optionsCard: {
    marginBottom: 40,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  errorCard: {
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  errorContent: {
    padding: 32,
    alignItems: 'center',
  },
  errorText: {
    color: '#1E293B',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
});