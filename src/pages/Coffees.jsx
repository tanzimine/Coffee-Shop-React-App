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
        const sorted = [...coffees].sort((a, b) => b.popularity - a.popularity);
        setAllCoffees(sorted);
    };

    const handleSortByRating = () => {
        
        const sorted = [...coffees].sort((a, b) => b.rating - a.rating);
        setAllCoffees(sorted);
    };

    return (
        <>
            <div className="flex justify-center gap-4 mb-4">
                <button onClick={handleSortByPopularity} className="btn btn-outline">
                    Sort by Popularity
                </button>
                <button onClick={handleSortByRating} className="btn btn-outline">
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
