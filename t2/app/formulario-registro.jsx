import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Registro() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = () => {
    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      Alert.alert('Error de registro', 'Todos los campos son obligatorios.');
      return;
    }
    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error de registro', 'Las contraseñas no coinciden.');
      return;
    }
    Alert.alert('Registro exitoso', `Bienvenido al mundo de las motos, ${nombre}. Ahora puedes iniciar sesión.`);
    console.log('Usuario registrado:', { nombre, email });
    router.replace('/inicio-sesion');
  };

  return (
    <LinearGradient
      colors={['#8B5CF6', '#A855F7', '#C084FC']}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="account-plus" size={48} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Crear una cuenta</Text>
          <Text style={styles.subtitle}>
            Únete a la comunidad de amantes de las motos y descubre un mundo de experiencias increíbles
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Nombre completo"
              value={nombre}
              onChangeText={setNombre}
              mode="outlined"
              style={styles.input}
              left={<TextInput.Icon icon="account" />}
              theme={{
                colors: {
                  primary: '#8B5CF6',
                  outline: '#E5E7EB',
                  background: '#FFFFFF'
                }
              }}
            />

            <TextInput
              label="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              left={<TextInput.Icon icon="email" />}
              theme={{
                colors: {
                  primary: '#8B5CF6',
                  outline: '#E5E7EB',
                  background: '#FFFFFF'
                }
              }}
            />

            <TextInput
              label="Contraseña"
              value={contrasena}
              onChangeText={setContrasena}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              left={<TextInput.Icon icon="lock" />}
              theme={{
                colors: {
                  primary: '#8B5CF6',
                  outline: '#E5E7EB',
                  background: '#FFFFFF'
                }
              }}
            />

            <TextInput
              label="Confirmar contraseña"
              value={confirmarContrasena}
              onChangeText={setConfirmarContrasena}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              left={<TextInput.Icon icon="lock-check" />}
              theme={{
                colors: {
                  primary: '#8B5CF6',
                  outline: '#E5E7EB',
                  background: '#FFFFFF'
                }
              }}
            />
          </View>

          <View style={styles.termsContainer}>
            <MaterialCommunityIcons name="shield-check" size={16} color="#10B981" />
            <Text style={styles.termsText}>
              Al registrarte, aceptas nuestros términos de servicio y política de privacidad
            </Text>
          </View>

          <Button
            mode="contained"
            onPress={handleRegistro}
            style={styles.botonRegistro}
            labelStyle={styles.botonRegistroTexto}
            buttonColor="#FFFFFF"
            icon="rocket-launch"
          >
            Crear cuenta
          </Button>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => router.replace('/inicio-sesion')}>
              <Text style={styles.loginLink}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsTitle}>¿Qué obtienes al registrarte?</Text>
          <View style={styles.benefits}>
            <View style={styles.benefit}>
              <MaterialCommunityIcons name="star" size={20} color="#F59E0B" />
              <Text style={styles.benefitText}>Acceso a contenido exclusivo</Text>
            </View>
            <View style={styles.benefit}>
              <MaterialCommunityIcons name="account-group" size={20} color="#10B981" />
              <Text style={styles.benefitText}>Conecta con otros motociclistas</Text>
            </View>
            <View style={styles.benefit}>
              <MaterialCommunityIcons name="bell" size={20} color="#3B82F6" />
              <Text style={styles.benefitText}>Notificaciones personalizadas</Text>
            </View>
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
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  termsText: {
    fontSize: 12,
    color: '#64748B',
    marginLeft: 8,
    lineHeight: 16,
    flex: 1,
  },
  botonRegistro: {
    borderRadius: 16,
    paddingVertical: 8,
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  botonRegistroTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#64748B',
    fontSize: 16,
  },
  loginLink: {
    color: '#8B5CF6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  benefitsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  benefits: {
    gap: 12,
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  benefitText: {
    fontSize: 14,
    color: '#E5E7EB',
    marginLeft: 12,
    fontWeight: '500',
  },
});