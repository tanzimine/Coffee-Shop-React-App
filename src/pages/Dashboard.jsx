import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Card from "../components/Card";
import { getAllFavorites, removeFavorite } from "../utils";

const Dashboard = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = getAllFavorites();
    setFavorites(favs);
  }, []);

  const handleDelete = (coffeeId) => {
    const updatedFavorites = removeFavorite(coffeeId, toast);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl shadow-xl mb-8">
            <span className="text-4xl text-white">☕</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Your Coffee Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover and manage your favorite coffee selections. Each card represents a unique coffee experience you've saved.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📊</span>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {favorites.length}
            </div>
            <div className="text-gray-600 font-medium">Total Favorites</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">⭐</span>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {favorites.filter(fav => fav.rating >= 4.5).length}
            </div>
            <div className="text-gray-600 font-medium">Premium Picks</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📈</span>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {favorites.length > 0 ? Math.round(favorites.reduce((acc, fav) => acc + fav.rating, 0) / favorites.length * 10) / 10 : 0}
            </div>
            <div className="text-gray-600 font-medium">Avg Rating</div>
          </div>
        </div>

        {/* Content Section */}
        {favorites.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Your Favorites ({favorites.length})
              </h2>
              <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
                Hover over cards to see delete options
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {favorites.map((coffee) => (
                <Card 
                  key={coffee.id} 
                  coffee={coffee} 
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl mb-8">
              <span className="text-6xl">☕</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-700 mb-6">
              No favorites yet
            </h3>
            <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg leading-relaxed">
              Start exploring our coffee collection and add your favorites to see them here. Each coffee has a unique story waiting to be discovered.
            </p>
            <div className="space-y-6 max-w-lg mx-auto">
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">💡</span>
                </div>
                <span className="text-gray-600">Browse our coffee selection</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">❤️</span>
                </div>
                <span className="text-gray-600">Add coffees to your favorites</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-500">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <span className="text-gray-600">Manage your collection here</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
