import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Card, TextInput, Button, Text } from "react-native-paper";
import volunteersData from "../../db/volunteers.json"; // Ensure this path is correct
const UserManagementDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load initial user data from volunteers.json or set default users
    // Replace the next line with actual loading logic if needed
    setUsers(volunteersData || [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Alice Johnson", email: "alice@example.com" },
      { id: 4, name: "Bob Brown", email: "bob@example.com" },
    ]);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      // Reset to initial users if search query is empty
      setUsers(volunteersData);
    } else {
      const filteredUsers = users.filter(
        user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUsers(filteredUsers);
    }
  };

  const handleAddUser = () => {
    const newUser = {
      id: Math.max(...users.map(user => user.id)) + 1, // Simple ID assignment, consider a better ID generation strategy
      name: "New User", // Placeholder, implement mechanism to input name
      email: "new@example.com" // Placeholder, implement mechanism to input email
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading} variant="headlineSmall">Volunteers</Text>

      <View style={styles.content}>
        <Card style={styles.card}>
          <TextInput
            label="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            style={styles.searchInput}
          />
          <Button
            icon="plus"
            mode="contained"
            onPress={handleAddUser}
            style={styles.addButton}
          >
            Add User
          </Button>
        </Card>
        <ScrollView style={styles.userList}>
          {users.map((user) => (
            <Card key={user.id} style={styles.userCard}>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
              </View>
              <Pressable onPress={() => handleDeleteUser(user.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </Pressable>
            </Card>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    marginTop: 20,
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
