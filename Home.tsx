import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  /*   TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform, */
} from 'react-native';
import axios from 'axios';
const {width, height} = Dimensions.get('window');

const Home = () => {
  
  const elementStarWars = () => {
    axios.get('https://swapi.dev/api/people/').then(response => {
      response.data.results.map((e: any) => console.log(e.name));
    });
  };

  /*   const elementStarWars = () => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(response => console.log(response.data.results.prototype.map()));
  }; */

  useEffect(() => {
    elementStarWars();
  }, []);

  return (
    <View style={styleHome.container}>
      <View>
        <Text style={styleHome.title}>Avirok</Text>
      </View>
      <View style={styleHome.flexContainer}>
        <TouchableOpacity style={styleHome.flexItem}>
          <Text>Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHome.flexItem}>
          <Text>Finanzas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHome.flexItem}>
          <Text>Proveedores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleHome.flexItem}>
          <Text>Opciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#556655',
    alignContent: 'center',
    justifyContent: 'center',
  },
  flexItem: {
    width: width * 0.35,
    height: height * 0.25,
    borderWidth: 0.3,
    borderColor: 'black',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5f357f',
  },
});

export default Home;
