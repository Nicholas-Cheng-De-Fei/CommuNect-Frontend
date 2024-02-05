import React, { useState } from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { router } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (email === "admin") {
      router.replace("/admin");
    } else {
      router.replace("/home");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../assets/cover.jpg")} style={styles.image} />
        <View style={styles.form}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.formInput}
            autoCapitalize="none"
            keyboardType="email-address"
            accessibilityLabel="Email Address Input"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={styles.formInput}
            accessibilityLabel="Password Input"
          />
          <Button
            mode="contained"
            onPress={handlePress}
            style={styles.button}
            accessibilityLabel="Login Button"
          >
            Continue
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  form: {
    position: "absolute",
    width: "80%",
    marginTop: -100, // Adjust based on the visual requirements
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 4, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formInput: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default Login;
