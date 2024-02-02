import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
    return (
        <View style={styles.container}>
                  <Link href="/home">Home</Link>

        <Text>Index</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Index;