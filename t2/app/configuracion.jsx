import { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Switch, List, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Configuracion() {
  const router = useRouter();
  const [notificaciones, setNotificaciones] = useState(false);

  const handleCerrarSesion = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, cerrar sesión', onPress: () => {
          console.log('Sesión cerrada');
          router.replace('/inicio-sesion');
        }},
      ],
      { cancelable: true }
    );
  };

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Configuración</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuenta</Text>
          <View style={styles.card}>
            <List.Item
              title="Mi cuenta"
              titleStyle={styles.listTitle}
              left={() => <List.Icon icon="account-circle-outline" color="#8B5CF6" />}
              right={() => <List.Icon icon="chevron-right" color="#8B5CF6" />}
              style={styles.listItem}
              onPress={() => router.push('/cuenta')}
            />
            <View style={styles.divider} />
            <List.Item
              title="Privacidad"
              titleStyle={styles.listTitle}
              left={() => <List.Icon icon="shield-lock-outline" color="#8B5CF6" />}
              right={() => <List.Icon icon="chevron-right" color="#8B5CF6" />}
              style={styles.listItem}
              onPress={() => router.push('/privacidad')}
            />
            <View style={styles.divider} />
            <List.Item
              title="Seguridad"
              titleStyle={styles.listTitle}
              left={() => <List.Icon icon="lock-outline" color="#8B5CF6" />}
              right={() => <List.Icon icon="chevron-right" color="#8B5CF6" />}
              style={styles.listItem}
              onPress={() => router.push('/seguridad')}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.card}>
            <List.Item
              title="Notificaciones"
              titleStyle={styles.listTitle}
              left={() => <List.Icon icon="bell-outline" color="#8B5CF6" />}
              right={() => (
                <Switch
                  value={notificaciones}
                  onValueChange={setNotificaciones}
                  color="#8B5CF6"
                  style={styles.switch}
                />
              )}
              style={styles.listItem}
            />
            <View style={styles.divider} />
            <List.Item
              title="Ayuda"
              titleStyle={styles.listTitle}
              left={() => <List.Icon icon="help-circle-outline" color="#8B5CF6" />}
              right={() => <List.Icon icon="chevron-right" color="#8B5CF6" />}
              style={styles.listItem}
              onPress={() => router.push('/ayuda')}
            />
          </View>
        </View>

        <Button
          mode="contained"
          onPress={handleCerrarSesion}
          style={styles.botonCerrar}
          labelStyle={styles.botonCerrarText}
          icon="logout"
          buttonColor="#FFFFFF"
        >
          Cerrar sesión
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
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    marginTop: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  listTitle: {
    color: '#1E293B',
    fontWeight: '600',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginHorizontal: 20,
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  botonCerrar: {
    borderRadius: 20,
    paddingVertical: 12,
    marginTop: 32,
    marginBottom: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  botonCerrarText: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 16,
  },
});