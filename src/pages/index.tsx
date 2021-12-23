import type { NextPage } from "next";
import requests from "../app/lib/requests";
import Item from "../components/Card/Item";
import Nav from "../components/NavBar/Nav";
import FlipMove from "react-flip-move";

const Home: NextPage<Api.ProductList> = ({ products }) => {
    return (
        <>
            <Nav></Nav>

            <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4  3xl:flex flex-wrap justify-center transition-all duration-300 ">
                {products.map(product => (
                    <div key={product.id}>
                        <Item
                            image={product.image}
                            title={product.title}
                            product={product}
                            price={product.price}
                            description={product.description}
                            id={product.id}
                            category={product.category}
                            cartQuantity={0}></Item>
                    </div>
                ))}
            </FlipMove>
        </>
    );
};

export default Home;
type Data = { results: any };

export const getServerSideProps = async context => {
    const category = context.query.category;
    const page = context.query.page || 1;
    // const page = 10
    const res = await fetch(
        `https://fakestoreapi.com${requests[category]?.url || requests.fetchProducts.url}`
    );
    const products: Api.Product = await res.json();

    return {
        props: {
            products: products,
        },
    };
};
