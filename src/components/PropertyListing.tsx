import React from 'react';
import { Star } from 'lucide-react';

interface Property {
  id: number;
  image: string;
  salePrice: number;
  rentPrice: number;
  rating: number;
}

interface PropertyListingProps {
  property: Property;
}

const PropertyListing: React.FC<PropertyListingProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <img src={property.image} alt="Property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm text-gray-600">Compraventa</p>
            <p className="font-bold">{property.salePrice.toLocaleString('es-ES')} €</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Alquiler</p>
            <p className="font-bold">{property.rentPrice.toLocaleString('es-ES')} €</p>
          </div>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${
                star <= property.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;