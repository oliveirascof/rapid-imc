import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = () => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Home</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Home
