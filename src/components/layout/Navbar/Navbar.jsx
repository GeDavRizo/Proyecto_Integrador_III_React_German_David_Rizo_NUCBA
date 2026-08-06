/*
  Descripción: Archivo fuente del proyecto Navbar.
  Funciones:
    - Componente React Navbar.
  Requiere:
    - Módulos locales del proyecto
    - React
    - React Redux
    - React Router
    - react-icons
*/

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../context/AuthContext";
import {
  selectCartCount,
  toggleHiddenCart,
} from "../../../redux/cart/cartSlice";
import { NavbarContainer } from "./NavbarStyles.js";

// Navbar principal con enlaces, carrito, menú mobile y estado de sesión.
const trackedRoutes = ["/nosotros", "/productos", "/", "/contacto"];

function Navbar() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visitedRoutes, setVisitedRoutes] = useState(() => {
    const saved = localStorage.getItem("wtech-visited-routes");
    return saved ? JSON.parse(saved) : [];
  });
  const profilePath = user
    ? `/perfil/${encodeURIComponent(user.username)}`
    : "/login";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname;
    if (trackedRoutes.includes(path) && !visitedRoutes.includes(path)) {
      const nextRoutes = [...visitedRoutes, path];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisitedRoutes(nextRoutes);
      localStorage.setItem("wtech-visited-routes", JSON.stringify(nextRoutes));
    }
  }, [location.pathname, visitedRoutes]);

  const rememberVisit = (path) => {
    if (!visitedRoutes.includes(path)) {
      const nextRoutes = [...visitedRoutes, path];
      setVisitedRoutes(nextRoutes);
      localStorage.setItem("wtech-visited-routes", JSON.stringify(nextRoutes));
    }
  };

  const buildLinkClass = (path, isActive, baseClass) => {
    const classes = [baseClass];
    if (isActive) classes.push("active");
    if (visitedRoutes.includes(path)) classes.push("visited");
    return classes.join(" ");
  };

  return (
    <NavbarContainer id="navbar">
      <nav className="nav-inner">
        <Link to="/" className="logo" id="logo-link">
          <div className="logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <polygon
                points="18,2 34,10 34,26 18,34 2,26 2,10"
                fill="none"
                stroke="#7B6FBF"
                strokeWidth="2"
              />
              <polygon
                points="18,8 28,13 28,23 18,28 8,23 8,13"
                fill="#7B6FBF"
                opacity="0.2"
              />
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#7B6FBF"
                fontSize="10"
                fontFamily="Orbitron"
                fontWeight="900"
              >
                W
              </text>
            </svg>
          </div>
          <span className="logo-text">W-TECH</span>
        </Link>

        <ul className="nav-links" id="nav-links-desktop">
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                buildLinkClass("/nosotros", isActive, "nav-link")
              }
              onClick={() => rememberVisit("/nosotros")}
            >
              <BiHome
                size={14}
                style={{
                  marginRight: "6px",
                  verticalAlign: "-2px",
                  display: "inline",
                }}
              />
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className={({ isActive }) =>
                buildLinkClass("/productos", isActive, "nav-link")
              }
              onClick={() => rememberVisit("/productos")}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              end={true}
              className={({ isActive }) =>
                buildLinkClass("/", isActive, "nav-link")
              }
              onClick={() => rememberVisit("/")}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                buildLinkClass("/contacto", isActive, "nav-link")
              }
              onClick={() => rememberVisit("/contacto")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="cart-btn"
            aria-label="Abrir carrito"
            onClick={() => dispatch(toggleHiddenCart())}
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="#7B6FBF"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          {user ? (
            <div className="user-menu">
              <span className="user-welcome">¡Hola, {user.username}!</span>
              <Link to={profilePath} className="auth-btn">
                Perfil
              </Link>
              <button onClick={logout} className="logout-btn">
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="auth-btn">
                Iniciar sesión
              </Link>
              <Link to="/registro" className="auth-btn primary">
                Registrarse
              </Link>
            </div>
          )}

          <button
            id="hamburger"
            className={isMenuOpen ? "open" : ""}
            aria-label="Menú"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu — se muestra/oculta según isMenuOpen */}
      <div className={`mobile-menu ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                buildLinkClass(
                  "/nosotros",
                  isActive,
                  "nav-link mobile-nav-link",
                )
              }
              onClick={() => {
                rememberVisit("/nosotros");
                closeMenu();
              }}
            >
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className={({ isActive }) =>
                buildLinkClass(
                  "/productos",
                  isActive,
                  "nav-link mobile-nav-link",
                )
              }
              onClick={() => {
                rememberVisit("/productos");
                closeMenu();
              }}
              end={false}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                buildLinkClass("/", isActive, "nav-link mobile-nav-link")
              }
              onClick={() => {
                rememberVisit("/");
                closeMenu();
              }}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                buildLinkClass(
                  "/contacto",
                  isActive,
                  "nav-link mobile-nav-link",
                )
              }
              onClick={() => {
                rememberVisit("/contacto");
                closeMenu();
              }}
            >
              Contacto
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to={profilePath}
                className={({ isActive }) =>
                  buildLinkClass(
                    "/perfil",
                    isActive,
                    "nav-link mobile-nav-link",
                  )
                }
                onClick={() => {
                  closeMenu();
                }}
              >
                Perfil
              </NavLink>
            </li>
          )}
        </ul>

        <div className="mobile-auth-links">
          {user ? (
            <div className="mobile-user-menu">
              <span className="user-welcome">¡Hola, {user.username}!</span>
              <Link to={profilePath} className="auth-btn" onClick={closeMenu}>
                Perfil
              </Link>
              <button
                className="logout-btn"
                onClick={() => {
                  logout();
                  closeMenu();
                }}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="auth-btn" onClick={closeMenu}>
                Iniciar sesión
              </Link>
              <Link
                to="/registro"
                className="auth-btn primary"
                onClick={closeMenu}
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
