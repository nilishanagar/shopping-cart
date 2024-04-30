import { MdDelete } from "react-icons/md";
import {useSelector, useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();


  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    toast.success(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-gray-200 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.image} className="h-28 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-gray-700 font-semibold">
              {item.title}
            </h1>
            <p>${item.price}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-gray-100 hover:bg-gray-300 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <MdDelete className="text-gray-800" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
