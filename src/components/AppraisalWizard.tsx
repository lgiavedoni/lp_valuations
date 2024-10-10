import React, { useState } from 'react';
import PropertyDetails from './PropertyDetails';
import PropertyImages from './PropertyImages';
import PropertyCondition from './PropertyCondition';
import AppraisalResult from './AppraisalResult';
import LoadingSpinner from './LoadingSpinner';

const AppraisalWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [propertyData, setPropertyData] = useState({});
  const [appraisalResult, setAppraisalResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handlePropertyDataChange = (data: any) => {
    setPropertyData({ ...propertyData, ...data });
  };

  const submitAppraisal = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/valoracion/calcular/params?planta=0&ascensor=true&terraza=true&latitud=39.451225&longitud=-0.6078123&m2cons=150&fuente_id=1&estado_aplicado_id=3&wc=[1,2]&cocina=1&mercado_id=1&calidad_id=1&formato_id=1&states=[3]', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      setAppraisalResult(result);
      nextStep();
    } catch (error) {
      console.error('Error fetching appraisal data:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {step === 1 && (
            <PropertyDetails
              onNext={nextStep}
              onChange={handlePropertyDataChange}
              data={propertyData}
            />
          )}
          {step === 2 && (
            <PropertyImages
              onNext={nextStep}
              onPrev={prevStep}
              onChange={handlePropertyDataChange}
              data={propertyData}
            />
          )}
          {step === 3 && (
            <PropertyCondition
              onNext={submitAppraisal}
              onPrev={prevStep}
              onChange={handlePropertyDataChange}
              data={propertyData}
            />
          )}
          {step === 4 && <AppraisalResult data={propertyData} appraisalResult={appraisalResult} />}
        </>
      )}
    </div>
  );
};

export default AppraisalWizard;