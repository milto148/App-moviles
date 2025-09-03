import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Ayuda() {
  const preguntasFrecuentes = [
    {
      id: 1,
      pregunta: "¿Cómo puedo contactar soporte técnico?",
      respuesta: "Puedes contactarnos a través del email o teléfono disponible en la sección de contacto.",
      icono: "help-circle-outline"
    },
    {
      id: 2,
      pregunta: "¿Qué información necesito para una consulta?",
      respuesta: "Necesitas el modelo de tu motocicleta, año de fabricación y descripción del problema.",
      icono: "information-outline"
    },
    {
      id: 3,
      pregunta: "¿Ofrecen servicio a domicilio?",
      respuesta: "Sí, ofrecemos servicio a domicilio para mantenimiento básico en la ciudad.",
      icono: "home-outline"
    },
    {
      id: 4,
      pregunta: "¿Cuál es el horario de atención?",
      respuesta: "Nuestro horario es de lunes a viernes de 8:00 AM a 6:00 PM, sábados de 8:00 AM a 2:00 PM.",
      icono: "clock-outline"
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
            <MaterialCommunityIcons name="help-circle" size={60} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Ayuda y Soporte</Text>
          <Text style={styles.subtitle}>
            Preguntas frecuentes y soporte técnico sobre motocicletas
          </Text>
        </View>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="frequently-asked-questions" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Preguntas Frecuentes</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            {preguntasFrecuentes.map((item, index) => (
              <View key={item.id} style={styles.faqItem}>
                <View style={styles.questionContainer}>
                  <MaterialCommunityIcons 
                    name={item.icono} 
                    size={20} 
                    color="#8B5CF6" 
                    style={styles.questionIcon}
                  />
                  <Text style={styles.question}>{item.pregunta}</Text>
                </View>
                <Text style={styles.answer}>{item.respuesta}</Text>
                {index < preguntasFrecuentes.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="phone" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Contacto Directo</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <View style={styles.contactContainer}>
              <View style={styles.contactItem}>
                <MaterialCommunityIcons name="email" size={24} color="#10B981" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue}>motos.app.soporte@email.com</Text>
                </View>
              </View>
              
              <View style={styles.contactItem}>
                <MaterialCommunityIcons name="phone" size={24} color="#3B82F6" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Teléfono</Text>
                  <Text style={styles.contactValue}>310xxxxxxx</Text>
                </View>
              </View>
              
              <View style={styles.contactItem}>
                <MaterialCommunityIcons name="clock" size={24} color="#F59E0B" />
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Horario</Text>
                  <Text style={styles.contactValue}>Lun-Vie: 8:00 AM - 6:00 PM</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.emergencyCard}>
          <Card.Content style={styles.emergencyContent}>
            <MaterialCommunityIcons name="alert-circle" size={32} color="#EF4444" />
            <View style={styles.emergencyText}>
              <Text style={styles.emergencyTitle}>¿Emergencia en carretera?</Text>
              <Text style={styles.emergencySubtitle}>
                Contacta nuestro servicio de emergencia 24/7
              </Text>
            </View>
            <Text style={styles.emergencyNumber}>911</Text>
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
    width: 100,
    height: 100,
    borderRadius: 25,
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  card: {
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
  faqItem: {
    marginBottom: 16,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  questionIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    flex: 1,
  },
  answer: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginLeft: 28,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginTop: 16,
  },
  contactContainer: {
    gap: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
  },
  contactInfo: {
    marginLeft: 16,
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8B5CF6',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  emergencyCard: {
    marginBottom: 40,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FEE2E2',
  },
  emergencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  emergencyText: {
    flex: 1,
    marginHorizontal: 16,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  emergencySubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  emergencyNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EF4444',
  },
});