import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormBuilderPage from './pages/FormBuilderPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormBuilderPage />} />
    </Routes>
  );
};

export default App;
