import Dropdown from "./Dropdown";

const MainNavigation = () => {
  const Categories = [
    {
      id: 1,
      name: "Electronics",
      subCategories: ["smartphones", "laptops", "automotive", "motorcycle"],
    },
    {
      id: 2,
      name: "Personal Care",
      subCategories: ["skincare", "fragrances"],
    },
    {
      id: 3,
      name: "Groceries",
      subCategories: ["groceries"],
    },
    {
      id: 4,
      name: "Home Decoration",
      subCategories: ["home-decoration", "furniture", "lighting"],
    },
    {
      id: 5,
      name: "Clothes",
      subCategories: [
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
      ],
    },
    {
      id: 6,
      name: "Accessories",
      subCategories: [
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
      ],
    },
  ];

  return (
    <nav className="flex justify-center">
      <ul className="list-none flex justify-between items-center gap-5 flex-wrap">
        {Categories.map((category, index) => (
          <li key={index}>
            <Dropdown category={category} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MainNavigation;
