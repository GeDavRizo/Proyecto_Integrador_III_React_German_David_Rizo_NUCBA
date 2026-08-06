/*
  Descripción: Página donde el usuario puede ver sus órdenes realizadas.
  Funciones:
    - Componente React MisOrdenes.
    - Componente React MisOrdenes.
  Requiere:
    - Módulos locales del proyecto
    - React
    - React Redux
    - React Router
*/

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import CardsMisOrdenes from "../../components/MisOrdenes/CardsMisOrdenes";

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from "./MisOrdenesStyles";
import { clearError, fetchOrdersFail } from "../../redux/orders/ordersSlice";

export default function MisOrdenes() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchOrdersFail("Debes iniciar sesión para ver tus órdenes."));
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate("/productos")}>
            Volver a comprar
          </Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
  );
}
