import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import MyEvents from '../components/myEvents';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.drawer}>
        <Text>Drawer</Text>
      </View>
      <View style={styles.content}>
        <Text variant='headlineLarge'>Welcome back, John Doe</Text>
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
  drawer: {
    flex: 1,
    padding: 40,
    margin:40,

  },
  content: {
    flex: 3,
    padding: 40,
    margin:40,
  },
});


export default Home;