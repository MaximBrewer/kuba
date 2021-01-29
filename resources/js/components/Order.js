import React, { useEffect, useState } from "react";
import useInputValue from "../components/input-value";
import client from "../api/client";

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
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    name.error ? "border-red-500" : ""
                                }`}
                                placeholder=" "
                                id="name"
                                name="name"
                                required
                                {...name.bind}
                            />
                            <label
                                htmlFor="name"
                                className="md-label px-1 text-gray-50"
                            >
                                Имя
                            </label>
                        </div>
                        {name.error && (
                            <p className="text-red-500 text-xs pt-2">
                                {name.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="email"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    email.error ? "border-red-500" : ""
                                }`}
                                placeholder=" "
                                id="email"
                                name="email"
                                required
                                {...email.bind}
                            />
                            <label
                                htmlFor="email"
                                className="md-label px-1 text-gray-50"
                            >
                                E-mail
                            </label>
                        </div>
                        {email.error && (
                            <p className="text-red-500 text-xs pt-2">
                                {email.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    phone.error ? "border-red-500" : ""
                                }`}
                                placeholder=" "
                                id="phone"
                                name="phone"
                                required
                                {...phone.bind}
                            />
                            <label
                                htmlFor="phone"
                                className="md-label px-1 text-gray-50"
                            >
                                Телефон
                            </label>
                        </div>
                        {phone.error && (
                            <p className="text-red-500 text-xs pt-2">
                                {phone.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    message.error ? "border-red-500" : ""
                                }`}
                                placeholder=" "
                                id="message"
                                name="message"
                                required
                                {...message.bind}
                            />
                            <label
                                htmlFor="message"
                                className="md-label px-1 text-gray-50"
                            >
                                Краткое описание
                            </label>
                        </div>
                        {message.error && (
                            <p className="text-red-500 text-xs pt-2">
                                {message.error}
                            </p>
                        )}
                    </div>
                </div>
                {showAlert ? (
                    <div
                        className={
                            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500"
                        }
                    >
                        <span className="inline-block align-middle mr-8">
                            Пароль изменен!
                        </span>
                        <button
                            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                            onClick={() => setShowAlert(false)}
                        >
                            <span>×</span>
                        </button>
                    </div>
                ) : null}
                <div className="py-6 w-full">
                    <div className="text-center flex justify-start">
                        <button
                            className="flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Сохранить
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
