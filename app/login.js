import React, { useState } from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { router } from "expo-router";
import { supabase } from "../supabase/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const handlePress = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error logging in", "Please fill in all fields");
      return;
    }
  
    if (password.length < 6) {
      Alert.alert("Error logging in", "Password must be at least 6 characters");
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error logging in", error.message);
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
          <View style={styles.buttons}>
          <Button
            mode="contained"
            onPress={() => router.replace("/signup")}
            style={styles.button}
            accessibilityLabel="Login Button"
          >
            Sign Up
          </Button>
          <Button
            mode="contained"
            onPress={handlePress}
            style={styles.button}
            accessibilityLabel="Login Button"
          >
            Continue
          </Button>

          </View>

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
    flex: 1,
    marginTop: 10,
    margin: 5,
    backgroundColor: "#6200ee", // This should match your app's primary color
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",

    },
});

export default Login;
