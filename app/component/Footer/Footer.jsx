import Link from "next/link";

import Image from "next/image";

import shapeLine from "../../../public/img/footer_line.png";
import logo from "../../../public/img/Logo1.svg";
const Footer = () => {
    return (
        <section className="" data-aos="fade-up" data-aos-duration="3000">
            <div>
                <div className="h-[5px] bg-[#4FFEF3]"></div>
            </div>
            <div className="px-5 lg:px-28 py-12">
                <footer className=" max-w-[1920px] mx-auto">
                    <Link href="/">
                        <Image src={logo} alt="logo" />
                    </Link>
                    <div className="flex flex-col lg:flex-row	 gap-9 justify-between">
                        <div className="brand w-[354px]">
                            <ul>
                                <li className="text-base opacity-75">
                                    Dipped Auto Works not only provides Las Vegas with the best car wraps but we also provide superior window tinting,
                                    collision repair, ceramic coating and much more! We also provide inexpensive pricing without compromising our high
                                    quality of service.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            <div className="address w-[240px]">
                                <h4>Hours and Addres</h4>
                                <ul className="mt-3">
                                    <li className="text-base">
                                        Address : <br />
                                        <span className="py-3 block">
                                            5380 S Valley View Blvd, <br /> Las Vegas, NV 89118
                                        </span>
                                    </li>
                                    <li className="text-base">
                                        Hours : <br />
                                        <span className="py-3 block">
                                            Monday - Sunday <br /> 9:00am - 6:00pm
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="Contact w-[240px]">
                                <h4>Contact</h4>
                                <ul className="mt-3">
                                    <li className="text-base">
                                        Phone :<span className="py-3 block">702-379-8716</span>
                                    </li>
                                    <li className="mt-6">
                                        Email :<span className="py-3 block">dippedautoworks702@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-[186px]">
                                <h4>Menu</h4>
                                <ul className="mt-3">
                                    <li className="text-base">
                                        <Link href="/" className="hover:text-[#4FFEF3]">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="text-base">
                                        <Link href="about" className="hover:text-[#4FFEF3]">
                                            About
                                        </Link>
                                    </li>
                                    <li className="text-base">
                                        <Link href="services" className="hover:text-[#4FFEF3]">
                                            Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
