import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { Star, Clock, Users, MapPin, Coffee, ShoppingCart, CheckCircle, X } from 'lucide-react';
import { addFavorite } from '../utils';

const CoffeeDetails = () => {
    const { coffeeId } = useParams();
    const coffees = useLoaderData();
    const [coffee, setCoffee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [orderForm, setOrderForm] = useState({
        quantity: 1,
        size: 'medium',
        name: '',
        email: '',
        phone: '',
        specialInstructions: ''
    });

    useEffect(() => {
        const foundCoffee = coffees.find(c => c.id === parseInt(coffeeId));
        setCoffee(foundCoffee);
        setLoading(false);
    }, [coffeeId, coffees]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!orderForm.name || !orderForm.email || !orderForm.phone) {
            alert('Please fill in all required fields!');
            return;
        }

        // Close order form and show confirmation
        setShowOrderForm(false);
        setShowConfirmation(true);
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
        // Reset form
        setOrderForm({
            quantity: 1,
            size: 'medium',
            name: '',
            email: '',
            phone: '',
            specialInstructions: ''
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="loading loading-spinner loading-lg text-primary"></div>
            </div>
        );
    }

    if (!coffee) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-error mb-4">Coffee Not Found</h2>
                    <p className="text-gray-600">The coffee you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
        }
        return stars;
    };


    // Calculate total price
    const sizePrices = { small: 3, medium: 4, large: 5 };
    const totalPrice = sizePrices[orderForm.size] * orderForm.quantity;


    // handle favorite btn click
    const handleFavorite = (coffee) =>{
        addFavorite(coffee);
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="text-sm breadcrumbs mb-6">
                    <ul>
                        <li><a href="/" className="text-primary hover:text-primary-focus">Home</a></li>
                        <li><a href="/coffees" className="text-primary hover:text-primary-focus">Coffees</a></li>
                        <li className="text-gray-600">{coffee.name}</li>
                    </ul>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Image and Basic Info */}
                    <div className="space-y-6">
                        {/* Coffee Image */}
                        <div className="relative group">
                            <img 
                                src={coffee.image} 
                                alt={coffee.name}
                                className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                                <div className="badge badge-primary badge-lg font-semibold">
                                    {coffee.category}
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-white rounded-xl shadow-lg">
                                <div className="stat-figure text-primary">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div className="stat-title">Rating</div>
                                <div className="stat-value text-primary">{coffee.rating}</div>
                                <div className="stat-desc flex items-center gap-1">
                                    {renderStars(coffee.rating)}
                                </div>
                            </div>
                            <div className="stat bg-white rounded-xl shadow-lg">
                                <div className="stat-figure text-secondary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div className="stat-title">Popularity</div>
                                <div className="stat-value text-secondary">{coffee.popularity}%</div>
                                <div className="stat-desc">Customer favorite</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">{coffee.name}</h1>
                            <div className="flex items-center gap-4 text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{coffee.origin}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Coffee className="w-4 h-4" />
                                    <span className="capitalize">{coffee.type}</span>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">{coffee.description}</p>
                        </div>

                        {/* Ingredients */}
                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-xl mb-4">Ingredients</h3>
                                <div className="flex flex-wrap gap-2">
                                    {coffee.ingredients.map((ingredient, index) => (
                                        <div key={index} className="badge badge-outline badge-lg">
                                            {ingredient}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Nutrition Information */}
                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-xl mb-4">Nutrition Information</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-3 bg-amber-50 rounded-lg">
                                        <div className="text-2xl font-bold text-amber-600">{coffee.nutrition_info.calories}</div>
                                        <div className="text-sm text-gray-600">Calories</div>
                                    </div>
                                    <div className="text-center p-3 bg-red-50 rounded-lg">
                                        <div className="text-2xl font-bold text-red-600">{coffee.nutrition_info.fat}g</div>
                                        <div className="text-sm text-gray-600">Fat</div>
                                    </div>
                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600">{coffee.nutrition_info.carbohydrates}g</div>
                                        <div className="text-sm text-gray-600">Carbs</div>
                                    </div>
                                    <div className="text-center p-3 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">{coffee.nutrition_info.protein}g</div>
                                        <div className="text-sm text-gray-600">Protein</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Making Process */}
                        <div className="card bg-white shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-xl mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    How to Make
                                </h3>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {coffee.making_process}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button 
                                onClick={() => setShowOrderForm(true)}
                                className="btn btn-primary btn-lg flex-1 flex items-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Order Now
                            </button>
                            <button onClick={()=>handleFavorite(coffee)} className="btn btn-outline btn-lg">
                                Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>

                {/* Order Form Modal */}
                {showOrderForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Order {coffee.name}</h2>
                                    <button 
                                        onClick={() => setShowOrderForm(false)}
                                        className="btn btn-circle btn-sm btn-ghost"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <form onSubmit={handleOrderSubmit} className="space-y-4">
                                    {/* Coffee Selection */}
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-3 mb-3">
                                            <img src={coffee.image} alt={coffee.name} className="w-12 h-12 object-cover rounded-lg" />
                                            <div>
                                                <h3 className="font-semibold">{coffee.name}</h3>
                                                <p className="text-sm text-gray-600">{coffee.category}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Quantity *</span>
                                        </label>
                                        <select 
                                            name="quantity" 
                                            value={orderForm.quantity}
                                            onChange={handleInputChange}
                                            className="select select-bordered w-full"
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>

                                    {/* Size */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Size *</span>
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <label className="flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
                                                <input 
                                                    type="radio" 
                                                    name="size" 
                                                    value="small"
                                                    checked={orderForm.size === 'small'}
                                                    onChange={handleInputChange}
                                                    className="radio radio-primary"
                                                />
                                                <span className="text-sm font-medium mt-1">Small</span>
                                                <span className="text-xs text-gray-500">$3</span>
                                            </label>
                                            <label className="flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
                                                <input 
                                                    type="radio" 
                                                    name="size" 
                                                    value="medium"
                                                    checked={orderForm.size === 'medium'}
                                                    onChange={handleInputChange}
                                                    className="radio radio-primary"
                                                />
                                                <span className="text-sm font-medium mt-1">Medium</span>
                                                <span className="text-xs text-gray-500">$4</span>
                                            </label>
                                            <label className="flex flex-col items-center p-3 border rounded-lg cursor-pointer hover:bg-amber-50">
                                                <input 
                                                    type="radio" 
                                                    name="size" 
                                                    value="large"
                                                    checked={orderForm.size === 'large'}
                                                    onChange={handleInputChange}
                                                    className="radio radio-primary"
                                                />
                                                <span className="text-sm font-medium mt-1">Large</span>
                                                <span className="text-xs text-gray-500">$5</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Customer Details */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Your Name *</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={orderForm.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email Address *</span>
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={orderForm.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Phone Number *</span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={orderForm.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Special Instructions</span>
                                        </label>
                                        <textarea 
                                            name="specialInstructions"
                                            value={orderForm.specialInstructions}
                                            onChange={handleInputChange}
                                            placeholder="Any special requests? (optional)"
                                            className="textarea textarea-bordered w-full"
                                            rows={3}
                                        ></textarea>
                                    </div>

                                    {/* Total Price */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Total Price:</span>
                                            <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary w-full btn-lg"
                                    >
                                        Place Order - ${totalPrice}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Order Confirmation Modal */}
                {showConfirmation && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
                            <div className="p-8 text-center">
                                {/* Success Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-12 h-12 text-green-600" />
                                    </div>
                                </div>

                                {/* Success Message */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
                                <p className="text-gray-600 mb-6">Thank you for your order. We'll contact you soon to confirm the details.</p>

                                {/* Order Summary */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Order Summary</h3>
                                    <div className="space-y-2 text-left">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Coffee:</span>
                                            <span className="font-medium">{coffee.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Size:</span>
                                            <span className="font-medium capitalize">{orderForm.size}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Quantity:</span>
                                            <span className="font-medium">{orderForm.quantity}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Total:</span>
                                            <span className="font-bold text-primary">${totalPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <p className="text-sm text-gray-700">
                                        We'll contact you at <span className="font-semibold text-blue-600">{orderForm.email}</span> 
                                        to confirm your order and arrange pickup or delivery.
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button 
                                        onClick={closeConfirmation}
                                        className="btn btn-primary flex-1"
                                    >
                                        Continue Shopping
                                    </button>
                                    <button 
                                        onClick={() => {
                                            closeConfirmation();
                                            setShowOrderForm(true);
                                        }}
                                        className="btn btn-outline flex-1"
                                    >
                                        Order Another
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Related Coffees Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">You Might Also Like</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {coffees
                            .filter(c => c.category === coffee.category && c.id !== coffee.id)
                            .slice(0, 3)
                            .map(relatedCoffee => (
                                <div key={relatedCoffee.id} className="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                                    <figure className="px-6 pt-6">
                                        <img 
                                            src={relatedCoffee.image} 
                                            alt={relatedCoffee.name}
                                            className="w-full h-48 object-cover rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h3 className="card-title">{relatedCoffee.name}</h3>
                                        <p className="text-gray-600">{relatedCoffee.description.substring(0, 100)}...</p>
                                        <div className="card-actions justify-end">
                                            <a href={`/coffee/${relatedCoffee.id}`} className="btn btn-primary btn-sm">
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;