import { StyleSheet, View, Pressable } from "react-native";
import React, {useState} from "react";
import { Text, Avatar, Button, Card, SegmentedButtons  } from "react-native-paper";

const MyEvents = () => {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <Card>
        <View style = {styles.heading}>
        <Text variant="headlineSmall">
          My events
        </Text>
        <SegmentedButtons
        style={{width: "20%"}}
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'past',
            label: 'Past',
          },
          {
            value: 'upcoming',
            label: 'Upcoming',
          },
        ]}
      />

        </View>

        <Pressable>
          <Card style={styles.event}>
            <View style={styles.eventContent}>
              <View>
                <Card.Content>
                  <Text variant="titleMedium">Art with a Heart</Text>
                </Card.Content>
                <Card.Content>
                  <Text>20th Mar, 9am - 12pm</Text>
                </Card.Content>
              </View>
              <Text>100 EXP</Text>
            </View>
          </Card>
        </Pressable>
        <Pressable>
          <Card style={styles.event}>
            <View style={styles.eventContent}>
              <View>
                <Card.Content>
                  <Text variant="titleMedium">Art with a Heart</Text>
                </Card.Content>
                <Card.Content>
                  <Text>20th Mar, 9am - 12pm</Text>
                </Card.Content>
              </View>
              <Text>100 EXP</Text>
            </View>
          </Card>
        </Pressable>
        <Pressable>
          <Card style={styles.event}>
            <View style={styles.eventContent}>
              <View>
                <Card.Content>
                  <Text variant="titleMedium">Art with a Heart</Text>
                </Card.Content>
                <Card.Content>
                  <Text>20th Mar, 9am - 12pm</Text>
                </Card.Content>
              </View>
              <Text>100 EXP</Text>
            </View>
          </Card>
        </Pressable>
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
    flex:1,
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
});

export default MyEvents;
