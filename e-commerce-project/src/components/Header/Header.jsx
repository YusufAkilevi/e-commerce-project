import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.svg";
import MainNavigation from "./MainNavigation";
const Header = () => {
  return (
    <div className="flex flex-col gap-y-10 shadow-lg py-5 px-28">
      <div className="flex justify-around items-center pt-6">
        <div className="w-12 ">
          <img className="w-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center border border-gray-400 w-1/2 rounded-md">
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
            <button className="bg-gray-600 hover:bg-gray-400 text-white rounded-r p-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <button className="py-2 px-4 bg-gray-600 text-white hover:bg-gray-400 rounded flex items-center justify-center gap-x-2 font-medium">
            <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
            Profile
          </button>
          <button className="py-2 px-4 bg-gray-600 text-white hover:bg-gray-400 rounded flex items-center justify-center gap-x-2 font-medium">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
            Cart
            <span className="bg-slate-500  rounded-lg px-2">0</span>
          </button>
        </div>
      </div>
      <MainNavigation />
    </div>
  );
};
export default Header;
