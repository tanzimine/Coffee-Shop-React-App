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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
            <span className="text-3xl">☕</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Your Coffee Collection
          </h1>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto">
            Discover and manage your favorite coffee selections. Each card represents a unique coffee experience you've saved.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {favorites.length}
            </div>
            <div className="text-gray-600">Total Favorites</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {favorites.filter(fav => fav.rating >= 4.5).length}
            </div>
            <div className="text-gray-600">Premium Picks</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {favorites.length > 0 ? Math.round(favorites.reduce((acc, fav) => acc + fav.rating, 0) / favorites.length * 10) / 10 : 0}
            </div>
            <div className="text-gray-600">Avg Rating</div>
          </div>
        </div>

        {/* Content Section */}
        {favorites.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your Favorites ({favorites.length})
              </h2>
              <div className="text-sm text-gray-500">
                Hover over cards to see delete options
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-100 rounded-full mb-6">
              <span className="text-4xl">☕</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              No favorites yet
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Start exploring our coffee collection and add your favorites to see them here. Each coffee has a unique story waiting to be discovered.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span>💡</span>
                <span>Browse our coffee selection</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span>❤️</span>
                <span>Add coffees to your favorites</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span>📱</span>
                <span>Manage your collection here</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
