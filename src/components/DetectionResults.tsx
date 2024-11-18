import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import type { CMSResult } from '../utils/detector';

interface Props {
  result: CMSResult;
}

const DetectionResults: React.FC<Props> = ({ result }) => {
  const hasMultipleDetections = result.allDetections.filter(d => d.confidence > 0).length > 1;

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faCircleCheck} className="h-6 w-6 text-green-500" />
        <h2 className="text-xl font-semibold">Results</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="font-medium">Albert detected the site is using: </span>
          <span className="text-indigo-600 font-semibold">
            {result.cms || 'Unknown'}
          </span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="font-medium">How confident Albert is: </span>
          <span className="text-indigo-600 font-semibold">
            {result.confidence}%
          </span>
        </div>

        {result.indicators.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">The Indicators of {result.cms || 'Unknown'}:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {result.indicators.map((indicator, index) => (
                <li key={index}>{indicator}</li>
              ))}
            </ul>
          </div>
        )}

        {hasMultipleDetections && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faTriangleExclamation} className="h-5 w-5 text-amber-500"/>
              <h3 className="font-medium text-gray-700">Albert has also found some additional information</h3>
            </div>
            <div className="space-y-3">
              {result.allDetections
                .filter(d => d.confidence > 0 && d.name !== result.cms)
                .map((detection, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{detection.name}</span>
                      <span className="text-sm text-gray-500">
                        {detection.confidence}% confidence
                      </span>
                    </div>
                    {detection.indicators.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {detection.indicators.map((indicator, idx) => (
                          <li key={idx}>{indicator}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetectionResults;