import { ChevronLeftIcon, DeleteIcon, MinusIcon, MoonIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/redux";
import {
    getTotals,
    removeFromCart,
    decreesCountCart,
    clearCart,
} from "../app/redux/reducer/cartSlice";

const Home: NextPage<Api.ProductList> = () => {
    const cart = useSelector((state: RootState) => ({ cart: state.cart }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    const handelRemoveFromCart = cartItem => {
        dispatch(removeFromCart(cartItem));
    };

    const handeldecreeseFromCart = cartItem => {
        dispatch(decreesCountCart(cartItem));
    };

    const handelclearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <Link href={"/"}>
                <ChevronLeftIcon height={50} width={50} />
            </Link>
            <div>
                {cart.cart.CartItem.length === 0 ? (
                    <>
                        <p>your cart is empty</p>
                        <Link href={"/"}>
                            <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                <svg
                                    aria-hidden="true"
                                    data-prefix="far"
                                    data-icon="credit-card"
                                    className="w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512">
                                    <path
                                        fill="currentColor"
                                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                                    />
                                </svg>
                                <span className="ml-2 mt-5px">Go Back to Home</span>
                            </button>
                        </Link>
                    </>
                ) : (
                    <div className="flex justify-center my-6">
                        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                            <div className="flex-1">
                                <table className="w-full text-sm lg:text-base">
                                    <thead>
                                        <tr className="h-12 uppercase">
                                            <th className="hidden md:table-cell"></th>
                                            <th className="text-left">Product</th>
                                            <th className="lg:text-right text-left pl-5 lg:pl-0">
                                                <span className="lg:hidden" title="Quantity">
                                                    Qtd
                                                </span>
                                                {/* <span className="hidden lg:inline">Quantity</span> */}
                                            </th>
                                            <th className="hidden text-right md:table-cell">
                                                Unit price
                                            </th>
                                            <th className="text-right">Total item</th>
                                            <th className="text-right">Total price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.cart.CartItem.map((item: Api.Product) => (
                                            <tr key={item.id}>
                                                <td className="hidden pb-4 md:table-cell">
                                                    <Image
                                                        src={item.image}
                                                        layout="intrinsic"
                                                        height={100}
                                                        width={100}
                                                        className="w-20 rounded"
                                                        alt={item.title}
                                                    />
                                                </td>
                                                <td>
                                                    <p className="mb-2 md:ml-4">{item.title}</p>
                                                </td>
                                                <td className="justify-center md:justify-end md:flex mt-6">
                                                    <div className="w-20 h-10">
                                                        <div className="relative flex flex-row w-full h-8">
                                                            <button
                                                                onClick={() =>
                                                                    handelRemoveFromCart(item)
                                                                }
                                                                className="button">
                                                                <DeleteIcon />
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="hidden text-right md:table-cell">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        {item.price}
                                                    </span>
                                                </td>
                                                <td className="text-right">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        {item.cartQuantity}
                                                    </span>
                                                    <button
                                                        onClick={() => handeldecreeseFromCart(item)}
                                                        className="button mx-1 text-red-400 ">
                                                        <MinusIcon />
                                                    </button>
                                                </td>
                                                <td className="text-right">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        ${item.price * item.cartQuantity}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <hr className="pb-6 mt-6" />
                                <div className="my-4 mt-6 -mx-2 lg:flex">
                                    <div className="lg:px-2 lg:w-1/2">
                                        <div className="p-4 bg-gray-100 rounded-full">
                                            <h1 className="ml-2 font-bold uppercase">
                                                Order Details
                                            </h1>
                                        </div>
                                        <div className="p-4">
                                            <p className="mb-6 italic">
                                                Shipping and additionnal costs are calculated based
                                                on values you have entered
                                            </p>

                                            <div className="flex justify-between pt-4 border-b">
                                                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Total
                                                </div>
                                                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    ${cart.cart.cartTotalAmount}
                                                </div>
                                            </div>

                                            <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                                <svg
                                                    aria-hidden="true"
                                                    data-prefix="far"
                                                    data-icon="credit-card"
                                                    className="w-8"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 576 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                                                    />
                                                </svg>
                                                <span className="ml-2 mt-5px">
                                                    Procceed to checkout
                                                </span>
                                            </button>

                                            <button
                                                className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-red-400 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                                                onClick={() => handelclearCart()}>
                                                Clear cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
