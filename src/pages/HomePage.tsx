import React, { useEffect, useState, useContext } from 'react';
import DrugCard from '../components/DrugCard';
import { fetchDrugs } from '../services/api';
import { Drug } from '../types';
import { CartContext } from '../context/CartContext';
import '../assets/styles/Home.css';

const HomePage: React.FC = () => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    const loadDrugs = async () => {
      try {
        const drugsData = await fetchDrugs();
        setDrugs(drugsData);
      } catch (error) {
        console.error('Error fetching drugs:', error);
      }
    };

    loadDrugs();
  }, []);

  return (
    <div className="home-page">
      <h1>Drug Catalog</h1>
      <div className="drug-catalog">
        {drugs.map((drug) => (
          <DrugCard key={drug.id} drug={drug} onAddToCart={() => addToCart(drug)} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
