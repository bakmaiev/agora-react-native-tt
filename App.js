import { Provider } from "react-redux";
import { store } from "./services/store";
import ImgListScreen from "./screens/ImgListScreen/ImgListScreen";
import ImgScreen from "./screens/ImgScreen/ImgScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="List"
            component={ImgListScreen}
            options={{
              title: "Unsplash API",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Image"
            component={ImgScreen}
            options={{
              title: "Сurrent image",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
