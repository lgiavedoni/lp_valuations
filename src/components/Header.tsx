import React from 'react';
import { Menu, User, Home } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Menu className="w-6 h-6 text-gray-600" />
      <Home className="w-8 h-8 text-teal-500" onClick={() => setCurrentPage('home')} />
      <User className="w-6 h-6 text-gray-600" />
    </header>
  );
};

export default Header;