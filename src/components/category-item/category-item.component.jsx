const CategoryItem = ({ category }) => {
    const { imageUrl, title, id } = category;
    return (
        <div
          id="category-container"
          className="min-w-32 h-auto flex flex-col items-center justify-center border border-black rounded-3xl shadow-lg mt-0 mx-1 mb-4 overflow-hidden hover:cursor-pointer"
          key={id}
        >
         <div className="flex flex-col w-full h-full">
         <div id="image" className="h-3/4">
            <img src={`${imageUrl}`} className="w-full h-full object-cover" />
          </div>
          <div
            id="category-label-container"
            className="w-full h-1/4 py-2 px-2 flex flex-row items-center justify-center gap-4 border-t border-black"
          >
            <h2
              id="category-name"
              className="font-bold text-22 text-gray-700"
            >
              {title}
            </h2>
            <p id="call-to-action" className="font-light text-16">
              Shop Now
            </p>
          </div>
         </div>
        </div>
    )
}

export default CategoryItem