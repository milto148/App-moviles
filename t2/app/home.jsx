import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Searchbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import datosMotos from '../assets/motos.json';

export default function Home() {
  const router = useRouter();
  const [lista, setLista] = useState(datosMotos);
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (query) => {
    setBusqueda(query);
    if (query) {
      const filtrados = datosMotos.filter(item =>
        item.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setLista(filtrados);
    } else {
      setLista(datosMotos);
    }
  };

  const renderMotoCard = (item, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => router.push({ pathname: '/detalle-elemento', params: { id: item.id } })}
      activeOpacity={0.8}
    >
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Card.Cover source={{ uri: item.urlImagen }} style={styles.cardImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={styles.imageOverlay}
          />
          <View style={styles.yearBadge}>
            <Text style={styles.yearText}>{item.año}</Text>
          </View>
          <View style={styles.favoriteButton}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="#FFFFFF" />
          </View>
        </View>
        
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={styles.cardTitle}>
            {item.titulo}
          </Text>
          <Text style={styles.cardDescription} numberOfLines={2}>
            {item.descripcion}
          </Text>
          
          <View style={styles.cardFooter}>
            <View style={styles.ratingContainer}>
              <MaterialCommunityIcons name="star" size={16} color="#F59E0B" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
            <Button
              mode="contained"
              onPress={() => router.push({ pathname: '/detalle-elemento', params: { id: item.id } })}
              labelStyle={styles.buttonText}
              buttonColor="#8B5CF6"
              compact
            >
              Ver más
            </Button>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>¡Hola!</Text>
            <Text style={styles.welcomeSubtext}>Descubre las mejores motos</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{ uri: 'https://placehold.co/40x40/8B5CF6/ffffff' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        <Searchbar
          placeholder="Buscar motocicletas..."
          onChangeText={handleSearch}
          value={busqueda}
          style={styles.searchbar}
          inputStyle={styles.searchInput}
          iconColor="#8B5CF6"
          theme={{
            colors: {
              primary: '#8B5CF6'
            }
          }}
        />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categorías populares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
            <TouchableOpacity style={[styles.categoryItem, { backgroundColor: '#10B981' }]}>
              <MaterialCommunityIcons name="motorcycle" size={24} color="#FFFFFF" />
              <Text style={styles.categoryText}>Deportivas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryItem, { backgroundColor: '#F59E0B' }]}>
              <MaterialCommunityIcons name="road-variant" size={24} color="#FFFFFF" />
              <Text style={styles.categoryText}>Touring</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryItem, { backgroundColor: '#EF4444' }]}>
              <MaterialCommunityIcons name="terrain" size={24} color="#FFFFFF" />
              <Text style={styles.categoryText}>Off-road</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.categoryItem, { backgroundColor: '#3B82F6' }]}>
              <MaterialCommunityIcons name="city-variant" size={24} color="#FFFFFF" />
              <Text style={styles.categoryText}>Urbanas</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.motosSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Motocicletas destacadas</Text>
            <TouchableOpacity onPress={() => router.push('/lista-elementos')}>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.motosGrid}>
            {lista.map(renderMotoCard)}
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeSection: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: '#E5E7EB',
  },
  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  searchbar: {
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
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  categoriesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
  },
  categoryItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    marginRight: 12,
    minWidth: 80,
  },
  categoryText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 4,
  },
  motosSection: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '600',
  },
  motosGrid: {
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
  imageContainer: {
    position: 'relative',
  },
  cardImage: {
    height: 200,
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
    left: 12,
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  yearText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 4,
    fontWeight: '600',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});