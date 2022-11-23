import styled from 'styled-components';

export const Container = styled.header`
  background:  #151522;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`

  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px
    } 

    h2 {
      margin-top: 6px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;

      color: rgba(255, 255, 255, 0.6);

    }
  }
    .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .aside-logo {

    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;

      color: #fff
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

