import React from 'react';
import { Container,Navbar,Nav} from 'react-bootstrap';
import FruitCarousel from './carrosel';
import FoodGroups from './food';
import fruta from './assets/images.jpg'
function HHome(params) {
    return(<>
    <section style={{ backgroundColor: '#fdf1ec', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
<div style={{ display: 'flex', maxWidth: '900px', width: '100%', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={fruta}
    alt="Cesta de Frutas"
    style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '50%', margin: '1rem' }}
  />
  <div style={{ flex: 1, minWidth: '250px', textAlign: 'center', padding: '1rem' }}>
    <h2 style={{ fontSize: '2rem', color: '#f15a29', fontWeight: 'bold' }}>O impacto da nutrição no bem_estar</h2>
    <p style={{ fontSize: '1.2rem', color: '#555' }}>Descubra como alimentos saudáveis podem transformar sua saúde.</p>
  </div>
</div>
</section>

<Container fluid style={{ marginTop: '3rem', marginBottom: '3rem' }}>
<FruitCarousel />
</Container>
</>)
}
export default HHome;
