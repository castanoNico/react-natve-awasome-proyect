import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useState} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

const InicioSesion = ({navigation}) => {
  const [userAcces, setuserAcces] = useState<string>();
  const [pswrAcces, setpswrAcces] = useState<string>();
  const [error, seterror] = useState('');
  const acceder = () => {
    if (userAcces === 'Nico' && pswrAcces === '123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Usuario o password incorrecto');
    }
  };
  /* const login = () => {
    axios
      .get(
        'https://www.smartindoor.ar/App/script/v2/login.php?user=AdminArtmak&psw=tester',
      )
      .then(response => {
        if (response.data.Q_Est === 'OK') {
          console.log(response.data.ProfileData.nacionalidad);
          seterror('');
        } else {
          seterror(response.data.Q_Msg);
        }
      });
  }; */

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 30}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.bienvenida}>Inciar Sesion </Text>
          <Text style={styles.mensaje}>
            Por favor, inicia sesion para continuar
          </Text>
          <Text style={styles.mailCont}>Usuario</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => setuserAcces(txt)}
          />
          <Text style={styles.mailCont}>Contrasena</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => setpswrAcces(txt)}
          />
          {error !== '' && <Text style={styles.textError}>{error}</Text>}
        </View>

        <View style={styles.view2}>
          <Button color="#5f357f" title="Inciar Sesion" onPress={acceder} />
        </View>

        <View style={styles.view3}>
          <Text style={styles.textPregunta}> No tienes una cuenta? </Text>
          <Button
            color="#5f357f"
            title="Registrate ahora"
            onPress={() => navigation.navigate('Registro')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bienvenida: {
    fontSize: 36,
    color: '#7aff77',
    marginLeft: 35,
  },
  mensaje: {
    fontSize: 21,
    color: '#aaffaa',
    paddingTop: 15,
    paddingBottom: 25,
  },
  mailCont: {
    paddingTop: 15,
    paddingBottom: 3,
    paddingLeft: 15,
  },
  input: {
    borderColor: 'white',
    borderWidth: 0.3,
    padding: 6,
    borderRadius: 25,
    paddingLeft: 15,
  },
  textPregunta: {
    fontSize: 16,
    paddingLeft: 65,
    paddingBottom: 25,
  },
  view: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  view1: {
    paddingBottom: 30,
    paddingTop: 85,
  },
  view2: {
    paddingBottom: 80,
    marginLeft: 150,
  },
  view3: {
    paddingTop: 15,
  },
  textError: {
    color: 'white',
    backgroundColor: 'red',
  },
});

export default InicioSesion;
