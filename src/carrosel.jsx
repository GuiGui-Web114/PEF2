// FruitCarousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import manga from './assets/manga.jpg'
import Banana from './assets/banana.jpg'
import melancia from './assets/melancia.jpg'
import abacaxi from './assets/beneficios-do-abacaxi-2.jpg'
const fruits = [
  {
    name: 'Laranja',
    image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg',
    fact: 'Rica em vitamina C e ajuda a fortalecer o sistema imunológico.'
  },
  {
    name: 'Maçã',
    image: 'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg',
    fact: 'Ajuda a regular o intestino e controla o colesterol.'
  },
  {
    name: 'Banana',
    image: Banana,
    fact: 'Fonte de potássio, excelente para os músculos.'
  },
  {
    name: 'Abacaxi',
    image: abacaxi,
    fact: 'Contém bromelina, uma enzima que ajuda na digestão.'
  },
  {
    name: 'Manga',
    image: manga,
    fact: 'Rica em vitamina A, essencial para a saúde dos olhos.'
  },
  {
    name: 'Melancia',
    image: melancia,
    fact: 'Composta por 90% de água, ótima para hidratação.'
  },
];

function FruitCarousel() {
  return (
    <Carousel fade>
      {fruits.map((fruit, index) => (
        <Carousel.Item key={index}>
          <img
            style={{ height: '400px', objectFit: 'cover', width: '100%' }}
            src={fruit.image}
            alt={fruit.name}
          />
          <Carousel.Caption>
            <h3>{fruit.name}</h3>
            <p>{fruit.fact}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FruitCarousel;
