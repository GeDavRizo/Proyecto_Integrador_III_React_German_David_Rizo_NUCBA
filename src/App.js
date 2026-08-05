// App.js es el punto de entrada de la aplicación.
// Aquí se cargan los estilos globales, el router y el contexto de autenticación.
import * as React from "react";
import "./styles/styles.css";
import "./styles/mediaqueries.css";
import "./styles/animaciones.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar/Navbar";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer/Footer";
import CartSidebar from "./components/cart/CartSidebar/CartSidebar";
// Route targets moved to src/routes/Routes.jsx
import WhatsAppFloat from "./components/layout/WhatsAppFloat/WhatsAppFloat";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes/Routes";

function AppContent() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar, null),
    React.createElement(CartSidebar, null),
    React.createElement(Layout, null, React.createElement(AppRoutes, null)),
    React.createElement(Footer, null),
    React.createElement(WhatsAppFloat, null),
  );
}

function App() {
  return React.createElement(
    AuthProvider,
    null,
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(GlobalStyles, null),
      React.createElement(AppContent, null),
    ),
  );
}

export default App;
