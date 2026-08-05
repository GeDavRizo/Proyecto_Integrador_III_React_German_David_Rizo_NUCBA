/*
  Archivo: src/main.jsx
  Descripción: Archivo fuente del proyecto.
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.js";
import { persistor, store } from "./redux/store";

// Punto de entrada de la aplicación: monta React, el store de Redux y la persistencia.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
