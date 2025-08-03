import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Card from '../components/Card';

const Coffees = () => {
    const { category } = useParams();
    const coffees = useLoaderData();
    const [allCoffees, setAllCoffees] = useState([]);

    useEffect(() => {
        setAllCoffees(coffees);
    }, [category, coffees]);

    const handleSortByPopularity = () => {
        //sorting by popularity
        const sorted = [...coffees].sort((a, b) => b.popularity - a.popularity);
        setAllCoffees(sorted);
    };

    const handleSortByRating = () => {
        //sort by rating
        const sorted = [...coffees].sort((a, b) => b.rating - a.rating);
        setAllCoffees(sorted);
    };

    return (
        <>
            <div className="flex justify-center gap-4 mb-8">
                <button 
                    onClick={handleSortByPopularity} 
                    className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-amber-300 hover:text-amber-700"
                >
                    Sort by Popularity
                </button>
                <button 
                    onClick={handleSortByRating} 
                    className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-amber-300 hover:text-amber-700"
                >
                    Sort by Rating
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allCoffees.map(coffee => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))
                }
            </div>
        </>
    );
};

export default Coffees;
