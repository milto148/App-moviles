import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const serviciosMotos = [
  {
    id: '1',
    titulo: 'Mantenimiento Básico',
    descripcion: 'Servicio de cambio de aceite y revisión general.',
    icono: 'wrench',
    color: '#8B5CF6',
  },
  {
    id: '2',
    titulo: 'Reparación de Motor',
    descripcion: 'Diagnóstico y reparación de fallas en el motor.',
    icono: 'engine',
    color: '#A855F7',
  },
  {
    id: '3',
    titulo: 'Lavado y Detallado',
    descripcion: 'Limpieza profunda y detallado para que tu moto luzca como nueva.',
    icono: 'car-wash',
    color: '#C084FC',
  },
  {
    id: '4',
    titulo: 'Asesoría en Accesorios',
    descripcion: 'Ayuda para elegir los mejores accesorios para tu moto.',
    icono: 'helmet-safety',
    color: '#DDD6FE',
  },
];

export default function ListaServicios() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Servicios para tu Moto</Text>
          <MaterialCommunityIcons name="tools" size={32} color="#FFFFFF" />
        </View>
        
        <View style={styles.servicesContainer}>
          {serviciosMotos.map((servicio) => (
            <TouchableOpacity 
              key={servicio.id} 
              onPress={() => router.push({ pathname: '/detalle-servicio', params: { id: servicio.id } })}
              activeOpacity={0.8}
            >
              <Card style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: servicio.color }]}>
                    <MaterialCommunityIcons 
                      name={servicio.icono} 
                      size={28} 
                      color="#FFFFFF" 
                    />
                  </View>
                  <View style={styles.headerContent}>
                    <Text style={styles.cardTitle}>{servicio.titulo}</Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.priceLabel}>Desde</Text>
                      <Text style={styles.price}>$50.000</Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons 
                    name="chevron-right" 
                    size={24} 
                    color="#8B5CF6" 
                  />
                </View>
                
                <Card.Content style={styles.cardContent}>
                  <Text style={styles.cardDescription}>{servicio.descripcion}</Text>
                  
                  <View style={styles.features}>
                    <View style={styles.feature}>
                      <MaterialCommunityIcons name="check-circle" size={16} color="#10B981" />
                      <Text style={styles.featureText}>Garantía incluida</Text>
                    </View>
                    <View style={styles.feature}>
                      <MaterialCommunityIcons name="clock-outline" size={16} color="#F59E0B" />
                      <Text style={styles.featureText}>Servicio rápido</Text>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        
        <Card style={styles.contactCard}>
          <Card.Content style={styles.contactContent}>
            <MaterialCommunityIcons name="phone" size={32} color="#8B5CF6" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>¿Necesitas ayuda personalizada?</Text>
              <Text style={styles.contactSubtitle}>Llámanos para una cotización</Text>
            </View>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Llamar</Text>
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
  scrollContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  servicesContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
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
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 12,
    color: '#64748B',
    marginRight: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  cardContent: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 16,
  },
  features: {
    gap: 8,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
    fontWeight: '500',
  },
  contactCard: {
    margin: 20,
    marginTop: 32,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E0E7FF',
  },
  contactContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  contactInfo: {
    flex: 1,
    marginHorizontal: 16,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  contactButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});