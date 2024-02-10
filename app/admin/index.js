import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import AdminEvents from "../../components/admin/adminEvents";
import AdminSidebar from "../../components/admin/adminSidebar";
const Admin = () => {
  return (
    <View style={styles.container}>
      <AdminEvents />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 40,
  }
});

export default Admin;
