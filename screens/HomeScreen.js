//Liam Jimenez 2022-0818

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const HomeScreen = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const navigateToScreen = (screenName) => {
    setShowMenu(false);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/imagen_liam.jpg')} style={styles.image} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showMenu}
        onRequestClose={() => setShowMenu(false)}
      >
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Sumadora')}>
            <Text style={styles.menuText}>Sumadora</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Traductor')}>
            <Text style={styles.menuText}>Traductor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Tabla de Multiplicar')}>
            <Text style={styles.menuText}>Tabla de Multiplicar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Experiencia')}>
            <Text style={styles.menuText}>Experiencia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowMenu(false)}>
            <Text style={styles.menuText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.menuIcon} onPress={() => setShowMenu(true)}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>

      <Text style={styles.text}>Nombre: Liam Marcos</Text>
      <Text style={styles.text}>Apellido: Jimenez Perez</Text>
      <Text style={styles.text}>Matricula: 2022-0818</Text>
      <Text style={styles.text}>Email: liammarcos45@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
    color: '#fff', 
  },
  closeButton: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default HomeScreen;





