import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import CommunityManagementDashboard from '../components/user/CommunityManagementDashboard';
import Sidebar from '../components/user/sidebar';
const CommunityManagement = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.sidebar}>
          <Sidebar />
        </View>
        <View style={styles.content}>
          <Text variant='headlineLarge'>Communities</Text>
          <CommunityManagementDashboard />
        </View>
      </ScrollView>
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
  
    },
    content: {
      flex: 4,
      padding: 40,
    },
  });
  
  
  export default CommunityManagement;