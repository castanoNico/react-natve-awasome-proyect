import React from 'react';
import Home from './Home';
import Registro from './registro';
import inicioSesion from './InicioSesion';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* import {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios'; */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={inicioSesion} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

/* const App = () => {
  const [respuesta, setrespuesta] = useState(); */
/*   const [numero, setnumero] = useState((numero) => {
    numero + 1;
  });
       const varSuma = () => {
    let numero = 0;
    numero ++;
    traerData()
  };  */

/* const traerData = () => {
    let numero = 0
    numero++;
    axios.get('http://api.adviceslip.com/advice/' + 5).then(response => {
      setrespuesta(response.data.slip.advice);
    });
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{respuesta}</Text>
      <Button color="#5f357f" title="Traer" onPress={traerData} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    backgroundColor: '#52c74b',
  },
});

export default App;
 */
