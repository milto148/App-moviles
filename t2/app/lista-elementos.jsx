import { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Searchbar } from 'react-native-paper';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import datosMotos from '../assets/motos.json';

export default function ListaElementos() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState(datosMotos);

  useEffect(() => {
    const filtrados = datosMotos.filter(item =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}
      activeOpacity={0.8}
    >
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Card.Cover source={{ uri: item.urlImagen }} style={styles.cardImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.4)']}
            style={styles.imageOverlay}
          />
          <View style={styles.yearBadge}>
            <Text style={styles.yearText}>{item.año}</Text>
          </View>
        </View>
        
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={styles.title}>
            {item.titulo}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.descripcion}
          </Text>
        </Card.Content>
        
        <Card.Actions style={styles.cardActions}>
          <Button
            mode="contained"
            onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}
            labelStyle={styles.buttonText}
            buttonColor="#8B5CF6"
            icon="arrow-right"
            contentStyle={styles.buttonContent}
          >
            Ver detalles
          </Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Motocicletas</Text>
        <MaterialCommunityIcons name="motorcycle" size={32} color="#FFFFFF" />
      </View>
      
      <Searchbar
        placeholder="Buscar motocicleta..."
        onChangeText={setTextoBuscar}
        value={textoBuscar}
        style={styles.searchbar}
        inputStyle={styles.searchInput}
        iconColor="#8B5CF6"
        theme={{
          colors: {
            primary: '#8B5CF6'
          }
        }}
      />
      
      <FlatList
        data={listaFiltrada}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchbar: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  searchInput: {
    color: '#1E293B',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
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
  imageContainer: {
    position: 'relative',
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  yearBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  yearText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  description: {
    color: '#64748B',
    lineHeight: 22,
    fontSize: 14,
  },
  cardActions: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  buttonContent: {
    flexDirection: 'row-reverse',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});