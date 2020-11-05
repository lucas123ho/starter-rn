import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import Routes from "@root/routes";
import { store, persistor } from "./src/store";
import theme from './src/styles/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
