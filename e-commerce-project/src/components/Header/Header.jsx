import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../public/logo.svg";
import Categories from "./MainNavigation";
const Header = () => {
  return (
    <div className="flex flex-col gap-y-10 shadow-lg py-5 px-28">
      <div className="flex justify-around items-center pt-6">
        <div className="w-12 ">
          <img className="w-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center border border-gray-400 w-1/2 rounded">
          <div className="flex justify-center items-center py-2">
            <div className="px-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#d8dee4" }}
              />
            </div>
            <div>
              <input
                type="text"
                className="pl-4 pr-2 w-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <button className="bg-slate-300 rounded-r  p-2">Search</button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <button className="py-2 px-4 border border-gray-400 rounded flex items-center justify-center gap-x-2">
            <FontAwesomeIcon icon={faUser} style={{ color: "#8490a9" }} />
            Profile
          </button>
          <button className="py-2 px-4 border border-gray-400 rounded flex items-center justify-center gap-x-2">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#8490a9" }}
            />
            Cart
          </button>
        </div>
      </div>
      <Categories />
    </div>
  );
};
export default Header;
