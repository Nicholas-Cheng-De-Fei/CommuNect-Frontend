import { StyleSheet } from "react-native";
import { Text, View, Card, Heading } from "@gluestack-ui/themed";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Drawer</Text>
      </View>
      <View>
        <Heading>Home</Heading>
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
          <Heading mb="$1" size="md">
            Your upcoming events
          </Heading>
          <Card borderRadius="$lg" maxWidth={360} m="$3">
            <View>
              <Heading size="md" fontFamily="$heading" >
                Art with a Heart
              </Heading>
              <Text
                fontSize="$sm"
                fontStyle="normal"
                fontFamily="$heading"
                fontWeight="$normal"
                lineHeight="$sm"
                sx={{
                  color: "$textLight700",
                  _dark: {
                    color: "$textDark200",
                  },
                }}
              >
                29 Mar, 09:00 - 12:00{" "}
              </Text>
            </View>
          </Card>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: "10%",
  },
});

export default Home;
