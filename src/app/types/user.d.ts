declare module User {
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
}
