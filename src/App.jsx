// App.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Container,Navbar,Nav, NavDropdown} from 'react-bootstrap';
import FruitCarousel from './carrosel';
import FoodGroups from './food';
import fruta from './assets/images.jpg'
function App() {
  return (
    <div>
     <header style={{ backgroundColor: '#f15a29', color: 'white' }}>
          <Navbar expand="lg" style={{ backgroundColor: '#f15a29' }}>
            <Container>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Promoção nutricional</div>
                </Link>
              </div>

              <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
                <NavDropdown
                  title={<span style={{ color: 'white', fontWeight: 'bold' }}>Menu</span>}
                  id="basic-nav-dropdown"
                  align="end"
                  menuVariant="dark"
                  style={{ fontSize: '1rem' }}
                >
                  <NavDropdown.Item as={Link} to="/alimentos">Alimentos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/dicas">Dicas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/mitos">Mitos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/receitas">Receitas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/gorduras-saudaveis">
                    Óleos e Gorduras
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        </header>
     <Outlet/>
      <footer style={{ backgroundColor: '#f15a29', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '3rem' }}>
        <p style={{ margin: 0 }}>© 2025 Promoção Nutricional. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

