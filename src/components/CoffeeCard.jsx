import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {
    const { category } = useParams();
    const coffees = useLoaderData();

    // const [filteredCoffees, setFilteredCoffees] = useState([]);
    const [allCoffees, setAllCoffees] = useState([]);

    useEffect(() => {
        if(category){
            const filtered = [...coffees].filter(coffee => coffee.category === category);
            setAllCoffees(filtered);
        }
        else{
            setAllCoffees(coffees.slice(0, 6))
        }
    }, [category, coffees]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                (allCoffees.map(coffee => (
                    <Card key={coffee.id} coffee={coffee}></Card>
                )))
            }

        </div>
    );
};

export default CoffeeCard;
