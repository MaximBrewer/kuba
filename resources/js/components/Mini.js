import React, { useEffect, useState } from "react";
import useInputValue from "../components/input-value";
import client from "../api/client";
import { ArrowRight } from "../Icons";

// components

export default function Order() {
    let name = useInputValue("name");
    let email = useInputValue("email");
    let phone = useInputValue("phone");
    let message = useInputValue("message");

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        client("/api/order", {
            body: {
                name: name.value ? name.value : "",
                email: email.value ? email.value : "",
                phone: phone.value ? phone.value : "",
                message: message.value ? message.value : ""
            }
        })
            .then(({ data: message }) => {
                setShowAlert(message);
            })
            .catch(error => {
                error.json().then(({ errors }) => {
                    [
                        name,
                        email,
                        phone,
                        message
                    ].forEach(({ parseServerError }) =>
                        parseServerError(errors)
                    );
                });
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex">
                <div className="flex-grow flex items-center justify-center">
                    <input
                        type="email"
                        className={`w-full mr-4 bg-transparent border-b border-gray-700 text-gray-700 outline-none ${
                            email.error ? "border-red-500" : ""
                        }`}
                        placeholder=" "
                        id="email"
                        name="email"
                        required
                        {...email.bind}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={handleSubmit} className="w-8 outline-none">
                        <ArrowRight />
                    </button>
                </div>
            </form>
        </>
    );
}
