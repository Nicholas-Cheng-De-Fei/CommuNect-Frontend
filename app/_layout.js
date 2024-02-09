import { Slot } from 'expo-router';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

const defaultLayout = () => {
    return (
        <PaperProvider theme={theme}>
            <Slot name="main" />
        </PaperProvider>
    )
}

export default defaultLayout;