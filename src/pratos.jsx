// HealthyPlatesPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const examplePlates = [
  { title: 'Café da Manhã Equilibrado', image: 'https://cdn.pixabay.com/photo/2017/04/23/12/20/breakfast-2257828_1280.jpg', description: 'Iogurte natural, granola integral, frutas vermelhas e pão integral.' },
  { title: 'Smoothie de Frutas', image: 'https://cdn.pixabay.com/photo/2017/07/16/10/43/smoothie-2507610_1280.jpg', description: 'Smoothie de banana, morango e chia.' },
  { title: 'Torrada com Abacate', image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/avocado-toast-1868133_1280.jpg', description: 'Torrada integral com abacate e tomate cereja.' },
  { title: 'Panqueca de Aveia', image: 'https://cdn.pixabay.com/photo/2018/06/16/17/08/pancakes-3484934_1280.jpg', description: 'Panquecas de aveia com mel e frutas.' },
  { title: 'Omelete de Vegetais', image: 'https://cdn.pixabay.com/photo/2017/10/27/19/16/omelet-2892677_1280.jpg', description: 'Omelete com espinafre, tomate e cebola.' },
  { title: 'Vitamina de Banana', image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/smoothie-3081862_1280.jpg', description: 'Vitamina de banana com leite desnatado.' },
  { title: 'Tapioca Recheada', image: 'https://cdn.pixabay.com/photo/2017/05/31/12/19/tapioca-2354625_1280.jpg', description: 'Tapioca com queijo minas e chia.' },
  { title: 'Salada de Frutas', image: 'https://cdn.pixabay.com/photo/2014/12/15/13/40/fruit-salad-569314_1280.jpg', description: 'Mix de frutas da estação com mamão, abacaxi e mel.' },
  { title: 'Granola Caseira', image: 'https://cdn.pixabay.com/photo/2016/11/29/04/14/granola-1869454_1280.jpg', description: 'Granola com aveia, nozes e mel.' },
  { title: 'Crepioca Integral', image: 'https://cdn.pixabay.com/photo/2017/12/09/08/17/crepioca-3002987_1280.jpg', description: 'Crepioca de chia com queijo branco.' },
  // --- Almoços ---
  { title: 'Salada Colorida', image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hummus-1238640_1280.jpg', description: 'Alface, rúcula, cenoura e grão-de-bico.' },
  { title: 'Peito de Frango Grelhado', image: 'https://cdn.pixabay.com/photo/2018/06/29/10/29/chicken-3509551_1280.jpg', description: 'Peito de frango grelhado com ervas finas.' },
  { title: 'Quinoa com Legumes', image: 'https://cdn.pixabay.com/photo/2014/12/15/13/40/plate-569372_1280.jpg', description: 'Quinoa, abobrinha, berinjela e tomate.' },
  { title: 'Arroz Integral e Lentilha', image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/plate-1238638_1280.jpg', description: 'Arroz integral, lentilha e couve refogada.' },
  { title: 'Salmão ao Forno', image: 'https://cdn.pixabay.com/photo/2017/09/05/17/30/salmon-2715859_1280.jpg', description: 'Salmão com limão, azeite e alho.' },
  { title: 'Tabule', image: 'https://cdn.pixabay.com/photo/2017/01/28/11/02/tabbouleh-2013903_1280.jpg', description: 'Trigo para quibe, tomate, salsinha e hortelã.' },
  { title: 'Strogonoff de Grão-de-Bico', image: 'https://cdn.pixabay.com/photo/2016/10/18/21/22/vegetarian-stroganoff-1750063_1280.jpg', description: 'Strogonoff vegano de grão-de-bico.' },
  { title: 'Espaguete de Abobrinha', image: 'https://cdn.pixabay.com/photo/2016/10/25/12/28/zucchini-1768915_1280.jpg', description: 'Espaguete de abobrinha com molho de tomate.' },
  { title: 'Bowl de Buddha', image: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/salad-2072115_1280.jpg', description: 'Bowl com arroz, feijão, vegetais e tofu.' },
  { title: 'Wrap Integral', image: 'https://cdn.pixabay.com/photo/2016/11/30/11/04/burrito-1872741_1280.jpg', description: 'Wrap de grão-de-bico, alface e cenoura.' },
  // --- Lanches ---
  { title: 'Mix de Oleaginosas', image: 'https://cdn.pixabay.com/photo/2017/01/16/19/32/nuts-1989716_1280.jpg', description: 'Castanhas, nozes e amêndoas.' },
  { title: 'Hummus com Pão Sírio', image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hummus-1238640_1280.jpg', description: 'Homus caseiro com pão sírio integral.' },
  { title: 'Iogurte com Mel', image: 'https://cdn.pixabay.com/photo/2016/03/05/20/02/yogurt-1239590_1280.jpg', description: 'Iogurte natural com mel e granola.' },
  { title: 'Palitos de Legumes', image: 'https://cdn.pixabay.com/photo/2017/07/16/10/43/smoothie-2507610_1280.jpg', description: 'Cenoura, pepino e aipo com molho de iogurte.' },
  { title: 'Barra de Cereais Caseira', image: 'https://cdn.pixabay.com/photo/2016/06/15/16/13/granola-bars-1455219_1280.jpg', description: 'Barra de aveia, mel e frutas secas.' },
  { title: 'Torrada de Ricota', image: 'https://cdn.pixabay.com/photo/2014/12/15/07/07/toast-569048_1280.jpg', description: 'Torrada integral com ricota e ervas.' },
  { title: 'Maçã com Pasta de Amendoim', image: 'https://cdn.pixabay.com/photo/2018/06/16/16/26/watermelon-3479009_1280.jpg', description: 'Fatias de maçã com pasta de amendoim.' },
  { title: 'Chips de Batata-Doce', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/sweet-potato-2363099_1280.jpg', description: 'Chips assados de batata-doce.' },
  { title: 'Muffin Integral', image: 'https://cdn.pixabay.com/photo/2015/04/10/13/05/muffins-715508_1280.jpg', description: 'Muffin de farinha integral e banana.' },
  { title: 'Smoothie Verde', image: 'https://cdn.pixabay.com/photo/2017/10/25/12/28/green-smoothie-2886741_1280.jpg', description: 'Smoothie de couve, maçã e gengibre.' },
  // --- Jantares ---
  { title: 'Sopa de Legumes', image: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/soup-2178287_1280.jpg', description: 'Sopa de abóbora, cenoura e cebola.' },
  { title: 'Tilápia Grelhada', image: 'https://cdn.pixabay.com/photo/2017/10/27/19/16/tilapia-2892677_1280.jpg', description: 'Tilápia com ervas, limão e azeite.' },
  { title: 'Risoto de Cogumelos', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/risotto-2363081_1280.jpg', description: 'Risoto cremoso de cogumelos.' },
  { title: 'Berinjela Recheada', image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hummus-1238640_1280.jpg', description: 'Berinjela recheada com quinoa e tomate.' },
  { title: 'Peixe ao Vapor', image: 'https://cdn.pixabay.com/photo/2018/08/12/17/05/fish-3605545_1280.jpg', description: 'Peixe branco com legumes no vapor.' },
  { title: 'Salada de Grãos', image: 'https://cdn.pixabay.com/photo/2017/01/27/14/51/beans-2019553_1280.jpg', description: 'Mix de feijão, grão-de-bico e lentilha.' },
  { title: 'Wrap de Frango', image: 'https://cdn.pixabay.com/photo/2016/11/18/16/27/wrap-1830058_1280.jpg', description: 'Wrap integral com frango e vegetais.' },
  { title: 'Curry de Legumes', image: 'https://cdn.pixabay.com/photo/2014/12/15/13/40/curry-569379_1280.jpg', description: 'Curry vegano com leite de coco.' },
  { title: 'Pizza Integral Caseira', image: 'https://cdn.pixabay.com/photo/2016/11/18/16/06/pizza-1834216_1280.jpg', description: 'Pizza massa integral com vegetais.' },
  { title: 'Bowl de Frango', image: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/salad-2072115_1280.jpg', description: 'Bowl com arroz, frango e abacate.' }
];

function HealthyPlatesPage() {
  return (
    <Container style={{ padding: '2rem' }}>
      <h2 style={{ color: '#f15a29', textAlign: 'center', marginBottom: '2rem' }}>Exemplos de Pratos Saudáveis</h2>
      <Row className="g-4">
        {examplePlates.map((plate, idx) => (
          <Col key={idx} xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm" style={{ borderRadius: '10px' }}>
              <Card.Img 
                variant="top" 
                src={plate.image} 
                style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <Card.Body>
                <Card.Title style={{ color: '#f15a29' }}>{plate.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem', color: '#333' }}>
                  {plate.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HealthyPlatesPage;
