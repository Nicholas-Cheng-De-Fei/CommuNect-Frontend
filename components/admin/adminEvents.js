import { StyleSheet, View, Pressable, FlatList } from "react-native";
import React, { useState, useMemo } from "react";
import { Text, Card, SegmentedButtons, Icon } from "react-native-paper";
import eventsData from "../../db/volunteeringEvents.json"; // Ensure this path is correct
import { router } from "expo-router";

const AdminEvents = () => {
  const [selectedValue, setSelectedValue] = useState("upcoming");

  const formatDate = (date, time) => {
    const [hours, minutes] = time.split(":");
    const isPM = hours >= 12;
    const formattedTime = `${((hours % 12) || 12)}:${minutes} ${isPM ? "PM" : "AM"}`;
    return `${date}, ${formattedTime}`;
  };

  const filteredEvents = useMemo(() => {
    const now = new Date();
    return eventsData.filter(event => {
      const eventDate = new Date(event.sessions[0].date);
      return selectedValue === "upcoming" ? eventDate >= now : eventDate < now;
    });
  }, [selectedValue]);

  const renderItem = ({ item, index }) => (
    <Pressable key={index} onPress={() => router.push(`/admin/event/${item.id}`)}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.eventContent}>
            <Text variant="titleMedium">{item.name}</Text>
            <Icon source="chevron-right" size={20} />
          </View>
        </Card.Content>
      </Card>
    </Pressable>
  );


  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text variant="headlineSmall">My Projects</Text>
        <SegmentedButtons
          style={{ width: "30%" }}
          value={selectedValue}
          onValueChange={setSelectedValue}
          buttons={[
            { value: "past", label: "Past" },
            { value: "upcoming", label: "Upcoming" },
          ]}
        />
      </View>
      <View style={styles.events}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <Pressable
              key={index}
              onPress={() => router.push(`/admin/event/${event.id}`)} // Ensure this path is correct
            >
              <Card style={styles.event}>
                <View style={styles.eventContent}>
                  <View>
                    <Card.Content>
                      <View style={{ flexDirection: "row" }}>
                        <Text variant="titleMedium">{event.name}</Text>
                        <Icon source="chevron-right" size={20} />
                      </View>
                      <Text variant="bodyMedium">{event.sessions[0].date} - {event.sessions[event.sessions.length-1].date}</Text>
                    </Card.Content>
                  </View>
                </View>
              </Card>
            </Pressable>
          ))
        ) : (
          // Placeholder or message when no events match the criteria
          <View style={styles.placeholder}>
            <Text>No {selectedValue} events found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexWrap: "wrap",
  },
  card: {
    marginBottom: 20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  events: {
    padding: 20,
    margin: 20,
    marginTop: 0,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
  event: {
    flex: 1,
    padding: 20,
    margin: 20,
    marginTop: 0,
  },
  eventContent: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholder: {
    padding: 20,
    marginTop: 0,
    alignItems: "center",
  },
});

export default AdminEvents;
