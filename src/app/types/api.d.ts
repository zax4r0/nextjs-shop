declare module Api {
    interface Product {
        id: string;
        title: string;
        price: number;
        description: string;
        image: string;
        category: string;
        cartQuantity: number;
    }

    interface ProductList {
        products: Product[];
    }

    interface Category {
        categories: string[];
    }

    interface User {
        id: string;
        email: string;
        username: string;
        password: string;
        name: {
            firstname: string;
            lastname: string;
        };
        adress: {
            city: string;
            street: string;
            number: number;
            zipcode: string;
            geolocation: {
                lat: string;
                long: string;
            };
            phone: string;
        };
    }
    interface Page<T> {
        page: number;
        total_pages: number;
        total_results: number;
        results: T[];
    }
}
