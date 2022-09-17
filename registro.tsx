/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
/* mport { NavigationContainer } from '@react-navigation/native'; */
import React, {useLayoutEffect} from 'react';
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
/* import axios from 'axios';
 */
const Registro = ({navigation}) => {
  const [inputName, setinputName] = useState('');
  const [inputMail, setinputMail] = useState('');
  const [inputContra, setinputContra] = useState('');
  const [inputConfCon, setinputConfCon] = useState('');
  const [error, seterror] = useState('');
  const validarMail = (txt: string) => {
    if (!txt.includes('@')) {
      seterror('Email invalido');
    } else {
      seterror('');
    }
    setinputMail(txt);
  };
  const validarCont = (txt: string) => {
    if (txt.length < 8) {
      seterror('La contrasena debe tener mas de 8 caracteres');
    } else {
      seterror('');
    }
    setinputContra(txt);
  };

  const validarConCont = (txt: string) => {
    if (txt !== inputContra) {
      seterror('Debe ser igual a la contrasena');
    } else {
      seterror('');
    }
    setinputConfCon(txt);
  };
  const registrado = () => {
    if (error === '') {
      Alert.alert('Bienvenido ' + inputName);
      navigation.navigate('Home');
    } else {
      Alert.alert('Complete correctamente los campos');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 50}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.bienvenida}>Registrate</Text>
          <Text style={styles.mensaje}>
            Completa el formualario de registro
          </Text>
          <Text style={styles.mailCont}>Nombre</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => setinputName(txt)}
          />
          <Text style={styles.mailCont}>Mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => validarMail(txt)}
          />
          <Text style={styles.mailCont}>Contrasena</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => validarCont(txt)}
          />
          <Text style={styles.mailCont}>Confirmar Contrasena</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => validarConCont(txt)}
          />
          {error !== '' && <Text style={styles.textError}>{error}</Text>}
        </View>

        <View style={styles.view2}>
          <Button color="#5f357f" title="Registrarme" onPress={registrado} />
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
    backgroundColor: 'red',
    color: 'white',
  },
});

export default Registro;

/* const Registro = ({navigation}) => {
  const [inputName, setinputName] = useState('');
  const [inputMail, setinputMail] = useState('');
  const [inputCont, setinputCont] = useState('');
  const [inputConCont, setinputConCont] = useState('');
  const [error, seterror] = useState('');
  const validarMail = (txt: string) => {
    if (!txt.includes('@') && !txt.includes('.')) {
      seterror('El Mail debe contener @ y .');
    } else {
      seterror('');
    }
    setinputMail(txt);
  };
  const validarCont = (txt: string) => {
    if (txt.length < 8) {
      seterror('La contrasena debe tener MAS de ocho caracteres');
    }
    setinputCont(txt);
  };
  const validarConCont = (txt: string) => {
    if (txt !== inputCont) {
      seterror('Las contrasenas deben ser iguales');
    } else {
      seterror('');
    }
    setinputConCont(txt);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 50}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.bienvenida}>Registrate</Text>
          <Text style={styles.mensaje}>
            Completa el formualario de registro
          </Text>
          <Text style={styles.mailCont}>Nombre</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => setinputName(txt)}
          />
          <Text style={styles.mailCont}>Mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => validarMail(txt)}
          />
          <Text style={styles.mailCont}>Contrasena</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => validarCont(txt)}
          />
          <Text style={styles.mailCont}>Confirmar Contrasena</Text>
          <TextInput
            style={styles.input}
            onChangeText={txt => validarConCont(txt)}
          />
          {error !== '' && <Text style={styles.textError}>{error}</Text>}
        </View>

        <View style={styles.view2}>
          <Button color="#5f357f" title="Registrarme" onPress={registrado} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}; */
