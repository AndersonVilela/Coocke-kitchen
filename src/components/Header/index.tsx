import Logo from '../../assets/images/lunch-time/amico.png';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className='page-details'>
          <h1>Pedidos</h1>
          <h2>Aconpanhe os pedidos dos clientes</h2>
        </div>
        <div className='logo'>
          <img src={Logo} alt='Coockie App' />
          <div className='aside-logo'>
            <h3>Coocke App</h3>
            <span>O App do garçom</span>
          </div>
        </div>

      </Content>
    </Container>
  )
}
