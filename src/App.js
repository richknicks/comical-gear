const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div
      id="categories-container"
      className="flex flex-wrap size-full justify-between"
    >
      {categories.map(({ title, id }) => (
        <div
          id="category-container"
          className="min-w-32 h-60 flex flex-auto items-center justify-center border border-black mt-0 mx-8 mb-16 overflow-hidden hover:cursor-pointer"
          key={id}
        >
          <div
            id="background-image"
            className="scale-110 transition-transform duration-600 w-full h-full bg-cover bg-center"
          />
          <div
            id="category-body-container"
            className="opacity-90 h-90 py-0 px-2 flex flex-col items-center justify-center border border-black bg-white absolute"
          >
            <h2
              id="category-name"
              className="font-bold mt-0 mx-2 mb-0 text-22 text-gray-700"
            >
              {title}
            </h2>
            <p id="call-to-action" className="font-light text-16">
              Shop Now
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
