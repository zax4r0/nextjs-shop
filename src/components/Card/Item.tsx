import { addToCart } from "../../app/redux/reducer/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

interface Product2 extends Api.Product {
    product: any;
    ref?: any;
}

// function Item({ image, title, description, product, price }: Product2) {

const Item = ({ image, title, description, product, price, id, ref }: Product2) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handelAddtoCart = (product: any) => {
        dispatch(addToCart(product));

        // this is annoy

        // router.push("/cart");
    };

    return (
        <>
            <div
                ref={ref}
                className="group cursor-pointer p-3 truncate mr-2 transition duration-300 ease-in transform sm:hover:scale-105 hover:z-50"></div>
            <div className=" my-7 mx-10 card  flex flex-col justify-center p-20 bg-white  rounded-lg shadow-2xl">
                <Image
                    src={image}
                    layout="responsive"
                    height={300}
                    width={200}
                    className="w-full object-cover object-center"
                    alt={title}
                />
                <div className="prod-info grid gap-10">
                    <p className="text-xl uppercase text-gray-900 font-bold md:text-small sm:text-small">
                        {title}
                    </p>
                    <p className=" text-lg text-gray-800 truncate sm:text-sm">{description}</p>
                    <div className="flex flex-col md:flex-col justify-between items-center text-gray-900">
                        <p className=" mr-2 font-bold text-xl sm:text-sm">$ {price}</p>
                        <button
                            onClick={() => handelAddtoCart(product)}
                            className="my-3 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                            Add to cart
                        </button>
                        <Link href="/p/[id]" as={`/p/${id}`}>
                            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Item;
