// Popup.js
import React from 'react';

const Popup = ({ show, onClose }) => {
  const handleRedirect = () => {
    window.location.href = '/role/Role';
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-2xl mb-4 text-black text-bold">Welcome! Log In to Enhance Your Experience</h2>

<p className='text-black'>Discover a world of personalized services and exclusive benefits by logging in now!</p>
        <button onClick={handleRedirect} className="mt-4 bg-black text-white px-4 mr-2 py-2 rounded">
          Login
        </button>
        {/* <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Popup;
