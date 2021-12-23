import { useRouter } from "next/router";
import React from "react";
function Notfound() {
    const router = useRouter();

    return (
        <div className="select-none">
            <div className="bg-dark-800 relative overflow-hidden h-screen">
                <div className="inset-0 bg-black opacity-25 absolute"></div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                            You&#x27;re alone here
                        </h1>
                        <p className="font-extrabold text-8xl my-44 text-green-400 animate-bounce">
                            404
                        </p>
                        <button
                            // onClick={() => router.back}
                            onClick={() => router.replace("/")}
                            className="p-2 pl-5 pr-5 bg-transparent border-2 border-green-400 text-green-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-green-400 hover:text-gray-100 focus:border-4 focus:border-green-300">
                            GO BACK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Notfound;
