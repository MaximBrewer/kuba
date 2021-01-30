import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import { useAlert } from 'react-alert'
import Footer from "../components/Footer"


function Brief() {
    const alert = useAlert()
    const orderRef = useRef(null);

    const handleSubmit = () => {
        alert.show("Мы получили Ваше сообщение, до скорейшей обратной связи!");
    };

    return (
        <div className="overflow-hidden relative flex flex-col min-h-screen">
            <section id="header">
                <div className="container mx-auto">
                    <div className="flex pt-12">
                        <Link
                            to="/"
                            className="block logo bg-center bg-no-repeat bg-contain w-24 h-24"
                            style={{ backgroundImage: `url(${LogoImage})` }}
                        ></Link>
                        <div className="flex-grow flex justify-center"></div>
                    </div>
                </div>
            </section>
            <section id="order" ref={orderRef} className="flex-grow">
                <div className="container mx-auto">
                    <p className="text-white text-2xl pt-24 pb-16">
                        Привет, команда Kuba.Digital! Хочу создать крутую
                        рекламную кампанию для своего бренда ___. <br />
                        Коротко опишу задачу: ___. Будет здорово, если мы вместе
                        найдем креативное решение! Расскажите о своей ценовой
                        политике и подробнее о форматах в личном письме. Мой
                        электронный адрес: ___. Номер телефона, если письмо
                        вдруг затеряется в пути: ___.
                    </p>
                    <div className="pb-16 w-full">
                        <div className="text-center flex justify-center items-center">
                            <button
                                className=" transform-gpu transition-transform hover:scale-110 flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Brief;
