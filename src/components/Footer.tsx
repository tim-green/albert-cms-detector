import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
        <footer className="mt-12 py-6 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
        <h4 className="mt-1.5 text-sm font-bold text-gray-900">Disclaimer</h4>
          Albert aims to deliver highly accurate and reliable information, but there may be occasional inaccuracies. 
          Although Albert strive for 99.99% accuracy, users are encouraged to verify important details independently.
        </div>
      </footer>
  );
};

export default Footer;