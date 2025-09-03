import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Bienvenida() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBackground}>
            <Image
              source={{ uri: 'https://placehold.co/200x200/8B5CF6/ffffff' }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.decorativeElements}>
            <View style={[styles.decorativeCircle, styles.circle1]} />
            <View style={[styles.decorativeCircle, styles.circle2]} />
            <View style={[styles.decorativeCircle, styles.circle3]} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>¡Bienvenido al mundo de las motos!</Text>
          <Text style={styles.subtitle}>
            Descubre modelos exclusivos, servicios especializados y conecta con una comunidad apasionada por las motocicletas.
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <MaterialCommunityIcons name="motorcycle" size={24} color="#FFFFFF" />
            <Text style={styles.featureText}>Catálogo completo</Text>
          </View>
          <View style={styles.feature}>
            <MaterialCommunityIcons name="tools" size={24} color="#FFFFFF" />
            <Text style={styles.featureText}>Servicios especializados</Text>
          </View>
          <View style={styles.feature}>
            <MaterialCommunityIcons name="account-group" size={24} color="#FFFFFF" />
            <Text style={styles.featureText}>Comunidad activa</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            onPress={() => router.replace('/inicio-sesion')}
            buttonColor="#FFFFFF"
            icon="rocket-launch"
          >
            Empezar aventura
          </Button>
          
          <Button
            mode="text"
            style={styles.secondaryButton}
            labelStyle={styles.secondaryButtonLabel}
            onPress={() => router.push('/lista-elementos')}
          >
            Ver catálogo
          </Button>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tu pasión por las motos comienza aquí
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 40,
  },
  imageBackground: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 40,
  },
  decorativeElements: {
    position: 'absolute',
    width: 240,
    height: 240,
    top: -20,
    left: -20,
  },
  decorativeCircle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
  },
  circle1: {
    width: 20,
    height: 20,
    top: 30,
    right: 20,
  },
  circle2: {
    width: 16,
    height: 16,
    bottom: 40,
    left: 30,
  },
  circle3: {
    width: 12,
    height: 12,
    top: 80,
    left: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  feature: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: '100%',
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonContent: {
    paddingVertical: 12,
    flexDirection: 'row-reverse',
  },
  buttonLabel: {
    color: '#8B5CF6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    width: '100%',
  },
  secondaryButtonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: '#E5E7EB',
    fontStyle: 'italic',
  },
});