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
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Popularity Badge */}
            <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {popularity}% Popular
            </div>
            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-amber-700 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                {name}
              </h3>
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="ml-1 text-sm font-semibold text-gray-600">
                  {rating}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {description}
            </p>

            {/* Origin and Type */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-orange-500 mr-1">📍</span>
                <span className="text-sm text-gray-700">{origin}</span>
              </div>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                {type}
              </span>
            </div>

            {/* Nutrition Info */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Nutrition (per serving)
              </h4>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-semibold text-gray-800">
                    {nutrition_info.calories}
                  </div>
                  <div className="text-gray-500">Cal</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">
                    {nutrition_info.fat}g
                  </div>
                  <div className="text-gray-500">Fat</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">
                    {nutrition_info.carbohydrates}g
                  </div>
                  <div className="text-gray-500">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800">
                    {nutrition_info.protein}g
                  </div>
                  <div className="text-gray-500">Protein</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Delete Button - Only show on dashboard */}
      {pathname === "/dashboard" && (
        <button
          onClick={handleDelete}
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 group-hover:opacity-100 opacity-0 z-10"
          title="Remove from favorites"
        >
          <svg 
            className="w-4 h-4" 
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
