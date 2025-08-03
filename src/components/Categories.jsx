import { NavLink } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(category => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              isActive 
                ? 'px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-amber-500' 
                : 'px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-amber-300 hover:text-amber-700'
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Categories;
