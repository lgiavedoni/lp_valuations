import React, { useState } from 'react';
import { Home } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AppraisalWizard from './components/AppraisalWizard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'appraisal' && <AppraisalWizard />}
    </div>
  );
}

export default App;