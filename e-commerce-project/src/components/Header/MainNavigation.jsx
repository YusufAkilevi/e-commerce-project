import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul className="list-none flex justify-between items-center flex-wrap">
        <li>
          <NavLink
            to="electronics"
            className="border rounded border-gray-400 py-2 px-10"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="personal-care"
            className="border rounded border-gray-400 py-2 px-10"
          >
            Personal Care
          </NavLink>
        </li>
        <li>
          <NavLink
            to="groceries"
            className="border rounded border-gray-400 py-2 px-10"
          >
            Groceries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="home-decoration"
            className="border rounded border-gray-400 py-2 px-10"
          >
            Home Decoration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="clothes"
            className="border rounded border-gray-400 py-2 px-10"
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="accessories"
            className="border rounded border-gray-400 py-2 px-10"
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MainNavigation;
