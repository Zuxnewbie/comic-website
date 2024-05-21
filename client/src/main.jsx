import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import reduxStore from "../src/store/redux.jsx";
import "./global.css";
import Layout from "./layout";
import {
  BrowserRouter,
} from "react-router-dom";

const { store, persistor } = reduxStore()

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
