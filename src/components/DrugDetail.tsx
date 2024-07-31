import React from 'react';
import { Drug } from '../types';

interface DrugDetailProps {
  drug: Drug;
  onAddToCart: () => void;
}

const DrugDetail: React.FC<DrugDetailProps> = ({ drug, onAddToCart }) => {
  return (
    <div className="drug-detail">
      <h2>{drug.name}</h2>
      <p>{drug.description}</p>
      <p>Price: ${drug.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DrugDetail;
