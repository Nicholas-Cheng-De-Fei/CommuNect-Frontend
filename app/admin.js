import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import MyEvents from '../components/myEvents';
import AdminSidebar from '../components/adminSidebar';
const Admin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <AdminSidebar />
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


export default Admin;