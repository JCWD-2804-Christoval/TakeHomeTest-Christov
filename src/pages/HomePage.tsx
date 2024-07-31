import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Drug } from '../types';

const HomePage: React.FC = () => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/drugs')
      .then((response) => response.json())
      .then((data) => setDrugs(data));
  }, []);

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search drugs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredDrugs.map((drug) => (
          <Link key={drug.id} to={`/drug/${drug.id}`}>
            <div>{drug.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
