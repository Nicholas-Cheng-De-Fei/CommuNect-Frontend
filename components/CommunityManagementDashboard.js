import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";

const CommunityManagementDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [communities, setCommunities] = useState([
    { id: 1, name: "Environmental Activists", description: "Community dedicated to environmental conservation" },
    { id: 2, name: "Youth Mentorship", description: "Community focused on mentoring youth for personal growth" },
    { id: 3, name: "Food Drive Volunteers", description: "Community organizing food drives for the homeless" },
    { id: 4, name: "Healthcare Volunteers", description: "Community offering healthcare services to underserved populations" },
  ]);

  const handleSearch = () => {
    // Implement search functionality
    // You can filter communities based on the search query
  };

  const handleAddCommunity = () => {
    // Implement functionality to add a new community
  };

  const handleDeleteCommunity = (communityId) => {
    // Implement functionality to delete a community
    // Update the state to remove the community with the given communityId
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
        <Button icon="plus" mode="contained" onPress={handleAddCommunity} style={styles.addButton}>
          Add Community
        </Button>
      </Card>
      <View style={styles.communityList}>
        {communities.map((community) => (
          <Card key={community.id} style={styles.communityCard}>
            <View style={styles.communityInfo}>
              <Text style={styles.communityName}>{community.name}</Text>
              <Text style={styles.communityDescription}>{community.description}</Text>
            </View>
            <Pressable onPress={() => handleDeleteCommunity(community.id)}>
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
    backgroundColor: '#f4f4f4',
    flexGrow: 1,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  searchInput: {
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  communityList: {
    flexDirection: "column",
  },
  communityCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  communityInfo: {
    flex: 1,
  },
  communityName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  communityDescription: {
    fontSize: 16,
    color: '#666',
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
  },
});

export default CommunityManagementDashboard;
