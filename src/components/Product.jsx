import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../redux/slices/CartSlice";


const Product = ({ post }) => {

    const { cart } = useSelector((state) => state);//.cart
    const dispatch = useDispatch();

    const AddToCart = () => {

        dispatch(add(post));
        toast.success("Item added to cart");
    };

    const RemoveFromCart = () => {
        console.log("Removing item ID:", post.id);
        dispatch(remove(post.id));  //item-id check
        toast.error("Item Removed");
    };

    // console.log("Cart:", cart);
    // console.log("Post ID:", post?.id);
    console.log("Cart from Redux:", cart);
    console.log("Post ID:", post?.id);

    return (
        <div className='flex flex-col items-center justify-between 
    hover:scale-110 transition duration-0-300 ease-in
    gap-3 p-4 mt-10 ml-5 rounded-xl 
    shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className='h-[180px]'>
                <img src={post.image} alt={post.title} className='h-full w-full' />
            </div>

            <div className='flex justify-between gap-11 items-center w-full mt-5 '>
                <div>
                    <p className='text-green-600 fonst-semibold'>${post.price}</p>
                </div>

                {
                    Array.isArray(cart) && cart.length > 0 && cart.some((p) => p.id === post.id) ?
                        (<button
                        className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                        text-[12px] p-1 px-3 uppercase
                        hover:bg-gray-700
                        hover:text-white
                        transition duration-0-300 ease-in
                        '
                         onClick={RemoveFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                            text-[12px] p-1 px-3 uppercase
                            hover:bg-gray-700
                            hover:text-white
                            transition duration-0-300 ease-in
                            '
                        onClick={AddToCart}>
                            Add To Cart
                        </button>)
                }
            </div>




        </div>
    );
};


export default Product;
