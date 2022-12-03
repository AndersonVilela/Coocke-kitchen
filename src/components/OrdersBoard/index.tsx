import { useState } from "react";
import { Order } from "../../types/Oder";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  getOrders: () => void;
  changeStatusInProduction: (OrderId: string) => void;
  changeStatusDone: (OrderId: string) => void;
};


export function OrdersBoard({ icon, title, orders, getOrders, changeStatusInProduction, changeStatusDone}: OrdersBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  

  return (
    <Board>
      <OrderModal 
        order={selectedOrder} 
        visible={isModalVisible} 
        handleCloseModal={handleCloseModal} 
        getOrders={getOrders} 
        changeStatusInProduction={changeStatusInProduction}
        changeStatusDone={changeStatusDone}
        />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>{order.table}</strong>
              <span>{order.products.length} items</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
