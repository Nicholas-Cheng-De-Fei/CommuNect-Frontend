import { StyleSheet, View, Pressable } from "react-native";
import React, { useState, useMemo } from "react";
import { Text, Card, SegmentedButtons } from "react-native-paper";
import eventsData from '../../db/volunteeringEvents.json'; // Ensure this path is correct
import { router } from "expo-router";
const MyEvents = () => {
  const [selectedValue, setSelectedValue] = useState('upcoming');

  const formatDate = (date, time) => {
    const [hours, minutes] = time.split(':');
    const formattedTime = `${((hours + 11) % 12 + 1)}:${minutes}`;
    return `${date}, ${formattedTime}`;
  };

  const filteredEvents = useMemo(() => {
    const now = new Date();
    return eventsData.filter(event => {
      const eventDate = new Date(event.sessions[0].date);
      return selectedValue === 'upcoming' ? eventDate >= now : eventDate < now;
    });
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.heading}>
          <Text variant="headlineSmall">My Events</Text>
          <SegmentedButtons
            style={{width: "30%"}}
            value={selectedValue}
            onValueChange={setSelectedValue}
            buttons={[
              { value: 'past', label: 'Past' },
              { value: 'upcoming', label: 'Upcoming' }
            ]}
          />
        </View>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <Pressable key={index}
              onPress={() => router.push(`/event/${event.id}`)} // Ensure this path is correct
            
            >
              <Card style={styles.event}>
                <View style={styles.eventContent}>
                  <View>
                    <Card.Content>
                      <Text variant="titleMedium">{event.name}</Text>
                    </Card.Content>
                    <Card.Content>
                      <Text>{formatDate(event.sessions[0].date, event.sessions[0].start_time)} - {event.sessions[0].end_time}</Text>
                    </Card.Content>
                  </View>
                  <Text>{`${event.exp} EXP`}</Text>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    marginBottom: 20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  event: {
    padding: 20,
    margin: 20,
    marginTop: 0,
  },
  eventContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholder: {
    padding: 20,
    margin: 20,
    marginTop: 0,
    alignItems: 'center',
  },
});

export default MyEvents;
