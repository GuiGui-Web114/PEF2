// NutritionPlateGame.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const foods = [
  { name: 'Arroz', group: 'Carboidrato' },
  { name: 'Macarrão', group: 'Carboidrato' },
  { name: 'Feijão', group: 'Proteína' },
  { name: 'Frango', group: 'Proteína' },
  { name: 'Ovo', group: 'Proteína' },
  { name: 'Brócolis', group: 'Vegetal' },
  { name: 'Cenoura', group: 'Vegetal' },
  { name: 'Banana', group: 'Fruta' },
  { name: 'Maçã', group: 'Fruta' },
];

const groupColors = {
  Proteína: 'primary',
  Carboidrato: 'warning',
  Vegetal: 'success',
  Fruta: 'danger',
};

const NutritionPlateGame = () => {
  const [plate, setPlate] = useState([]);

  const addToPlate = (food) => {
    if (plate.find(item => item.name === food.name)) return;
    if (plate.length >= 5) return;
    setPlate([...plate, food]);
  };

  const getGroupCount = (group) => plate.filter(f => f.group === group).length;

  const evaluatePlate = () => {
    const protein = getGroupCount('Proteína');
    const carb = getGroupCount('Carboidrato');
    const veg = getGroupCount('Vegetal');
    const fruit = getGroupCount('Fruta');
    if (protein && carb && (veg || fruit)) return '✅ Prato equilibrado!';
    return '⚠️ Prato desequilibrado. Adicione mais variedade.';
  };

  const resetPlate = () => setPlate([]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>Monte Seu Prato Saudável</h2>
      <Row className="mb-4">
        {foods.map((food, i) => (
          <Col key={i} xs={6} md={4} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{food.name}</Card.Title>
                <Badge bg={groupColors[food.group]} className="mb-2">{food.group}</Badge>
                <Button
                  variant="outline-dark"
                  size="sm"
                  disabled={plate.find(item => item.name === food.name) || plate.length >= 5}
                  onClick={() => addToPlate(food)}
                >
                  Adicionar ao prato
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="p-3 shadow-sm">
        <h4 className="mb-3">Seu prato (máximo 5 itens):</h4>
        {plate.length === 0 ? (
          <p>Nenhum alimento adicionado ainda.</p>
        ) : (
          <ul>
            {plate.map((item, i) => (
              <li key={i}>
                {item.name} <Badge bg={groupColors[item.group]}>{item.group}</Badge>
              </li>
            ))}
          </ul>
        )}
        <h5 className="mt-3">{evaluatePlate()}</h5>
        <Button variant="secondary" className="mt-3" onClick={resetPlate}>Reiniciar</Button>
      </Card>
    </Container>
  );
};

export default NutritionPlateGame;
