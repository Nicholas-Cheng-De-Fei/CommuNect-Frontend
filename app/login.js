import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { router } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/cover.jpg")} style={styles.image} />
      <View style={styles.form}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <TextInput
          label="Email address"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.formInput}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          style={styles.formInput}
        />
        <Button
          mode="contained"
          onPress={() => router.replace('/home')}
          style={styles.button}
        >
          Continue
        </Button>
      </View>
    </View>
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
