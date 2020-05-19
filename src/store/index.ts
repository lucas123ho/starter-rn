import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import reducers from "./ducks";
import { RouteState } from "./ducks/route/types";

export interface ApplicationState {
  route: RouteState;
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persitedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persitedReducer);
const persistor = persistStore(store);

export { store, persistor };
