import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));//item
        toast.error("Item Removed");

    }
    return (
        <div className="flex flex-col">
            <div className="flex justify-between gap-10">

                <div>
                    <img src={item.image} className="w-30% w-[292px] h-[280px]" />
                </div>
                <div className="flex flex-col gap-3 h-[250px] justify-between">
                    <h1 className="font-semibold text-red-800 text-3xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                    <div className="flex justify-between ">
                        <p className="text-2xl font-bold text-green-600">${item.price}</p>
                        <div
                            onClick={removeFromCart}
                            className="flex items-center justify-center w-10 h-10 border-2 border-red-800 bg-red-500 rounded-full hover:bg-white hover:text-red-600 transition duration-300 ease-in-out"
                        >
                            <MdDelete className="text-xl text-black-800" />
                        </div>

                    </div>

                </div>



            </div>
            <div className="border-b-4 border-gray-500 w-full my-2"></div>

        </div>
    );
};
export default CartItem;