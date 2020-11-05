import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Home from "@pages/Home";
import Terms from "@pages/Terms";
import Login from "@pages/Login";
import { ApplicationState } from "./store";

const Stack = createStackNavigator();

export default function Routes() {
  const { termsAccepted, loged } = useSelector(
    (state: ApplicationState) => state?.route
  );

  if (!termsAccepted) {
    return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
        initialRouteName="Terms"
      >
        <Stack.Screen name="Terms" component={Terms} />
      </Stack.Navigator>
    );
  } else if (!loged) {
    return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
