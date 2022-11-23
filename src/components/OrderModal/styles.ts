import styled from "styled-components"

export const Overley = styled.div`
  
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`

  background: #fff;
  width: 480px;
  padding: 32px;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }


    button {
      border: 0;
      background: transparent;
      display: flex;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
    opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`

  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .item {
    margin-top: 16px;


    .product_details {
      display: flex;
      & + .product_details {
        margin-top: 16px
      }

      img {
        width: 48px;
        height: 40px;
        border-radius: 6px;
        margin-right: 12px;
      
      }

      > span {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #666666;
        margin-right: 4px;
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 4px;

        strong {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 150%;

          display: flex;
          align-items: center;

          color: #333333;
        }

        span {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #666;
        }
      }

    }

    
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;

      display: flex;
      align-items: center;

      color: #333333;

      opacity: 0.8;


    }

    strong {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;

      display: flex;
      align-items: center;

      color: #333333;

    }
    }
`;


export const Actions = styled.div`

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 32px;

  .changeStatus {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 24px;
    gap: 8px;

    width: 416px;
    height: 44px;

    background: #333333;
    border-radius: 48px;

    span:nth-child(2) {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;

      display: flex;
      align-items: center;

      color: #FFFFFF;
    }

  }
  .cancelStatus {
    padding: 14px 24px;

    width: 416px;
    height: 44px;

    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    background: transparent;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;

      color: #D73035;
    }

  }

`;

