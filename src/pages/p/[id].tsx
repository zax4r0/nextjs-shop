import { StarIcon, WarningIcon } from "@chakra-ui/icons";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Im not in mood to make TS happy
const SinglePost: NextPage = ({ product }: any) => {
    return (
        <>
            <div className=" my-7 mx-10 card  flex flex-col justify-center p-20 bg-white  rounded-lg shadow-2xl">
                <Image
                    src={product.image}
                    layout="fixed"
                    height={200}
                    width={200}
                    className="w-full object-cover object-center"
                    alt={product.title}
                />
                <div className="prod-info grid gap-10">
                    <p className="text-xl uppercase text-gray-900 font-bold sm:text-small">
                        {product.title}
                    </p>
                    <p className=" text-lg text-gray-800  sm:text-sm">{product.description}</p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                        <p className=" mr-2 font-bold text-xl sm:text-sm">
                            Price $\{product.price}
                        </p>
                        <p className=" mr-2 font-bold text-xl sm:text-sm">
                            Category: {product.category}
                        </p>
                        <p className=" mr-2 font-bold text-xl sm:text-sm">
                            <StarIcon /> {product.rating.rate}
                        </p>
                        <p className=" mr-2 font-bold text-xl sm:text-sm">
                            <WarningIcon /> {product.rating.count}
                        </p>

                        <Link href={"/"}>
                            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SinglePost;

export const getServerSideProps = async context => {
    const id = context.query.id;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Api.Product = await res.json();

    return {
        props: {
            product: product,
        },
    };
};
