import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import UserManagementDashboard from '../../components/admin/UserManagementDashboard';
const UserManagement = () => {
  return (
    <View style={styles.container}>
        <UserManagementDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 40,
  }
});


export default UserManagement;