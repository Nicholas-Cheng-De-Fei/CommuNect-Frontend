import { Slot } from 'expo-router';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

const RootLayout = () => {
    return (
        <GluestackUIProvider config={config}>
        <Slot />
        </GluestackUIProvider>
    );
    }

export default RootLayout;