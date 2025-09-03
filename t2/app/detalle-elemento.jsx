import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import datosMotos from '../assets/motos.json';

export default function DetalleElemento() {
  const { id } = useLocalSearchParams();
  const [elemento, setElemento] = useState(null);

  useEffect(() => {
    const item = datosMotos.find(e => e.id.toString() === id);
    setElemento(item);
  }, [id]);

  if (!elemento) {
    return (
      <LinearGradient
        colors={['#8B5CF6', '#A855F7', '#C084FC']}
        style={[styles.container, styles.center]}
      >
        <Card style={styles.errorCard}>
          <Card.Content style={styles.errorContent}>
            <Text style={styles.errorText}>Motocicleta no encontrada.</Text>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: elemento.urlImagen }}
            style={styles.imagen}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(139, 92, 246, 0.3)']}
            style={styles.imageOverlay}
          />
        </View>
        
        <View style={styles.contentContainer}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text variant="headlineMedium" style={styles.titulo}>
                {elemento.titulo}
              </Text>
              
              <View style={styles.yearBadge}>
                <Text style={styles.yearText}>
                  {elemento.año}
                </Text>
              </View>
              
              <Text variant="bodyLarge" style={styles.descripcion}>
                {elemento.descripcion}
              </Text>
            </Card.Content>
          </Card>
        </View>
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
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: -30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    backgroundColor: '#FFFFFF',
    minHeight: 300,
  },
  cardContent: {
    padding: 24,
  },
  titulo: {
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
    textAlign: 'center',
  },
  yearBadge: {
    alignSelf: 'center',
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  yearText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  descripcion: {
    color: '#64748B',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'justify',
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