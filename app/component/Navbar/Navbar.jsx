"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../public/img/Logo1.svg";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNavbar = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname();

    return (
        <nav className={` ${isOpen ? "px-5 bg-[#222] " : "px-5"}  py-5   z-50 lg:px-28   fixed w-full min-w-full  backdrop-blur-sm `}>
            <div className="flex items-center justify-between max-w-[1920px] mx-auto">
                <div className="logo">
                    <Link href="/">
                        <Image src={logo} alt="dipped" priority />
                    </Link>
                </div>
                {/* Dekstop And Big Screen Navbar */}
                <div>
                    <ul className={`nav_item hidden md:flex items-center gap-10`}>
                        <li>
                            <Link className={pathname === "/" ? "active" : ""} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="about" className={pathname.includes("about") ? "active" : ""}>
                                About
                            </Link>
                        </li>
                        <li id="dropdownHoverButton" className="relative">
                            <Link
                                href="/services "
                                className={`text-white inline-flex items-center ${pathname.includes("services") ? "active" : ""}`}
                            >
                                Services
                                <RiArrowDownSLine />
                            </Link>

                            <div
                                id="dropdownHover"
                                className={`z-10 
                  hidden service_dropdown
                  bg-[#222222] text-lg  divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <Link
                                            href="/services/quotes"
                                            className=" block px-4 py-2 text-lg  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Quotes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="services/window_tinting"
                                            className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                                        >
                                            Window Tinting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/wheel_repair"
                                            className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                                        >
                                            Wheel Repair
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <li>
                            <Link href="/blog" className={pathname.includes("blog") ? "active" : ""}>
                                {" "}
                                Blog
                            </Link>
                        </li> */}
                        <li>
                            <Link href="/contact" className={pathname.includes("contact") ? "active" : ""}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {!isOpen ? (
                    <BiMenu onClick={openNavbar} className=" md:hidden text-4xl cursor-pointer" color="#4FFEF3" />
                ) : (
                    <ImCross onClick={() => openNavbar()} className="text-2xl m-2 cursor-pointer" color="#4FFEF3" />
                )}
                {/* Mobile Menu */}
                {/* <MobileMenu openNavbar={openNavbar} isOpen={isOpen} /> */}
            </div>

            {/* Mobile Menu */}
            <MobileMenu openNavbar={openNavbar} isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;
