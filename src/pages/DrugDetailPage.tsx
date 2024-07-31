import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Drug } from '../types';

const DrugDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [drug, setDrug] = useState<Drug | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:3000/drugs/${id}`)
      .then((response) => response.json())
      .then((data) => setDrug(data));
  }, [id]);

  if (!drug) return <div>Loading...</div>;

  return (
    <div>
      <h2>{drug.name}</h2>
      <p>{drug.description}</p>
      <p>Price: ${drug.price}</p>
      <button onClick={() => addToCart(drug)}>Add to Cart</button>
    </div>
  );
};

export default DrugDetailPage;
