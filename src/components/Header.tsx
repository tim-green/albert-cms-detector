import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/images/albert-logo.svg";

const Header = () => {
  return (
    <div className="text-center space-y-4">
      {/* <div className="inline-block p-3 bg-indigo-600 rounded-full"></div> */}
      <div className="flex justify-center p-3">
        <img src={logo} alt="Albert" title="Meet Albert" className="logo logo-svg" />
        <h4 className="text-4xl font-bold text-gray-900 logo sr-only">Albert</h4>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Meet Albert, he discovers which Content Management System powers any website. Simply enter
        the URL and let Albert analyse the digital fingerprints. Albert can also detect web builders, eCommerce and more!
      </p>
    </div>
  );
};

export default Header;