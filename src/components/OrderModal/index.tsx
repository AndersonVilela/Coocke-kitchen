import { Actions, ModalBody, OrderDetails, Overley } from "./styles";
import Close from '../../assets/images/close-icon.svg';
import { Order } from "../../types/Oder";
import { formatCurrency } from "../../utils/formatCurrency";
import { api } from "../../utils/api";

interface OderModalProps {
  visible: boolean;
  order: Order | null;
  handleCloseModal: () => void;
  getOrders: () => void;
  changeStatusInProduction: (OrderId: string) => void;
  changeStatusDone: (OrderId: string) => void;
}

export function OrderModal({ visible, order, handleCloseModal, getOrders, changeStatusInProduction, changeStatusDone }: OderModalProps) {

  if (!visible || !order) {
    return null;
  }

  const ammount = order.products.reduce((mount, { product, quantity }) => {
    return mount + (product.price * quantity);
  }, 0)


  return (
    <Overley>
      <ModalBody>
        <header>
          <strong>{order.table}</strong>
          <button type="button">
            <img src={Close} alt="Icone de fechar" onClick={handleCloseModal} />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>

          <div className="item">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="product_details" key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} width="48" height="28.51" />

                <span>{quantity}x</span>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(ammount)}</strong>

          </div>
        </OrderDetails>
        <Actions>
          <button
            type="button"
            className="changeStatus"
            onClick={() => {
              if (order.status === 'WAITING') {

                changeStatusInProduction(order._id);
              }else if (order.status === 'IN_PRODUCTION') {
                changeStatusDone(order._id);
              }
              handleCloseModal();
            }}
          >
            <span>
              {order.status === 'WAITING' && '👩‍🍳'}
              {order.status === 'IN_PRODUCTION' && '✅'}
              {order.status === 'DONE' && '🚨'}
            </span>

            <span>
              {order.status === 'WAITING' && 'Iniciar Produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
              {order.status === 'DONE' && 'Avisar Garçom'}
            </span>
          </button>
          <button type="button" className="cancelStatus">
            <span>Cancelar Pedido</span>
          </button>
        </Actions>

      </ModalBody>
    </Overley>
  )
}
