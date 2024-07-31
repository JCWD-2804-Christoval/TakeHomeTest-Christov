import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DrugDetail from '../components/DrugDetail';
import { fetchDrugById } from '../services/api';
import { Drug } from '../types';
import { CartContext } from '../context/CartContext';
import '../assets/styles/DrugDetail.css';

const DrugDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [drug, setDrug] = useState<Drug | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const loadDrug = async () => {
      if (id) {
        try {
          const drugData = await fetchDrugById(Number(id));
          setDrug(drugData);
        } catch (error) {
          console.error('Error fetching drug details:', error);
        }
      }
    };

    loadDrug();
  }, [id]);

  if (!drug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="drug-detail-page">
      <DrugDetail drug={drug} onAddToCart={() => addToCart(drug)} />
    </div>
  );
};

export default DrugDetailPage;