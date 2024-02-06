import { useLocalSearchParams } from "expo-router";

import React from "react"; // Import React
import { View, ScrollView, StyleSheet, Image } from "react-native"; // Import components from react-native
import { Text, DataTable, Icon, Button } from "react-native-paper"; // Import Text from react-native-paper
import eventsData from "../../../db/volunteeringEvents.json"; // Ensure this path is correct

const Event = () => {
  const { slug } = useLocalSearchParams();
  const event = eventsData.find((event) => event.id.toString() === slug);

  if (!event) {   

    return (
      <View style={styles.container}>

        <Text>Event not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display Cover Image */}
      <Image
        source={{ uri: event.image }}
        style={styles.coverImage}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.detail}>
            Date: {event.sessions[0].date} -{" "}
            {event.sessions[event.sessions.length - 1].date}
          </Text>
          <Text style={styles.detail}>Location: {event.location}</Text>
          <Text style={styles.description}>{event.description}</Text>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Session</DataTable.Title>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Time</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
            </DataTable.Header>

            {event.sessions.map((session, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{index + 1}</DataTable.Cell>
                <DataTable.Cell>{session.date}</DataTable.Cell>
                <DataTable.Cell>
                  {session.start_time} - {session.end_time}
                </DataTable.Cell>
                <DataTable.Cell>
                  {session.status === "attended" ? (
                    <Icon source="check" />
                  ) : (
                    <Icon source="progress-check" />
                  )}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
        <View style={styles.buttons}>
          <Button mode="contained" style={{ marginTop: 20, backgroundColor: "#6200ee" }}
          onPress={() => alert("Downloaded")}
          >
            Download Progress Report
          </Button>
          <Button mode="contained" style={{ marginTop: 20, backgroundColor: "#6200ee"}}>
            Withdraw
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    flex: 1,
    width: "100%", // Cover the width of the screen
    height: "30%", // Set a fixed height
    borderRadius: 8, // Optional: if you want rounded corners
    marginBottom: 20, // Space between image and text
  },
  content: {
    flex: 4,
    padding: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detail: {
    fontSize: 18,
    marginVertical: 4,
  },
    leftContent: {
        flex: 3,
    },
  buttons: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default Event;
