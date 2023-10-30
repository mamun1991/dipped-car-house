import { ModalContext } from "@/app/layout";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { MdOutlineSmartDisplay } from "react-icons/md";
import hero from "../../../public/img/home_banner.png";
import Modal from "./Modal";

export default function Hero() {
    const {isOpen, setIsOpen } = useContext(ModalContext);

    return (
        <section className="mt-24 lg:mt-0 sm:bg-[url('../public/img/home_banner.png')] bg-none bg-no-repeat bg-right bg-contain h-auto  md:h-[480px]   overflow-hidden realtive  lg:px-28">
            <div className="relative  h-full flex  items-center  max-w-[1920px] mx-auto ">
                <div className="  flex  px-5  ">
                    <div data-aos="fade-right" data-aos-duration="2000" className="basis-full md:basis-[70%] lg:basis-[55%]">
                        <h2 className=" text-3xl lg:text-6xl">The Best Custom Automotive Shop In Las Vegas</h2>
                        <p className="py-7 text-base lg:text-lg text-white opacity-100">
                            Dipped Auto Works specializes in full-car transformations including vehicle wraps, window tinting, ceramic coating, and
                            more!
                        </p>
                        <div className="btn_group mt-1 gap-4 flex justify-center sm:justify-start">
                            <button className="btn px-10 md:px-12 py-2 btn_primary ">
                                <a href="tel: 013423223423" className="w-full ">
                                    Call Us
                                </a>
                            </button>
                            <button className="btn flex px-2 py-2 gap-2 btn_secondary" onClick={() => setIsOpen(true)}>
                                <MdOutlineSmartDisplay /> Play Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <Image src={hero} alt="hero" className="w-full " />
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
}
