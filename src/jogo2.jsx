// NutrientQuiz.jsx
import React, { useState } from 'react';
import { Container, Button, Card, ProgressBar,Row,Col } from 'react-bootstrap';

const allQuestions = [
  { question: 'Qual alimento é rico em vitamina C?', options: ['Laranja', 'Arroz', 'Carne', 'Pão'], answer: 'Laranja' },
  { question: 'Qual destes é uma boa fonte de proteína?', options: ['Feijão', 'Maçã', 'Alface', 'Batata'], answer: 'Feijão' },
  { question: 'Qual alimento é rico em ferro?', options: ['Espinafre', 'Cenoura', 'Banana', 'Tomate'], answer: 'Espinafre' },
  { question: 'Qual destes é um carboidrato?', options: ['Pão', 'Frango', 'Abacate', 'Peixe'], answer: 'Pão' },
  { question: 'Qual vitamina é produzida com exposição ao sol?', options: ['Vitamina D', 'Vitamina A', 'Vitamina C', 'Vitamina B12'], answer: 'Vitamina D' },
  { question: 'Qual alimento ajuda na digestão por ser rico em fibras?', options: ['Maçã', 'Queijo', 'Frango', 'Sorvete'], answer: 'Maçã' },
  { question: 'Qual desses é considerado uma gordura saudável?', options: ['Azeite de oliva', 'Margarina', 'Banha', 'Óleo de palma'], answer: 'Azeite de oliva' },
  { question: 'Qual alimento é fonte de cálcio?', options: ['Leite', 'Refrigerante', 'Pão', 'Arroz'], answer: 'Leite' },
  { question: 'O que é uma fonte de energia rápida para o corpo?', options: ['Açúcar', 'Ovo', 'Carne', 'Sal'], answer: 'Açúcar' },
  { question: 'Qual desses alimentos tem alto teor de potássio?', options: ['Banana', 'Cenoura', 'Pão', 'Alface'], answer: 'Banana' },
  { question: 'Qual vegetal é conhecido por melhorar a visão?', options: ['Cenoura', 'Tomate', 'Alface', 'Beterraba'], answer: 'Cenoura' },
  { question: 'O que é essencial para a formação de músculos?', options: ['Proteínas', 'Carboidratos', 'Vitaminas', 'Gorduras'], answer: 'Proteínas' },
  { question: 'Qual desses alimentos contém ômega 3?', options: ['Peixe', 'Arroz', 'Feijão', 'Frango'], answer: 'Peixe' },
  { question: 'Qual fruta é rica em antioxidantes?', options: ['Uva', 'Banana', 'Maçã', 'Pera'], answer: 'Uva' },
  { question: 'O que o corpo armazena como energia?', options: ['Gordura', 'Água', 'Vitaminas', 'Fibras'], answer: 'Gordura' },
  { question: 'Qual desses alimentos é fonte de vitamina A?', options: ['Cenoura', 'Pão', 'Leite', 'Batata'], answer: 'Cenoura' },
  { question: 'O que é importante para a saúde dos ossos?', options: ['Cálcio', 'Ferro', 'Zinco', 'Magnésio'], answer: 'Cálcio' },
  { question: 'Qual desses alimentos tem baixo valor calórico?', options: ['Alface', 'Pão', 'Arroz', 'Batata'], answer: 'Alface' },
  { question: 'Qual fruta contém enzimas digestivas?', options: ['Abacaxi', 'Maçã', 'Banana', 'Uva'], answer: 'Abacaxi' },
  { question: 'O que deve ser evitado em excesso na dieta?', options: ['Açúcar', 'Frutas', 'Legumes', 'Água'], answer: 'Açúcar' },
  { question: 'Qual desses é um legume?', options: ['Cenoura', 'Maçã', 'Frango', 'Pão'], answer: 'Cenoura' },
  { question: 'O que é um bom alimento para o café da manhã?', options: ['Ovos', 'Pizza', 'Sorvete', 'Hambúrguer'], answer: 'Ovos' },
  { question: 'Qual desses alimentos é fonte de zinco?', options: ['Carne vermelha', 'Banana', 'Alface', 'Pão'], answer: 'Carne vermelha' },
  { question: 'O que pode ajudar a controlar o colesterol?', options: ['Aveia', 'Doce de leite', 'Refrigerante', 'Pizza'], answer: 'Aveia' },
  { question: 'Qual desses é um alimento integral?', options: ['Arroz integral', 'Bolo', 'Pão branco', 'Massa'], answer: 'Arroz integral' },
  { question: 'Qual desses alimentos ajuda na hidratação?', options: ['Melancia', 'Batata', 'Pão', 'Frango'], answer: 'Melancia' },
  { question: 'Qual desses alimentos é rico em vitamina E?', options: ['Sementes de girassol', 'Carne', 'Leite', 'Arroz'], answer: 'Sementes de girassol' },
  { question: 'Qual desses alimentos é considerado um probiótico natural?', options: ['Iogurte', 'Pão', 'Carne', 'Maçã'], answer: 'Iogurte' },
  { question: 'Qual mineral é essencial para o sangue?', options: ['Ferro', 'Cálcio', 'Magnésio', 'Fósforo'], answer: 'Ferro' },
  { question: 'Qual desses é um alimento fonte de energia de longa duração?', options: ['Batata-doce', 'Chocolate', 'Refrigerante', 'Pão branco'], answer: 'Batata-doce' },
  { question: 'Qual desses alimentos tem alto teor de vitamina K?', options: ['Espinafre', 'Maçã', 'Banana', 'Tomate'], answer: 'Espinafre' }
];

const NutrientQuiz = () => {
  const [questions, setQuestions] = useState(
    allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5)
  );
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowResult(true);
  };

  const restartQuiz = () => {
    const newQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuestions(newQuestions);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <Card className="p-4 shadow">
        {!showResult ? (
          <>
            <h3 className="mb-3 text-center" style={{ color: '#f15a29' }}>Quiz dos Nutrientes</h3>
            <ProgressBar now={(current / questions.length) * 100} className="mb-4" />
            <h5 className="mb-3">{questions[current].question}</h5>
            <Row>
              {questions[current].options.map((opt, i) => (
                <Col xs={6} className="mb-2" key={i}>
                  <Button
                    className="w-100"
                    variant="warning"
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt}
                  </Button>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <div className="text-center">
            <h3 style={{ color: '#28a745' }}>Resultado</h3>
            <p className="fs-5">Você acertou {score} de {questions.length} perguntas!</p>
            <Button variant="warning" onClick={restartQuiz}>Jogar Novamente</Button>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default NutrientQuiz;
