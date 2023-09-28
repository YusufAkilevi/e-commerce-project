import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex justify-around items-center pt-6">
        <div>Logo</div>
        <div className="flex justify-center items-center border-2 border-black rounded">
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
            <button className="bg-slate-300 p-2">ARA</button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <button className="py-2 px-4 border-2 border-black rounded flex items-center justify-center gap-x-2">
            <FontAwesomeIcon icon={faUser} style={{ color: "#8490a9" }} />
            Profile
          </button>
          <button className="py-2 px-4 border-2 border-black rounded flex items-center justify-center gap-x-2">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#8490a9" }}
            />
            Cart
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <a href="#" className="border-2 rounded border-black py-2 px-4">
          Electronics
        </a>
        <a href="#" className="border-2 rounded border-black py-2 px-4">
          Personal Care
        </a>
        <a href="#" className="border-2 rounded border-black py-2 px-4">
          Groceries
        </a>
        <a href="#" className="border-2 rounded border-black py-2 px-4">
          Home Decoration
        </a>
        <a href="#" className="border-2 rounded border-black py-2 px-4">
          Clothes
        </a>
        <a href="#" className="border-2 rounded border-black py-2 px-4">
          Accessories
        </a>
      </div>
    </div>
  );
};
export default Header;
