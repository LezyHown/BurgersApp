import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/Pages/LoadTemplates/LoadingScreen";
import store, { persistor } from "./components/Redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import './index.css'; // tailwind

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