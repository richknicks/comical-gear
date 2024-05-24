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
    <div className="flex flex-wrap size-full justify-between">
      {categories.map(({ title, id }) => (
        <div className="min-w-32 h-60 flex-auto" key={id}>
          <div className="background-image"/>
          <div className="category-body-container">
            <h2 className="text-3xl font-bold underline">{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
