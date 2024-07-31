import React, { useEffect, useState } from 'react';
import DrugCard from './DrugCard';
import { Drug } from '../types';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home: React.FC = () => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/drugs')
      .then((response) => response.json())
      .then((data) => setDrugs(data))
      .catch((error) => console.error('Error fetching drugs:', error));
  }, []);

  const handleDrugClick = (id: number) => {
    navigate(`/drug/${id}`);
  };

  return (
    <div className="container">
      <h1>Drug Catalog</h1>
      <div className="drug-list">
        {drugs.map((drug) => (
          <div key={drug.id} onClick={() => handleDrugClick(drug.id)}>
            <DrugCard drug={drug} onAddToCart={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
