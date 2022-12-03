import { Order } from "../../types/Oder";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";


export function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [atualize, setAtualize] = useState(true);


  useEffect(() => {
    getOrders();
  }, [atualize]);

  function getOrders() {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data)
        console.log(data)
      })
  }

  function changeStatusInProduction(OrderId: string) {
    api.patch(`/orders/${OrderId}`, {
      "status": "IN_PRODUCTION"
    })
    setAtualize(!atualize);
  }

  function changeStatusDone(OrderId: string) {
    api.patch(`/orders/${OrderId}`, {
      "status": "DONE"
    })
    setAtualize(!atualize);
  }


  return (
    <Container>
      <OrdersBoard
        title="Fila de espera"
        icon="🕑"
        orders={orders.filter((order) => order.status === 'WAITING')}
        getOrders={getOrders}
        changeStatusInProduction={changeStatusInProduction}
        changeStatusDone={changeStatusDone}
      />
      <OrdersBoard
        title="Em produção"
        icon="👩‍🍳"
        orders={orders.filter((order) => order.status === 'IN_PRODUCTION')}
        getOrders={getOrders}
        changeStatusInProduction={changeStatusInProduction}
        changeStatusDone={changeStatusDone}
      />
      <OrdersBoard
        title="Pronto"
        icon="✅"
        orders={orders.filter((order) => order.status === 'DONE')}
        getOrders={getOrders}
        changeStatusInProduction={changeStatusInProduction}
        changeStatusDone={changeStatusDone}
      />
    </Container>
  )
}
