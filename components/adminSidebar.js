import { StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Avatar, Icon } from "react-native-paper";
import { router } from "expo-router";

const AdminSidebar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.accountButton}>
        <Avatar.Icon size={50} icon="account" style={styles.avatar} />
        <Text style={styles.name}>John Doe</Text>
      </Pressable>

      <View style={styles.divider} />

      <View style={styles.options}>
      <Pressable
          style={[styles.option, styles.optionWithIcon]}
          onPress={() => router.replace("/admin")}
        >
          <Icon source="monitor-dashboard" size={24} style={styles.optionIcon} />
          <Text style={styles.optionText}>Dashboard</Text>
        </Pressable>
        <Pressable
          style={[styles.option, styles.optionWithIcon]}
          onPress={() => router.replace("/admin")}
        >
          <Icon source="calendar" size={24} style={styles.optionIcon} />
          <Text style={styles.optionText}>Events</Text>
        </Pressable>
        <Pressable
          style={[styles.option, styles.optionWithIcon]}
          onPress={() => router.replace("/admin")}
        >
          <Icon source="account-group" size={24} style={styles.optionIcon} />
          <Text style={styles.optionText}>My Community</Text>
        </Pressable>
        <Pressable
          style={[styles.option, styles.optionWithIcon]}
          onPress={() => router.replace("/admin")}
        >
          <Icon source="trophy" size={24} style={styles.optionIcon} />
          <Text style={styles.optionText}>Achievements</Text>
        </Pressable>
        <Pressable
          style={[styles.option, styles.optionWithIcon]}
          onPress={() => router.replace("/admin")}
        >
          <Icon source="form-select" size={24} style={styles.optionIcon} />
          <Text style={styles.optionText}>Surveys</Text>
        </Pressable>
        <Pressable
          style={[styles.option, styles.optionWithIcon]}
          onPress={() => router.replace("/login")}
        >
          <Icon source="exit-to-app" size={24} style={styles.optionIcon} />
          <Text style={styles.optionText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  accountButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  avatar: {
    backgroundColor: "#6200ee", // This should match your app's primary color
  },
  name: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  options: {
    flex: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  optionWithIcon: {
    marginBottom: 15,
  },
  optionIcon: {
    marginRight: 20,
  },
  optionText: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default AdminSidebar;
