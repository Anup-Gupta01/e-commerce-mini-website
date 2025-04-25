import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(Array.isArray(cart) && cart.reduce((acc, curr) => acc + curr.price, 0),);
    }, [cart])
    return (
        <div className="flex items-center justify-center  min-h-[calc(100vh-300px)]">
            {
                Array.isArray(cart) && cart.length > 0 ?
                    (<div className="w-5/6 mx-auto mt-2 p-4 shadow-lg rounded-lg flex justify-between gap-5 ">
                        <div className="w-4/5">
                            {
                                cart.map((item, index) => {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>

                        <div className="flex flex-col justify-between w-`1/5 ml-10 mr-9">
                            <div>
                                <div className="text-green-600 text-3xl font-semibold mt-9 ">Your Cart</div>
                                <div className="font-bold text-4xl text-green-800 ">Summary</div>
                                <p className="mt-10">
                                    <span className="text-2xl font-semibold">Total Items : {cart.length}</span>
                                </p>
                            </div>
                            <div className="mb-12 flex flex-col gap-8">
                                <p className="text-1xl font-semibold "> Total Amount :${totalAmount}</p>
                                <button className="px-6 py-3 text-xl font-semibold text-white transition-all duration-300 bg-green-700 border-2 border-green-800 rounded-lg hover:bg-white hover:text-green-600 transition duration-300 ease-in-out">
    Check out now
</button>

                            </div>
                        </div>

                    </div>
                    ) :

                    (<div className="flex flex-col gap-3 max-w-[34vw] min-h-[15vh] p-4">
                        <h1 className="font-bold text-center text-xl">Your cart is empty!</h1>

                        <div className="flex items-center justify-center">
                            <Link to={"/"}>
                                <button className="border-2 border-blue-500 rounded-lg px-6 py-3 bg-blue-500 text-white font-medium
                               hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                   )
            }
        </div>
    )
};

export default Cart;