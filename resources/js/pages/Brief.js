import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import FooterLogoImage from "../../images/logo-black.png";
import EurikaImage from "../../images/eurika.png";
import MoonImage from "../../images/moon.png";
import RocketImage from "../../images/rocket.gif";
import StarImage from "../../images/star.png";
import EllipseImage from "../../images/ellipse.png";
import MobileImage from "../../images/mobile.png";
import RuporImage from "../../images/rupor.png";
import NoteImage from "../../images/note.png";
import DeskImage from "../../images/desk.png";
import PairImage from "../../images/pair.png";
import CompImage from "../../images/comp.png";
import { useAlert } from 'react-alert'

import MailboxImage from "../../images/mailbox.gif";

import AdrBrand from "../../images/brands/adrenalline.png";
import DomikBrand from "../../images/brands/domik.png";
import HuggiesBrand from "../../images/brands/huggies.png";
import ImunelleBrand from "../../images/brands/imunelle.png";
import KinderBrand from "../../images/brands/kinder.png";
import PobedaBrand from "../../images/brands/pobeda.png";
import RaffaelloBrand from "../../images/brands/raffaelo.png";
import SeverstalBrand from "../../images/brands/severstal.png";

import OrderFrom from "../components/Order";
import MiniForm from "../components/Mini";

import { ArrowDown, InstagramLogo } from "../Icons";
import {
    Link as ScrollLink,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";

function Brief() {
    const alert = useAlert()
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const clientsRef = useRef(null);
    const contactsRef = useRef(null);
    const orderRef = useRef(null);

    const [active, setActive] = useState("home");

    const Devider = () => (
        <div className="h-0.5 w-1/2 mt-14 mb-24 bg-opacity-60 bg-white"></div>
    );

    const StarIcon = () => (
        <div
            className="inline-block bg-center bg-no-repeat bg-contain w-6 h-6 mr-4"
            style={{ backgroundImage: `url(${StarImage})` }}
        ></div>
    );

    const handleSubmit = () => {
        alert.show("Мы получили Ваше сообщение, до скорейшей обратной связи!");
    };

    return (
        <div className="overflow-hidden relative">
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
            <section id="order" ref={orderRef}>
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
                                className="flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer" className="bg-orange-500 pt-14 pb-16">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="pr-24">
                            <Link
                                to="/"
                                className="block mb-6 bg-center bg-no-repeat bg-contain w-14 h-14"
                                style={{
                                    backgroundImage: `url(${FooterLogoImage})`
                                }}
                            ></Link>
                            <p className="text-sm text-gray-700">
                                All rights reserved.
                                <br />© 2021 kuba.digital{" "}
                            </p>
                        </div>
                        <div className="pr-24 w-2/5">
                            <h4 className="text-lg font-semibold mb-6">
                                Как с вами связаться?
                            </h4>
                            {/* <dl className="flex text-sm mb-3">
                                <dt>Phone:</dt>
                                <dd></dd>
                            </dl> */}
                            <dl className="flex text-sm mb-3">
                                <dt className="whitespace-nowrap mr-2">
                                    Email:
                                </dt>
                                <dd className="whitespace-nowrap">
                                    <a
                                        className="text-yellow-900 hover:underline"
                                        href="mailto:hello@kuba.digital"
                                    >
                                        hello@kuba.digital
                                    </a>
                                </dd>
                            </dl>
                            {/* <dl className="flex text-sm mb-3">
                                <dt>Telegram:</dt>
                                <dd></dd>
                            </dl> */}
                            <dl className="flex text-sm mb-3">
                                <dd className="whitespace-nowrap">
                                    {" "}
                                    <a
                                        className="text-yellow-900 hover:underline"
                                        href="https://instagram.com/kuba.digital?igshid=hjubezg39pb7"
                                    >
                                        <InstagramLogo className="w-12 h-12" />
                                    </a>
                                </dd>
                            </dl>
                        </div>
                        <div className="pr-24 w-2/5">
                            <h4 className="text-lg font-semibold mb-6">
                                Оставайтесь на связи
                            </h4>
                            <MiniForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Brief;
