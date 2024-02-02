import { StyleSheet } from "react-native";
import {
  View,
  Text,
  Image,
  FormControl,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { router } from "expo-router";

const handleLogin = () => {
  console.log("Login successful");
  router.replace("/home");
}

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "../assets/cover.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome back</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <FormControl
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <Input>
                <InputField
                  type="email"
                  defaultValue=""
                  placeholder="Email address"
                />
              </Input>
            </FormControl>
          </View>
          <View style={styles.inputWrapper}>
            <FormControl
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <Input>
                <InputField
                  type="password"
                  defaultValue=""
                  placeholder="Password"
                />
              </Input>
            </FormControl>
          </View>

          <View style={styles.inputWrapper}>
            <Button
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              onPress={() => handleLogin()}
            >
              <ButtonText>Continue </ButtonText>
            </Button>
          </View>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          Forgot your password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    width: "50%", // Take up half of the space
  },
  image: {
    width: "100%", // Fill the container width
    height: "100%", // Fill the container height
    resizeMode: "cover", // Cover the container without losing aspect ratio
  },
  textContainer: {
    flex: 1, // Take up the remaining space
    justifyContent: "center", // Center content vertically in the middle of the screen
    alignItems: "flex-start", // Align items to the left
    padding: 100, // Add padding to the textContainer
  },
  formContainer: {
    width: "100%", // Use 100% width to utilize the full width of the textContainer
    marginTop: 20, // Add top margin for spacing
    marginBottom: 20, // Add bottom margin for spacing
  },
  inputWrapper: {
    marginBottom: 20, // Increase spacing between input fields for better accessibility
    width: "50%", // Allow input wrapper to fill the form container
  },
});

export default Login;
