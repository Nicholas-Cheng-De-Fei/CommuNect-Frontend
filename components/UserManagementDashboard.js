import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";

const UserManagementDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
  ]);

  const handleSearch = () => {
    // Implement search functionality
    // You can filter users based on the search query
  };

  const handleAddUser = () => {
    // Implement functionality to add a new user
  };

  const handleDeleteUser = (userId) => {
    // Implement functionality to delete a user
    // Update the state to remove the user with the given userId
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <TextInput
          label="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
        />
        <Button icon="plus" mode="contained" onPress={handleAddUser} style={styles.addButton}>
          Add User
        </Button>
      </Card>
      <View style={styles.userList}>
        {users.map((user) => (
          <Card key={user.id} style={styles.userCard}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
            <Pressable onPress={() => handleDeleteUser(user.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </Pressable>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 20,
  },
  searchInput: {
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
  },
  userList: {
    flexDirection: "column",
  },
  userCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
  },
});

export default UserManagementDashboard;
