import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface PropertyConditionProps {
  onNext: () => void;
  onPrev: () => void;
  onChange: (data: any) => void;
  data: any;
}

const PropertyCondition: React.FC<PropertyConditionProps> = ({ onNext, onPrev, onChange, data }) => {
  const handleRatingChange = (rating: number) => {
    onChange({ condition: rating });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Valorar</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Estado de conservación</h3>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-8 w-8 cursor-pointer ${
                star <= (data.condition || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <input
          type="range"
          min="1"
          max="5"
          value={data.condition || 0}
          onChange={(e) => handleRatingChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full flex items-center"
          onClick={onPrev}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Anterior
        </button>
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded-full flex items-center"
          onClick={onNext}
        >
          Siguiente
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCondition;