import { Order } from "../../types/Oder";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import axios, { Axios } from 'axios';
import { useEffect } from "react";

export function Orders() {

  useEffect(() => {
    getOrders();
  }, [])

  function getOrders() {
    fetch('http://localhost:3001/orders')
      .then(response => console.log(response))
  }


  const orders: Order[] = [
    {
      _id: '6372e48cbcd195b0d3d0f7f3',
      table: '123',
      status: 'WAITING',
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ],
    }
  ]

  return (
    <Container>
      <OrdersBoard
        title="Fila de espera"
        icon="🕑"
        orders={orders}
      />
      <OrdersBoard
        title="Em produção"
        icon="👩‍🍳"
        orders={[]}
      />
      <OrdersBoard
        title="Pronto"
        icon="✅"
        orders={[]}
      />
    </Container>
  )
}
