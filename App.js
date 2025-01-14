import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import LocalizacaoScreen from "./screens/Localizacao";
import MeteoroScreen from "./screens/Meteoro";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Localização" component={LocalizacaoScreen} />
        <Stack.Screen name="Meteoro" component={MeteoroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
