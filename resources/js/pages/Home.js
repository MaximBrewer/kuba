import React, { useState, useRef } from "react";
import LogoImage from "../../images/logo.png";
import FooterLogoImage from "../../images/logo-black.png";
import EurikaImage from "../../images/eurika.png";
import StarImage from "../../images/star.png";
import EllipseImage from "../../images/ellipse.png";
import MobileImage from "../../images/mobile.png";
import RuporImage from "../../images/rupor.png";
import NoteImage from "../../images/note.png";
import DeskImage from "../../images/desk.png";
import PairImage from "../../images/pair.png";
import CompImage from "../../images/comp.png";

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

import { ArrowDown } from "../Icons";
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
} from "react-scroll";

function Home() {
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

    return (
        <div className="overflow-hidden relative">
            <section id="header">
                <div className="container mx-auto">
                    <div className="flex pt-12">
                        <div
                            className="logo bg-center bg-no-repeat bg-contain w-24 h-24"
                            style={{ backgroundImage: `url(${LogoImage})` }}
                        ></div>
                        <div className="flex-grow flex justify-center">
                            <ul className="flex items-start">
                                <li
                                    className={`w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                        active == "home"
                                            ? `font-bold border-black`
                                            : `border-transparent`
                                    }`}
                                >
                                    <Link
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setActive("home");
                                        }}
                                    >
                                        Главная
                                    </Link>
                                </li>
                                <li
                                    className={`w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                        active == "services"
                                            ? `font-bold border-black`
                                            : `border-transparent`
                                    }`}
                                >
                                    <Link
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setActive("services");
                                        }}
                                    >
                                        Услуги
                                    </Link>
                                </li>
                                <li
                                    className={`w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                        active == "clients"
                                            ? `font-bold border-black`
                                            : `border-transparent`
                                    }`}
                                >
                                    <Link
                                        activeClass="active"
                                        to="clients"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setActive("clients");
                                        }}
                                    >
                                        Клиенты
                                    </Link>
                                </li>
                                <li
                                    className={`w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                        active == "contacts"
                                            ? `font-bold border-black`
                                            : `border-transparent`
                                    }`}
                                >
                                    <Link
                                        activeClass="active"
                                        to="contacts"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setActive("contacts");
                                        }}
                                    >
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home" ref={homeRef}>
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="flex flex-col justify-end items-start w-1/2">
                            <h1 className="text-6xl font-bold mb-10 text-orange-500">
                                kuba. digital.
                                <br />
                                influens.
                            </h1>
                            <h3 className="mb-10 text-2xl text-white">
                                Kuba.Digital — рекламное агентство
                                <br />
                                с&nbsp;большим потенциалом, и&nbsp;мы реализуем
                                <br />
                                его на все 100%
                            </h3>
                            <div className="flex justify-start mb-14">
                                <Link
                                    activeClass="active"
                                    className="flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                    to="order"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Оставить заявку
                                </Link>
                                <button className="text-sm w-44 h-10 bg-white hover:bg-gray-100">
                                    Заполнить бриф
                                </button>
                            </div>
                            <div>
                                <a onClick={() => {}} className="flex mb-10">
                                    <ArrowDown className="h-16" />
                                    <ArrowDown className="h-16 mx-4" />
                                    <ArrowDown className="h-16" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={EurikaImage}
                                alt=""
                                style={{ maxHeight: "727px" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Devider />
            <section
                id="services"
                ref={servicesRef}
                className="relative bg-center bg-no-repeat bg-contain mb-20"
                style={{ backgroundImage: `url(${EllipseImage})` }}
            >
                <div className="container mx-auto">
                    <h4 className="uppercase text-white mb-16 text-lg">
                        — наши УСЛУГИ
                    </h4>
                    <div className="grid grid-cols-3 gap-16">
                        <div className="pt-64">
                            <div
                                style={{
                                    background: "rgba(161, 56, 244, 0.5)",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "30px"
                                }}
                                className="py-28 px-14 y-6 px-4 flex items-center justify-center"
                            >
                                <div
                                    className="relative bg-center bg-no-repeat bg-contain w-full"
                                    style={{
                                        backgroundImage: `url(${MobileImage})`,
                                        paddingTop: "100%"
                                    }}
                                ></div>
                            </div>
                            <h4 className="py-6 text-5xl text-center text-white font-bold">
                                SMM
                            </h4>
                            <ul className="pl-4">
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Анализ и исследования</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Поддержка и продвижение</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Креатив и дизайн</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Модерация кампаний</span>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div
                                style={{
                                    background: "rgba(161, 56, 244, 0.5)",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "30px"
                                }}
                                className="py-32 px-16 py-6 px-4 flex items-center justify-center"
                            >
                                <div
                                    className="relative bg-center bg-no-repeat bg-contain w-full"
                                    style={{
                                        backgroundImage: `url(${RuporImage})`,
                                        paddingTop: "100%"
                                    }}
                                ></div>
                            </div>
                            <h4 className="py-6 text-5xl text-center text-white font-bold">
                                БЛОГЕРЫ
                            </h4>
                            <ul className="pl-4">
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Креатив и стратегия</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Менеджмент кампаний</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Аналитика</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Медиапланирование</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span> Отчетность</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-64">
                            <div
                                style={{
                                    background: "rgba(161, 56, 244, 0.5)",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "30px"
                                }}
                                className="py-32 pl-20 pr-16 flex items-center justify-center"
                            >
                                <div
                                    className="relative bg-center bg-no-repeat bg-contain w-full"
                                    style={{
                                        backgroundImage: `url(${NoteImage})`,
                                        paddingTop: "100%"
                                    }}
                                ></div>
                            </div>
                            <h4 className="py-4 text-4xl text-center text-white font-bold">
                                WEB/MOBILE
                                <br />
                                PRODUCTION
                            </h4>
                            <ul className="pl-4">
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Веб-разработки</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Мобильные приложения</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Интерактивные проекты</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Комплексные решения</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Devider />
            <section
                id="advantages"
                className="relative bg-no-repeat mb-12"
                style={{
                    backgroundImage: `url(${EllipseImage})`,
                    backgroundPosition: "right -100px center"
                }}
            >
                <div className="container mx-auto">
                    <h4 className="uppercase text-white mb-16 text-lg">
                        — наши преимущества
                    </h4>
                    <div className="flex flex-col">
                        <div className="flex mb-12">
                            <div className="w-1/2">
                                <div className="pr-6">
                                    {" "}
                                    <div
                                        className="relative bg-left bg-top bg-no-repeat bg-contain w-full"
                                        style={{
                                            backgroundImage: `url(${DeskImage})`,
                                            paddingTop: "100%"
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pl-6 pt-4">
                                    <h3 className="mb-8 text-5xl font-bold text-orange-500">
                                        Что насчёт SMM?
                                    </h3>
                                    <p
                                        className="mb-12 text-xl text-white font-light"
                                        style={{ maxWidth: "24rem" }}
                                    >
                                        Наша фишка - яркие решения. <br />В нише
                                        SMM мы создаем контент, который
                                        вдохновляет с первого взгляда и
                                        неизменно привлекает внимание к бренду.
                                    </p>
                                    <Link
                                        activeClass="active"
                                        className="flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                        to="order"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Оставить заявку
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-12">
                            <div className="w-1/2">
                                <div className="pr-6">
                                    <h3 className="mb-8 text-5xl font-bold text-orange-500">
                                        Расскажите про WEB/MOBILE - продакшн
                                    </h3>
                                    <p
                                        className="mb-12 text-xl text-white font-light"
                                        style={{ maxWidth: "24rem" }}
                                    >
                                        Мы превращаем рекламу в искусство, к
                                        которому хочется приобщиться – на любой
                                        площадке. Результат будет одинаково
                                        хорош в разных форматах: корпоративный
                                        сайт, электронный коммерческий проект
                                        или высоконагруженная интерактивная
                                        платформа.
                                    </p>
                                    <Link
                                        activeClass="active"
                                        className="flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-white hover:bg-gray-100"
                                        to="order"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Оставить заявку
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pl-6 pt-4">
                                    {" "}
                                    <div
                                        className="relative bg-left bg-top bg-no-repeat bg-contain w-full"
                                        style={{
                                            backgroundImage: `url(${PairImage})`,
                                            paddingTop: "100%"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-12">
                            <div className="w-1/2">
                                <div className="pr-6">
                                    {" "}
                                    <div
                                        className="relative bg-left bg-top bg-no-repeat bg-contain w-full"
                                        style={{
                                            backgroundImage: `url(${CompImage})`,
                                            paddingTop: "100%"
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pl-6 pt-4">
                                    <h3 className="mb-8 text-5xl font-bold text-orange-500">
                                        Как работаете с блогерами?
                                    </h3>
                                    <p
                                        className="mb-12 text-xl text-white font-light"
                                        style={{ maxWidth: "24rem" }}
                                    >
                                        Мы легки на подъём и строги к себе –
                                        идеально сочетание, чтобы добиться
                                        отличного результата в сотрудничестве с
                                        популярными блогерами.
                                    </p>
                                    <Link
                                        activeClass="active"
                                        className="flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mb-6 hover:bg-orange-600"
                                        to="order"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Оставить заявку
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Devider />
            <section id="clients" ref={clientsRef} className="pb-36">
                <div className="container mx-auto">
                    <h4 className="uppercase text-white mb-12 text-lg">
                        — наши клиенты
                    </h4>
                    <div className="grid grid-cols-4 gap-12">
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={RaffaelloBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={PobedaBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={HuggiesBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={KinderBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={DomikBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={ImunelleBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={AdrBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a href="#" className="block px-6">
                                <img src={SeverstalBrand} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="order" ref={orderRef}>
                <div className="container mx-auto">
                    <h2 className="text-6xl font-bold text-orange-500 mb-6">
                        ХОЧУ СОТРУДНИЧАТЬ!
                    </h2>
                    <h3 className="text-3xl font-semibold text-white mb-12">
                        Оставьте заявку и мы обязательно вам ответим!
                    </h3>
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="mb-8">
                                <OrderFrom />
                            </div>

                            <h4 className="text-3xl text-white mb-8">
                                Или заполните бриф самостоятельно!
                            </h4>
                            <button className="mb-16 flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-white hover:bg-gray-100">
                                Заполнить бриф
                            </button>
                        </div>
                        <div className="w-1/2 flex items-end justify-center">
                            <img
                                src={MailboxImage}
                                alt=""
                                style={{ width: "80%" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <img
                src={EllipseImage}
                className="absolute"
                alt=""
                style={{ zIndex: "-1", right: "-100px", bottom: "-100px" }}
            />
            <section id="contacts" ref={contactsRef}>
                <div className="container mx-auto"></div>
            </section>
            <section id="footer" className="bg-orange-500 pt-14 pb-16">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="pr-24">
                            <div
                                className="mb-6 bg-center bg-no-repeat bg-contain w-14 h-14"
                                style={{
                                    backgroundImage: `url(${FooterLogoImage})`
                                }}
                            ></div>
                            <p className="text-sm text-gray-700">
                                All rights reserved.
                                <br />© 2021 kuba.digital{" "}
                            </p>
                        </div>
                        <div className="pr-24 w-2/5">
                            <h4 className="text-lg font-semibold mb-6">
                                Как с вами связаться?
                            </h4>
                            <dl className="flex text-sm mb-3">
                                <dt>Phone:</dt>
                                <dd></dd>
                            </dl>
                            <dl className="flex text-sm mb-3">
                                <dt>Email:</dt>
                                <dd></dd>
                            </dl>
                            <dl className="flex text-sm mb-3">
                                <dt>Telegram:</dt>
                                <dd></dd>
                            </dl>
                            <dl className="flex text-sm mb-3">
                                <dt>Social media:</dt>
                                <dd></dd>
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

export default Home;
