import React, { useState } from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import { Text, TextInput, Button, Modal, Portal } from "react-native-paper";
import { router } from "expo-router";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { supabase } from "../supabase/supabase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(dayjs());
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handlePress = async () => {
    // check email is correct and password is at least 6 characters
    if (email === "" || password === "" || name === "") {
      Alert.alert("Error signing up", "Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error signing up", "Password must be at least 6 characters");
      return;
    }



    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, date_of_birth: date }
        }
      });
      if (error) throw error;
      router.replace("/emailverification");
    } catch (error) {
      Alert.alert("Error signing up", error.message);
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
          <Text style={styles.welcomeText}>Account registration</Text>
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
            style={styles.formInput}
            accessibilityLabel="Name Input"
          />
          <Button mode="outlined" onPress={showModal}><Text>Date of Birth</Text></Button>
                <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
      />
      </Modal>
      </Portal>

          
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
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
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

export default Signup;
