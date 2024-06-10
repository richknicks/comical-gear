import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
    return (
        <div
        id="categories-container"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12"
      >
        {categories.map(( category ) => (
           <CategoryItem key={ category.id } category={ category }/>
        ))}
      </div>
    )
}

export default Directory;