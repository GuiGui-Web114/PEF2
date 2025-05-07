import React from 'react';

const groups = [
  {
    name: 'Frutas',
    icon: '🍊',
    nutrients: ['Vitamina C', 'Fibras', 'Antioxidantes'],
    benefit: 'Melhoram imunidade e previnem doenças.'
  },
  {
    name: 'Legumes e Verduras',
    icon: '🥦',
    nutrients: ['Ferro', 'Cálcio', 'Ácido fólico'],
    benefit: 'Melhoram digestão e formação do sangue.'
  },
  {
    name: 'Cereais e Derivados',
    icon: '🍞',
    nutrients: ['Carboidratos', 'Fibras', 'Vitaminas B'],
    benefit: 'Fonte de energia e bom funcionamento do cérebro.'
  },
  {
    name: 'Proteínas (Carnes, ovos, feijões)',
    icon: '🍗🥚',
    nutrients: ['Proteínas', 'Ferro', 'Zinco'],
    benefit: 'Essenciais para músculos e tecidos.'
  },
  {
    name: 'Laticínios',
    icon: '🧀🥛',
    nutrients: ['Cálcio', 'Vitamina D', 'Proteínas'],
    benefit: 'Fortalecem os ossos e previnem osteoporose.'
  }
];

function FoodGroups() {
  return (
    <div style={{ marginTop: '3rem', marginBottom: '3rem' ,display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
      {groups.map((group, idx) => (
        <div
          key={idx}
          style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', maxWidth: '300px', textAlign: 'center', backgroundColor: '#fdf1ec' }}>
          <div style={{ fontSize: '2rem' }}>{group.icon}</div>
          <h4 style={{ color: '#f15a29', fontWeight: 'bold', marginTop: '0.5rem' }}>{group.name}</h4>
          <p style={{ fontSize: '0.95rem' }}><strong>Nutrientes:</strong> {group.nutrients.join(', ')}</p>
          <p style={{ fontSize: '0.95rem' }}><strong>Benefício:</strong> {group.benefit}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodGroups;