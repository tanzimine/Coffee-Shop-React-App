import React from "react";
import { Link, useLocation } from "react-router-dom";
import { removeFavorite } from "../utils";

const Card = ({ coffee, onDelete }) => {
  const { pathname } = useLocation();
  const {
    name,
    image,
    description,
    rating,
    origin,
    type,
    category,
    nutrition_info,
    popularity,
  } = coffee;

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete) {
      onDelete(coffee.id);
    }
  };

  return (
    <div className="relative group">
      <Link to={`/coffee/${coffee.id}`} className="block">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-amber-200">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Popularity Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {popularity}% Popular
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {category}
            </div>

            {/* Rating Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              <span className="text-amber-500 mr-1">★</span>
              {rating}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 mb-2">
                {name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>

            {/* Origin and Type */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-amber-500 mr-2 text-lg">📍</span>
                <span className="text-sm text-gray-700 font-medium">{origin}</span>
              </div>
              <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200">
                {type}
              </span>
            </div>

            {/* Nutrition Info */}
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Nutrition (per serving)
              </h4>
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-800 text-lg">
                    {nutrition_info.calories}
                  </div>
                  <div className="text-gray-500 text-xs">Cal</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-800 text-lg">
                    {nutrition_info.fat}g
                  </div>
                  <div className="text-gray-500 text-xs">Fat</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-800 text-lg">
                    {nutrition_info.carbohydrates}g
                  </div>
                  <div className="text-gray-500 text-xs">Carbs</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="font-bold text-gray-800 text-lg">
                    {nutrition_info.protein}g
                  </div>
                  <div className="text-gray-500 text-xs">Protein</div>
                </div>
              </div>
            </div>

            {/* Hover Effect Indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-amber-500 text-white p-2 rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Delete Button - Only show on dashboard */}
      {pathname === "/dashboard" && (
        <button
          onClick={handleDelete}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-0 z-10 border-2 border-white"
          title="Remove from favorites"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Card;
