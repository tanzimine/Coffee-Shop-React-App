import React from 'react';
import bannerImg from '../assets/banner.jpg'
import Heading from '../components/Heading';
import { Outlet, useLoaderData, Link } from 'react-router';
import Categories from '../components/Categories';
const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <img src={bannerImg} alt="Banner" className="w-full max-h-96 object-cover rounded-md" />
            <Heading title="Browse Coffees by Category" subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."></Heading>

            {/* dynamic three tabs */}
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            
            {/* View All Button */}
            <div className="text-center mt-8">
                <Link 
                    to="/coffees" 
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                    View All Coffees
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Home;