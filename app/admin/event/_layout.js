import { Slot } from "expo-router";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import AdminSidebar from "../../../components/admin/adminSidebar";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const defaultLayout = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <AdminSidebar />
        </View>
        <View style={styles.content}>
          <Slot name="main" />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    flex: 1,
    padding: 40,
  },
  content: {
    flex: 4,
    paddingLeft: 40,
  },
});

export default defaultLayout;
