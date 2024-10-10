import React from 'react';
import { Home, MapPin, ArrowLeft } from 'lucide-react';

interface AppraisalResultProps {
  data: any;
  appraisalResult: any;
}

const AppraisalResult: React.FC<AppraisalResultProps> = ({ data, appraisalResult }) => {
  const saleValue = appraisalResult?.venta?.valor_base || 250000;
  const rentValue = appraisalResult?.alquiler?.valor_base || 1200;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inmueble</h2>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <img
          src={data.images?.[0] || 'https://source.unsplash.com/random/800x600/?apartment'}
          alt="Property"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Inmueble 01</h3>
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <span>{data.address}</span>
        </div>
        <div className="flex items-center mb-2">
          <Home className="h-5 w-5 text-gray-400 mr-2" />
          <span>{data.builtArea} m²</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 mr-2">Planta:</span>
          <span>{data.floor}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 mr-2">Ascensor:</span>
          <span>{data.hasElevator ? 'Sí' : 'No'}</span>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Compraventa</h3>
        <div className="flex justify-between">
          <span>Valor mínimo</span>
          <span>{appraisalResult?.venta?.valor_minimo.toLocaleString('es-ES')} €</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Valor base</span>
          <span>{saleValue.toLocaleString('es-ES')} €</span>
        </div>
        <div className="flex justify-between">
          <span>Valor máximo</span>
          <span>{appraisalResult?.venta?.valor_maximo.toLocaleString('es-ES')} €</span>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Alquiler</h3>
        <div className="flex justify-between">
          <span>Valor mínimo</span>
          <span>{appraisalResult?.alquiler?.valor_minimo.toLocaleString('es-ES')} €</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Valor base</span>
          <span>{rentValue.toLocaleString('es-ES')} €</span>
        </div>
        <div className="flex justify-between">
          <span>Valor máximo</span>
          <span>{appraisalResult?.alquiler?.valor_maximo.toLocaleString('es-ES')} €</span>
        </div>
      </div>
      <button className="w-full bg-teal-500 text-white py-3 rounded-full flex items-center justify-center">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Volver al inicio
      </button>
    </div>
  );
};

export default AppraisalResult;