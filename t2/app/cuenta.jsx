import { View, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import { Text, Card, Button, List, Chip } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Perfil() {
  const router = useRouter();

  const perfil = {
    nombre: 'Amante de las Motos',
    rol: 'Entusiasta y experto en motocicletas',
    bio: 'Apasionado por la velocidad, el diseño y la tecnología de las motocicletas. Dedicado a explorar las últimas novedades del mercado y compartir conocimientos.',
    contacto: {
      email: 'motos.app.soporte@email.com',
      telefono: '310xxxxxxx',
      github: 'https://github.com/motos-app',
      linkedin: 'https://www.linkedin.com/in/amante-motos/',
    },
    habilidades: ['Mecánica básica', 'Modelos clásicos', 'Rutas', 'Historia de las motos', 'Experiencia en manejo'],
    avatar: 'https://placehold.co/150x150/8B5CF6/ffffff',
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
              source={{ uri: perfil.avatar }}
              style={styles.avatar}
              accessibilityLabel={`Foto de perfil de ${perfil.nombre}`}
            />
          </View>
          <Text style={styles.nombre}>{perfil.nombre}</Text>
          <Text style={styles.rol}>{perfil.rol}</Text>
        </View>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="account-circle-outline" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Acerca de mí</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.bioText}>{perfil.bio}</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="contacts-outline" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Información de contacto</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <List.Item
              title={perfil.contacto.email}
              titleStyle={styles.contactText}
              left={props => <List.Icon {...props} icon="email-outline" color="#8B5CF6" />}
              onPress={() => Linking.openURL(`mailto:${perfil.contacto.email}`)}
              style={styles.contactItem}
            />
            <List.Item
              title={perfil.contacto.telefono}
              titleStyle={styles.contactText}
              left={props => <List.Icon {...props} icon="phone-outline" color="#8B5CF6" />}
              onPress={() => Linking.openURL(`tel:${perfil.contacto.telefono}`)}
              style={styles.contactItem}
            />
            <List.Item
              title="GitHub"
              description="motos-app"
              titleStyle={styles.contactText}
              descriptionStyle={styles.contactDescription}
              left={props => <List.Icon {...props} icon="github" color="#8B5CF6" />}
              onPress={() => Linking.openURL(perfil.contacto.github)}
              style={styles.contactItem}
            />
            <List.Item
              title="LinkedIn"
              description="amante-motos"
              titleStyle={styles.contactText}
              descriptionStyle={styles.contactDescription}
              left={props => <List.Icon {...props} icon="linkedin" color="#8B5CF6" />}
              onPress={() => Linking.openURL(perfil.contacto.linkedin)}
              style={styles.contactItem}
            />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="tools" size={24} color="#8B5CF6" />
            <Text style={styles.cardTitle}>Habilidades</Text>
          </View>
          <Card.Content style={styles.cardContent}>
            <View style={styles.skillsContainer}>
              {perfil.habilidades.map((skill, index) => (
                <Chip 
                  key={index} 
                  style={styles.chip} 
                  textStyle={styles.chipText}
                  mode="outlined"
                >
                  {skill}
                </Chip>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          style={styles.btnVolver}
          onPress={() => router.back()}
          labelStyle={styles.btnVolverText}
          buttonColor="#FFFFFF"
        >
          Volver
        </Button>
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
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
  },
  rol: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
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
  bioText: {
    lineHeight: 24,
    color: '#64748B',
    fontSize: 16,
  },
  contactItem: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  contactText: {
    color: '#1E293B',
    fontWeight: '600',
    fontSize: 16,
  },
  contactDescription: {
    color: '#64748B',
    fontSize: 14,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    backgroundColor: '#F3F4F6',
    borderColor: '#8B5CF6',
    borderWidth: 1,
  },
  chipText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  btnVolver: {
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 20,
    paddingVertical: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  btnVolverText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
});