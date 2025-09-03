import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const pantallas = [
  {
    id: 'autor',
    titulo: 'Autor',
    descripcion: 'Información del desarrollador',
    icono: 'account-tie',
    color: '#10B981',
    ruta: '/autor'
  },
  {
    id: 'inicio-sesion',
    titulo: 'Inicio de Sesión',
    descripcion: 'Acceso a la aplicación',
    icono: 'login',
    color: '#3B82F6',
    ruta: '/inicio-sesion'
  },
  {
    id: 'registro',
    titulo: 'Registro',
    descripcion: 'Crear nueva cuenta',
    icono: 'account-plus',
    color: '#F59E0B',
    ruta: '/formulario-registro'
  },
  {
    id: 'bienvenida',
    titulo: 'Pantalla Principal',
    descripcion: 'Página de bienvenida',
    icono: 'home',
    color: '#EF4444',
    ruta: '/pantalla-principal'
  },
  {
    id: 'home',
    titulo: 'Home',
    descripcion: 'Dashboard principal',
    icono: 'view-dashboard',
    color: '#8B5CF6',
    ruta: '/home'
  },
  {
    id: 'elementos',
    titulo: 'Lista de Elementos',
    descripcion: 'Catálogo de motocicletas',
    icono: 'list-box',
    color: '#06B6D4',
    ruta: '/lista-elementos'
  },
  {
    id: 'servicios',
    titulo: 'Lista de Servicios',
    descripcion: 'Servicios disponibles',
    icono: 'briefcase',
    color: '#84CC16',
    ruta: '/lista-servicios'
  },
  {
    id: 'usuarios',
    titulo: 'Lista de Usuarios',
    descripcion: 'Comunidad de usuarios',
    icono: 'account-group',
    color: '#F97316',
    ruta: '/lista-usuarios'
  },
  {
    id: 'configuracion',
    titulo: 'Configuración',
    descripcion: 'Ajustes de la app',
    icono: 'cog',
    color: '#6366F1',
    ruta: '/configuracion'
  }
];

export default function Index() {
  const router = useRouter();

  const handleNavigate = (ruta) => {
    router.push(ruta);
  };

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <MaterialCommunityIcons name="motorcycle" size={40} color="#FFFFFF" />
            <Text style={styles.title}>Motos App</Text>
          </View>
          <Text style={styles.subtitle}>
            Explora todas las pantallas de la aplicación
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{pantallas.length}</Text>
            <Text style={styles.statLabel}>Pantallas</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Funcional</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2024</Text>
            <Text style={styles.statLabel}>Versión</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {pantallas.map((pantalla) => (
            <TouchableOpacity
              key={pantalla.id}
              style={styles.pantallaCard}
              onPress={() => handleNavigate(pantalla.ruta)}
              activeOpacity={0.8}
            >
              <View style={styles.cardContent}>
                <View style={[styles.iconContainer, { backgroundColor: pantalla.color }]}>
                  <MaterialCommunityIcons 
                    name={pantalla.icono} 
                    size={28} 
                    color="#FFFFFF" 
                  />
                </View>
                
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{pantalla.titulo}</Text>
                  <Text style={styles.cardDescription}>{pantalla.descripcion}</Text>
                </View>

                <MaterialCommunityIcons 
                  name="chevron-right" 
                  size={20} 
                  color="#8B5CF6" 
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footerCard}>
          <View style={styles.footerContent}>
            <MaterialCommunityIcons name="information" size={32} color="#8B5CF6" />
            <View style={styles.footerText}>
              <Text style={styles.footerTitle}>Aplicación de Demostración</Text>
              <Text style={styles.footerSubtitle}>
                Esta es una aplicación de prueba para mostrar diferentes componentes y funcionalidades
              </Text>
            </View>
          </View>
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#E5E7EB',
    fontWeight: '500',
  },
  gridContainer: {
    gap: 12,
    marginBottom: 24,
  },
  pantallaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
  },
  footerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 16,
    flex: 1,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  footerSubtitle: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
});