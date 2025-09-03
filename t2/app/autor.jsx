import { View, StyleSheet, Image, Linking } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Autor() {
  const email = 'motos.app.soporte@email.com';
  const phoneNumber = '310xxxxxxx';
  const githubUrl = 'https://github.com/motos-app';

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Card style={styles.card}>
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://placehold.co/150x150/8B5CF6/ffffff' }}
                style={styles.avatar}
                accessibilityLabel="Imagen de un diseñador de motocicletas"
              />
            </View>
            <View style={styles.headerText}>
              <Text variant="headlineMedium" style={styles.nombre}>
                Diseñador de Motos
              </Text>
              <Text style={styles.info}>Desarrollador de aplicaciones móviles</Text>
            </View>
          </View>

          <Card.Content style={styles.content}>
            <View style={styles.contactContainer}>
              <Button
                icon="email"
                mode="contained"
                onPress={() => Linking.openURL(`mailto:${email}`)}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
                buttonColor="#8B5CF6"
              >
                {email}
              </Button>
              <Button
                icon="phone"
                mode="contained"
                onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
                buttonColor="#A855F7"
              >
                {phoneNumber}
              </Button>
              <Button
                icon="github"
                mode="contained"
                onPress={() => Linking.openURL(githubUrl)}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
                buttonColor="#C084FC"
              >
                motos-app
              </Button>
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
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F8FAFC',
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#8B5CF6',
  },
  headerText: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
    color: '#1E293B',
    fontSize: 22,
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  content: {
    paddingTop: 0,
  },
  contactContainer: {
    paddingVertical: 16,
    gap: 12,
  },
  contactButton: {
    borderRadius: 16,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  btnVolver: {
    marginTop: 32,
    width: '80%',
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