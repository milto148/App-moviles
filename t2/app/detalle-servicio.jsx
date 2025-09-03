import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const serviciosMotos = [
  {
    id: '1',
    titulo: 'Mantenimiento Básico',
    descripcion: 'Servicio de cambio de aceite, filtros y revisión de frenos para mantener tu moto en óptimas condiciones.',
    icono: 'wrench',
    color: '#8B5CF6',
  },
  {
    id: '2',
    titulo: 'Revisión Técnica',
    descripcion: 'Inspección completa para garantizar la seguridad y el buen funcionamiento de todos los sistemas de tu motocicleta.',
    icono: 'clipboard-list',
    color: '#A855F7',
  },
  {
    id: '3',
    titulo: 'Repuestos Originales',
    descripcion: 'Venta de repuestos y accesorios originales de las mejores marcas para tu moto.',
    icono: 'tools',
    color: '#C084FC',
  },
  {
    id: '4',
    titulo: 'Asesoría en Compra',
    descripcion: 'Asesoramiento personalizado para ayudarte a elegir la motocicleta ideal según tus necesidades y presupuesto.',
    icono: 'car-key',
    color: '#DDD6FE',
  },
];

export default function DetalleServicio() {
  const { id } = useLocalSearchParams();
  const servicio = serviciosMotos.find(s => s.id === id);

  if (!servicio) {
    return (
      <LinearGradient
        colors={['#8B5CF6', '#A855F7', '#C084FC']}
        style={[styles.container, styles.center]}
      >
        <Card style={styles.errorCard}>
          <Card.Content style={styles.errorContent}>
            <Text style={styles.errorText}>Servicio no encontrado.</Text>
          </Card.Content>
        </Card>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: servicio.color }]}>
            <MaterialCommunityIcons 
              name={servicio.icono} 
              size={60} 
              color="#FFFFFF" 
            />
          </View>
          <Text style={styles.title}>
            {servicio.titulo}
          </Text>
        </View>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.serviceHeader}>
              <Text style={styles.serviceLabel}>Descripción del servicio</Text>
            </View>
            <Text style={styles.descripcion}>
              {servicio.descripcion}
            </Text>
            
            <View style={styles.featuresContainer}>
              <View style={styles.feature}>
                <MaterialCommunityIcons name="check-circle" size={20} color="#10B981" />
                <Text style={styles.featureText}>Servicio profesional garantizado</Text>
              </View>
              <View style={styles.feature}>
                <MaterialCommunityIcons name="check-circle" size={20} color="#10B981" />
                <Text style={styles.featureText}>Técnicos especializados</Text>
              </View>
              <View style={styles.feature}>
                <MaterialCommunityIcons name="check-circle" size={20} color="#10B981" />
                <Text style={styles.featureText}>Atención personalizada</Text>
              </View>
            </View>
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
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 32,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  card: {
    borderRadius: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  cardContent: {
    padding: 24,
  },
  serviceHeader: {
    marginBottom: 16,
  },
  serviceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 16,
    lineHeight: 24,
    color: '#64748B',
    marginBottom: 24,
    textAlign: 'justify',
  },
  featuresContainer: {
    gap: 12,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  featureText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
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
    padding: 24,
    alignItems: 'center',
  },
  errorText: {
    color: '#1E293B',
    fontSize: 18,
    fontWeight: '600',
  },
});