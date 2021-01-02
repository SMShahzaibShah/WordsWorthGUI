import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "./src/Authentication";
import LoadAssets from "./src/components/LoadAssets";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="onboarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
