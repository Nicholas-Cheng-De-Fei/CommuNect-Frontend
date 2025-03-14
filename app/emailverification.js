import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Button } from "react-native-paper";
import { router } from "expo-router";
const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect to the welcome screen after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.replace("/login");

    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please check your email to verify your account.
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          mode="contained"
          onPress={() => router.replace("/login")}
          style={styles.button}
        >
          Go to Welcome
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000",
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    width: "100%",
    maxWidth: 400,
  },
});


export default EmailVerification;
