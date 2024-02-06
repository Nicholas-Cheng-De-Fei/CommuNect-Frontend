import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import UserManagementDashboard from '../../components/UserManagementDashboard';
const UserManagement = () => {
  return (
    <View style={styles.container}>
        <Text>Users</Text>
        <UserManagementDashboard />
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


export default UserManagement;