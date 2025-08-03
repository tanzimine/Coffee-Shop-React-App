import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-6">
                <span className="text-2xl">☕</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;
