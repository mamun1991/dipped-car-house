import { ModalContext } from "@/app/layout";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../public/Logo.png";
const MobileMenu = ({ openNavbar, isOpen }) => {
    const pathname = usePathname();
    const { isOpen: open, setIsOpen } = useContext(ModalContext);
    return (
        <section
            className={` w-full flex flex-col justify-between bg-[#222]    ${
                isOpen ? "transition-all duration-300 ease-linear opacity-100  h-[calc(100vh-7rem)]" : "h-0 overflow-hidden opacity-0 "
            }  z-50 top-0 `}
        >
            <div>
                <ul className="nav_item  right-full  flex flex-col gap-10  h-full  pl-10 py-9   text-left">
                    <li onClick={() => openNavbar()}>
                        <Link className={pathname === "/" ? "active" : ""} href="/">
                            Home
                        </Link>
                    </li>
                    <li onClick={() => openNavbar()}>
                        <Link href="/about" className={pathname.includes("about") ? "active" : ""}>
                            About
                        </Link>
                    </li>
                    <li id="dropdownHoverButton" className="relative">
                        <button
                            data-dropdown-trigger="hover"
                            type="button"
                            className={`text-white inline-flex items-center ${pathname.includes("services") ? "active" : ""}`}
                        >
                            Services
                            <RiArrowDownSLine className="text-xl" />
                        </button>

                        <div
                            id="dropdownHover"
                            className={`z-10 
                hidden service_dropdown
                bg-[#222222] divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 nav_item">
                                <li className="text-lg" onClick={() => openNavbar()}>
                                    <Link
                                        href="/services"
                                        className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className="text-lg" onClick={() => openNavbar()}>
                                    <Link
                                        href="services/quotes"
                                        className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Quotes
                                    </Link>
                                </li>
                                <li className="text-lg" onClick={() => openNavbar()}>
                                    <Link
                                        href="services/window_tinting"
                                        className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Window Tinting
                                    </Link>
                                </li>
                                <li className="text-lg" onClick={() => openNavbar()}>
                                    <Link
                                        href="/services/wheel_repair"
                                        className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Wheel Repair
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {/* <li onClick={() => openNavbar()}>
                        <Link href="/blog" className={pathname.includes("blog") ? "active" : ""}>
                            Blog
                        </Link>
                    </li> */}
                    <li onClick={() => openNavbar()}>
                        <Link href="/contact" className={pathname.includes("contact") ? "active" : ""}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-between">
                <button className="btn px-10 md:px-12 py-2 btn_primary ">
                    <a href="tel: 013423223423" className="w-full ">
                        Call Us
                    </a>
                </button>
                <button className="btn flex px-2 py-2 gap-2 btn_secondary" onClick={() =>{
                    openNavbar();
                    setIsOpen(true);
                }}>
                    <MdOutlineSmartDisplay /> Play Video
                </button>
            </div>
        </section>
    );
};

export default MobileMenu;
