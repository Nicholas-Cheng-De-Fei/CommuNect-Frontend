import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '@gluestack-ui/themed';
import { Link, router } from 'expo-router';

const Index = () => {
    useEffect(() => {
        console.log("Redirecting to Login");
        router.replace("/login");
    }, []); // The empty dependency array ensures this effect runs only once after the initial render

    return (
        <View style={styles.container}>
            {/* Optionally, you can render loading text or any placeholder content here */}
            <Text>Redirecting...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Index;
