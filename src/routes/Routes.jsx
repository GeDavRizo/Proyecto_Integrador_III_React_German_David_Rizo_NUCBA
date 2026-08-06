/*
  Descripción: Archivo fuente del proyecto Routes.
  Funciones:
    - Componente React AppRoutes.
    - Componente React AppRoutes.
    - Componente React Routes.
  Requiere:
    - Módulos locales del proyecto
    - React Router
*/

// Routes.jsx define las rutas principales de la aplicación.
// Cada ruta muestra una página distinta usando React Router.
// Las rutas protegidas usan ProtectedRoute para controlar acceso.
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import ProductsPage from "../pages/Products/Products";
import ProductDetailPage from "../pages/ProductDetail/ProductDetail";
import AboutPage from "../pages/About/About";
import ContactPage from "../pages/Contact/Contact";
import LoginPage from "../pages/Login/Login";
import RegisterPage from "../pages/Register/Register";
import CheckoutPage from "../pages/Checkout/Checkout";
import CheckoutSuccessPage from "../pages/CheckoutSuccess/CheckoutSuccess";
import ProfilePage from "../pages/Profile/Profile";
import MisOrdenesPage from "../pages/MisOrdenes";
import NotFoundPage from "../pages/NotFound/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/productos/:id" element={<ProductDetailPage />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route
        path="/perfil/:username"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/exito"
        element={
          <ProtectedRoute>
            <CheckoutSuccessPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mis-ordenes"
        element={
          <ProtectedRoute>
            <MisOrdenesPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
