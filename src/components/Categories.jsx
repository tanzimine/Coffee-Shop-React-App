import { NavLink } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lift justify-center mb-2">
      {categories.map(category => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            isActive ? 'tab tab-active text-orange-500 border-orange-500' : 'tab'
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  )
}

export default Categories;
