import React from 'react';
import { MapPin, Home, ArrowRight } from 'lucide-react';

interface PropertyDetailsProps {
  onNext: () => void;
  onChange: (data: any) => void;
  data: any;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ onNext, onChange, data }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Valorar</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Referencia catastral</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            value={data.cadastralReference || ''}
            onChange={(e) => onChange({ cadastralReference: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dirección</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-teal-500 focus:ring-teal-500"
              placeholder="Dirección"
              value={data.address || ''}
              onChange={(e) => onChange({ address: e.target.value })}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Superficie construida</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-teal-500 focus:ring-teal-500"
              placeholder="Superficie construida"
              value={data.builtArea || ''}
              onChange={(e) => onChange({ builtArea: e.target.value })}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Home className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Planta</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            value={data.floor || ''}
            onChange={(e) => onChange({ floor: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Ascensor</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-teal-500"
                name="elevator"
                value="yes"
                checked={data.hasElevator === true}
                onChange={() => onChange({ hasElevator: true })}
              />
              <span className="ml-2">Con Ascensor</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-teal-500"
                name="elevator"
                value="no"
                checked={data.hasElevator === false}
                onChange={() => onChange({ hasElevator: false })}
              />
              <span className="ml-2">Sin Ascensor</span>
            </label>
          </div>
        </div>
      </div>
      <button
        className="mt-6 w-full bg-teal-500 text-white py-3 rounded-full flex items-center justify-center"
        onClick={onNext}
      >
        Siguiente
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default PropertyDetails;