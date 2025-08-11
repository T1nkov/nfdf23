import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const nav = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h1>Главная</h1>
      <button onClick={() => nav('/form')}>FORM</button>
    </div>
  );
};

export default Home;
