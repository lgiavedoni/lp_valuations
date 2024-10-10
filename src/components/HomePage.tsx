import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import PropertyListing from './PropertyListing';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const properties = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/800x600/?bedroom',
      salePrice: 999,
      rentPrice: 999,
      rating: 5,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/800x600/?kitchen',
      salePrice: 999,
      rentPrice: 999,
      rating: 4,
    },
  ];

  return (
    <div className="flex-1 p-4">
      <button
        className="w-full bg-teal-500 text-white py-3 rounded-full mb-4"
        onClick={() => setCurrentPage('appraisal')}
      >
        Valorar
      </button>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <button className="absolute right-2 top-2 bg-teal-500 p-1 rounded-full">
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="space-y-4">
        {properties.map((property) => (
          <PropertyListing key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;