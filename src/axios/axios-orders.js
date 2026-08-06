/*
  Descripción: Archivo fuente del proyecto. Contiene funciones para interactuar con la API de órdenes usando Axios.
  Funciones:
    - getOrders: Obtiene todas las órdenes del usuario.
    - createOrder: Crea una nueva orden en la base de datos. 
    Maneja errores y actualiza el estado de Redux según corresponda.
    Requiere:
    - BASE_URL: URL base de la API, definida en utils.js.
    - Redux
    - Axios para realizar las solicitudes HTTP.
*/

import axios from "axios";
import {
  createOrderFail,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
} from "../redux/orders/ordersSlice";
import { BASE_URL } from "../utils";

export const getOrders = async (dispatch) => {
  dispatch(fetchOrdersStart());

  try {
    const orders = await axios.get(`${BASE_URL}/orders`);
    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }
  } catch (err) {
    console.error(err);
    dispatch(
      fetchOrdersFail(
        "Algo salío mal. No hay ordenes sin usuario. Intenta nuevamente más tarde.",
      ),
    );
  }
};

export const createOrder = async (order, dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order);
    if (response) {
      getOrders(dispatch);
    }
  } catch (err) {
    console.error(err);
    dispatch(createOrderFail());
  }
};
