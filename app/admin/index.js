import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import AdminEvents from '../../components/admin/adminEvents';
import AdminSidebar from '../../components/admin/adminSidebar';
const Admin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <AdminSidebar />
      </View>
      <View style={styles.content}>
        <AdminEvents/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sidebar: {
    flex: 1,
    padding: 40,

  },
  content: {
    flex: 4,
    padding: 40,
  },
});


export default Admin;