import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER 
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./User/userSlice";
import CartSlice from "./Cart/CartSlice";
import modalsSlice from "./Modals/modalsSlice";

const rootReducer = combineReducers({
    user: userSlice,
    cart: CartSlice,
    modals: modalsSlice
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ['modals']
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);
export default store;