import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const Category = [
    {
      id: 1,
      name: "Electronics",
      link: "/electronics",
    },
    {
      id: 2,
      name: "Personal Care",
      link: "/personal-care",
    },
    {
      id: 3,
      name: "Groceries",
      link: "/groceries",
    },
    {
      id: 4,
      name: "Home Decoration",
      link: "/home-decoration",
    },
    {
      id: 5,
      name: "Clothes",
      link: "/clothes",
    },
    {
      id: 6,
      name: "Accessories",
      link: "/accessories",
    },
  ];

  return (
    <nav className="flex justify-between items-center">
      {Category.map((a, index) => (
        <ul
          key={index}
          className="list-none flex justify-between items-center flex-wrap"
        >
          <li>
            <NavLink
              to={a.link}
              className="border rounded border-gray-400 py-2 px-10"
            >
              {a.name}
            </NavLink>
          </li>
        </ul>
      ))}
    </nav>
  );
};
export default MainNavigation;
