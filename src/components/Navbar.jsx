import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
      {/* item center se y axis pe  bich me aa rhe h  */}
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/shop-2373484-1980334.png?f=webp&w=256"
              width="50px"
            ></img>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to={"/"}>
            {" "}
            <p>Home</p>
          </NavLink>

          <NavLink to={"/cart"}>
            <div className="relative">
              <FaShoppingCart className="text-2xl"></FaShoppingCart>
              {cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-sm w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
