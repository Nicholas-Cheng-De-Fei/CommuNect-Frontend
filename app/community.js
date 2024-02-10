import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import UserManagementDashboard from '../components/CommunityManagementDashboard';
import Sidebar from '../components/admin/adminSidebar';
const CommunityManagement = () => {
    return (
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Sidebar />
        </View>
        <View style={styles.content}>
          <Text variant='headlineLarge'>Welcome back, John Doe</Text>
          <UserManagementDashboard />
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
  
  
  export default CommunityManagement;