/*
  Archivo: src/components/MisOrdenes/CardsMisOrdenes.jsx
  Descripción: Muestra la lista de órdenes del usuario.
*/

import { useSelector } from "react-redux";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 24px;
`;

const OrderCard = styled.article`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
`;

const OrderHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const OrderTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  color: #0f172a;
`;

const OrderText = styled.p`
  margin: 4px 0;
  color: #475569;
`;

const EmptyState = styled.div`
  padding: 24px;
  background: #f8fafc;
  border: 1px dashed #94a3b8;
  border-radius: 16px;
  color: #334155;
`;

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function CardsMisOrdenes() {
  const { orders, loading, error } = useSelector((state) => state.orders);

  if (loading) {
    return <p>Cargando órdenes...</p>;
  }

  if (error) {
    return <EmptyState>{error}</EmptyState>;
  }

  if (!orders || orders.length === 0) {
    return <EmptyState>No hay órdenes registradas.</EmptyState>;
  }

  return (
    <CardsContainer>
      {orders.map((order) => (
        <OrderCard key={order.orderNumber || order.id || order.createdAt}>
          <OrderHeader>
            <OrderTitle>Orden {order.orderNumber || "#"}</OrderTitle>
            <OrderText>{formatDate(order.createdAt)}</OrderText>
          </OrderHeader>
          <OrderText>Total: ${order.total?.toFixed(2) ?? "0.00"}</OrderText>
          <OrderText>Cantidad de items: {order.items?.length ?? 0}</OrderText>
          <OrderText>Cliente: {order.customer || "-"}</OrderText>
        </OrderCard>
      ))}
    </CardsContainer>
  );
}
