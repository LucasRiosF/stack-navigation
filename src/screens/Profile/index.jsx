import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Home() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate("Inicio")}
    >
      <Text>Inicio</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate("Contato")}
    >
      <Text>Contato</Text>
    </TouchableOpacity>
    </View>
  )
}

