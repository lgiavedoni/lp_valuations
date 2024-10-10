import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, Upload } from 'lucide-react';

interface PropertyImagesProps {
  onNext: () => void;
  onPrev: () => void;
  onChange: (data: any) => void;
  data: any;
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ onNext, onPrev, onChange, data }) => {
  const [images, setImages] = useState<string[]>(data.images || []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      const updatedImages = [...images, ...newImages];
      setImages(updatedImages);
      onChange({ images: updatedImages });
    }
  };

  const handleCameraCapture = () => {
    // TODO: Implement camera capture functionality
    console.log('Camera capture not implemented');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Valorar</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Fotos del inmueble</h3>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Property ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
          ))}
          <label className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
            <Upload className="h-8 w-8 text-gray-400" />
          </label>
        </div>
      </div>
      <button
        className="w-full bg-teal-500 text-white py-3 rounded-full mb-4 flex items-center justify-center"
        onClick={handleCameraCapture}
      >
        <Camera className="mr-2 h-5 w-5" />
        Tomar foto
      </button>
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
          Finalizar
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PropertyImages;