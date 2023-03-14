import { HindMadurai_400Regular, HindMadurai_500Medium, HindMadurai_700Bold, useFonts } from "@expo-google-fonts/hind-madurai";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView, StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { StackNavigation } from './src/Navigations/StackNavigation';
import theme from "./src/Theme";

export default function App() {
  const [isFontLoaded] = useFonts({
    HindMadurai_400Regular, HindMadurai_500Medium, HindMadurai_700Bold,
    Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold
  })

  if (!isFontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
        <StatusBar translucent barStyle={"dark-content"} backgroundColor={"transparent"} />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}