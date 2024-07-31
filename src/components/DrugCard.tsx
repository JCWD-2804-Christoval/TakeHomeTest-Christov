import React from 'react';
import { Drug } from '../types';
import '../assets/styles/Home.css';

interface DrugCardProps {
  drug: Drug;
  onAddToCart: (drug: Drug) => void;
}

const DrugCard: React.FC<DrugCardProps> = ({ drug, onAddToCart }) => {
  return (
    <div className="drug-card">
      <h3>{drug.name}</h3>
      <p>{drug.description}</p>
      <p>Price: ${drug.price}</p>
      <button onClick={() => onAddToCart(drug)}>Add to Cart</button>
    </div>
  );
};

export default DrugCard;
