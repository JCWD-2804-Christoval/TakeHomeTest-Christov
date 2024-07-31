import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Drug } from '../types';
import '../assets/styles/DrugDetail.css';

const DrugDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [drug, setDrug] = useState<Drug | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/drugs/${id}`)
      .then((response) => response.json())
      .then((data) => setDrug(data))
      .catch((error) => console.error('Error fetching drug:', error));
  }, [id]);

  if (!drug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{drug.name}</h1>
      <p>{drug.description}</p>
      <p>Price: ${drug.price}</p>
      <button onClick={() => navigate('/cart')}>Add to Cart</button>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default DrugDetail;
