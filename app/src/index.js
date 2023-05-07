import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoadingScreen from "./components/Pages/LoadTemplates/LoadingScreen";
import './index.css'; // tailwind

import store, { persistor } from "./components/Redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Suspense fallback={<LoadingScreen/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
    </PersistGate>
  </Provider>
);