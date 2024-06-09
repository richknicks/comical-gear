import CategoryItem from "./components/category-item/category-item.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: `https://placeit.net/uploads/preview_image/136577/image/large_thumb_override_image_4743d5b095d888817a4e2f22fc6dc4aa.jpg`,
      // imageUrl: `${process.env.PUBLIC_URL}/images/bat-logo.png`,
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: `https://placeit.net/uploads/preview_image/135633/image/large_thumb_override_image_0022fd4fe54d76e0131c9ac0edcc3241.jpg`,
      // imageUrl: `${process.env.PUBLIC_URL}/images/Gnh-skull.png`,
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: `https://placeit.net/uploads/preview_image/135368/image/large_thumb_override_image_672a17be764182b3bb061a4aeb8c78de.jpg`,
      // imageUrl: `${process.env.PUBLIC_URL}/images/Jordancry.png`,
    },
    {
      id: 4,
      title: "Mens",
      imageUrl: `https://placeit.net/uploads/preview_image/136648/image/large_thumb_override_image_ae0586ac7652a9676555e375a7ded225.jpg`,
      // imageUrl: `${process.env.PUBLIC_URL}/images/Knicks.png`,
    },
    {
      id: 5,
      title: "Womens",
      imageUrl: `https://placeit.net/uploads/preview_image/135458/image/large_thumb_override_image_040f088e9efd97a958a35ee8570d2d71.jpg`,
      // imageUrl: `${process.env.PUBLIC_URL}/images/Sesame-street.png`,
    },
  ];

  return (
    <div
      id="categories-container"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12"
    >
      {categories.map(( category ) => (
         <CategoryItem key={ category.id } category={ category }/>
      ))}
    </div>
  );
};

export default App;
