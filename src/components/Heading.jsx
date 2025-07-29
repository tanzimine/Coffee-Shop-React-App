import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-6 mt-3 text-center">
      <h1 className="text-3xl font-semibold text-gray-750">{title}</h1>
      <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Heading;
