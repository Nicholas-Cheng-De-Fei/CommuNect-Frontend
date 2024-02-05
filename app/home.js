import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import MyEvents from '../components/myEvents';
import Sidebar from '../components/sidebar';
import { supabase } from '../supabase/supabase';
const Home = () => {

  const [name, setName] = useState('John Doe');

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Sidebar />
      </View>
      <View style={styles.content}>
        <Text variant='headlineLarge'>Welcome back, {name}</Text>
        <MyEvents />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    padding: 40,
    margin:40,

  },
  content: {
    flex: 4,
    padding: 40,
    margin:40,
  },
});


export default Home;