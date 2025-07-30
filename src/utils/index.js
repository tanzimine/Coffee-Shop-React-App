import toast from 'react-hot-toast';

//get all coffees from local storage
const getAllFavorites = ()=>{
    const all = localStorage.getItem('favorites');
    
    if (all){
        const favorites = JSON.parse(all);
        return favorites;
    }
    else{
        return [];
    }
}

//add a coffee to local storage
const addFavorite = (coffee)=>{
    //get all previously saved coffee data
    const favorites = getAllFavorites();
    const isExist = favorites.find(item =>item.id === coffee.id);
    if (isExist) return toast.error('Already Exists')
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added to favorites!');
}

//remove a coffee from local storage
const removeFavorite = (coffeeId) => {
    const favorites = getAllFavorites();
    const updatedFavorites = favorites.filter(item => item.id !== coffeeId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    toast.success('Removed from favorites!');
    return updatedFavorites;
}

export {addFavorite, getAllFavorites, removeFavorite}
