import React from 'react';
import bannerImg from '../assets/banner.jpg'
import Heading from '../components/Heading';
import { Outlet, useLoaderData, Link } from 'react-router';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative h-96 md:h-[500px]">
                    <img 
                        src={bannerImg} 
                        alt="Coffee Banner" 
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                    
                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-4xl mx-auto px-6 md:px-12">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                    Discover Your Perfect
                                    <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                        Coffee Experience
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                    From artisanal roasts to classic favorites, explore our curated collection 
                                    of premium coffees from around the world.
                                </p>
                                <Link 
                                    to="/coffees" 
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Explore Coffees
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="text-center">
                <Heading 
                    title="Browse Coffees by Category" 
                    subtitle="Choose your desired coffee category to browse through specific coffees that fit your taste."
                />
                <Categories categories={categories} />
            </div>

            {/* Coffee Cards Section */}
            <div className="space-y-8">
                <Outlet />
            </div>
            
            {/* CTA Section */}
            <div className="text-center py-12">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Ready to Explore More?
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Discover our complete collection of premium coffees, each with its own unique story and flavor profile.
                    </p>
                    <Link 
                        to="/coffees" 
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        View All Coffees
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;