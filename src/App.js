const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: `${process.env.PUBLIC_URL}/images/bat-logo.png`,
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: `${process.env.PUBLIC_URL}/images/Gnh-skull.png`,
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: `${process.env.PUBLIC_URL}/images/Jordancry.png`,
    },
    {
      id: 4,
      title: "Mens",
      imageUrl: `${process.env.PUBLIC_URL}/images/Knicks.png`,
    },
    {
      id: 5,
      title: "Womens",
      imageUrl: `${process.env.PUBLIC_URL}/images/Sesame-street.png`,
    },
  ];

  return (
    <div
      id="categories-container"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12"
    >
      {categories.map(({ title, id, imageUrl }) => (
        <div
          id="category-container"
          className="min-w-32 h-52 flex flex-auto items-center justify-center border border-black rounded-3xl shadow-lg mt-0 mx-1 mb-4 overflow-hidden hover:cursor-pointer"
          key={id}
        >
          <img src={`${imageUrl}`} className="w-full h-auto"/>
          <div
            id="category-label-container"
            className=" opacity-70 h-90 py-0 px-2 mt-40 flex flex-col item justify-center border border-black bg-white absolute"
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
