"use client";
import shape from "../public/img/line_roted.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./component/Testimonial/Testimonial";
import { Suspense, useEffect } from "react";
import { HomePageServicesSlider } from "./StaticData/services";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import requerment
import { Autoplay, FreeMode } from "swiper";
import Loading from "./loading";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./component/Home/Hero"), {
    ssr: false,
    loading: () => <Loading />,
});
export default function Home() {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            offset: 50,
            once: true,
        });
    }, []);
    return (
        <section className="pt-5 md:pt-20 overflow-hidden">
            <Hero />
            <div className="flex flex-row-reverse max-w-[3260px] mx-auto">
                <svg width="1002" height="5" viewBox="0 0 1002 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0H1003V5H0L13 0Z" fill="#4FFEF3" />
                </svg>
            </div>
            {/* <div className="px-5  lg:px-28">
                <div className="flex py-5 md:justify-end max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-6">
                        <div className="col-span-4">
                            <h3 className="text-xl lg:text-2xl">Full Car Transform</h3>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <button>
                                <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3333 27.3333L0 14L13.3333 0.666664L15.7 3.03333L4.73333 14L15.7 24.9667L13.3333 27.3333Z"
                                        fill="white"
                                        className="hover:fill-[#4FFEF3]"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <button>
                                <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.66667 27.3333L16 14L2.66667 0.666664L0.3 3.03333L11.2667 14L0.3 24.9667L2.66667 27.3333Z"
                                        fill="white"
                                        className="hover:fill-[#4FFEF3]"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className=" col-span-6 ">
                            <Link href="/" className="hover:text-[#4FFEF3]">
                                Learn more...
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="h-24">

            </div>
            <div className=" ">
                <Image src={line} alt="line" className="w-full max-w-[1920px] mx-auto" />
            </div> */}
            {/* services slider */}
            <div className="mt-32 px-5 lg:px-28 ">
                <div className="max-w-[1920px] mx-auto ">
                    <div className="relative py-8 w-full   flex items-center  gap-x-2">
                        <p className=" absolute font-orbitron text_stroke opacity-10  lg:opacity-40 text-5xl lg:text-9xl font-bold">SERVICES</p>

                        <div className="ml-2 mt-1 h-1 bg-[#4FFEF3] bg-opacity-50 w-[50px] lg:w-[150px]"></div>
                        <h5 className="text-lg mt-1 font-bold text-[#4FFEF3]">SERVICES</h5>
                    </div>
                    <div className="grid overflow-hidden gap-4 md:flex justify-between md:pt-10">
                        <h3
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="basis-[50%]"
                        >
                            EXCEPTIONAL QUALITY COMBINED WITH QUICK & AFFORDABLE SERVICES.
                        </h3>
                        <p data-aos="fade-left" data-aos-duration="2000" className="basis-[50%] text-base text-white opacity-100 lg:text-lg">
                            Dipped Auto Works not only provides Las Vegas with the best car wraps but we also provide superior window tinting,
                            collision repair, ceramic coating and much more! We also provide inexpensive pricing without compromising our high quality
                            of service. As we continue to increase in demand and earn rave customer reviews, we would love for you to join in our
                            journey to earning the position as the best place in Las Vegas to customize your vehicle.
                        </p>
                    </div>
                </div>
            </div>

            {/* slider here */}

            <div
                className="mt-14 px-5 lg:px-0 max-w-[1920px] mx-auto "
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                {/* slider here */}
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={15}
                    freeMode={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper md:px-0"
                >
                    {HomePageServicesSlider?.map((service, index) => (
                        <SwiperSlide className="grid gap-6" key={index}>
                            <div className="feature_image">
                                <Image className="h-[200px] md:h-[400px] md:w-[720px]" src={service.featureImage} alt={service.serviceName} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="px-5 lg:px-28  py-12 overflow-hidden">
                <div className="max-w-[1920px] mx-auto flex flex-col md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col md:flex-row justify-end gap-x-3" data-aos="fade-right" data-aos-duration="1500">
                        <p className="text-6xl lg:text-9xl lg:leading-[161px] font-orbitron font-bold text-[#4FFEF3] opacity-50">01</p>
                        <p className="mt-8 text-3xl font-orbitron font-bold text-white opacity-100">Window Tinting</p>
                    </div>

                    <div className="space-y-5" data-aos="fade-left" data-aos-duration="1500">
                        <p className="mt-8 text-base lg:text-lg opacity-100 text-white">
                            Praesent varius est nisl, vel mollis massa malesuada non. Aenean nec diam ante. Interdum et malesuada fames ac ante ipsum
                            primis in faucibus.
                        </p>

                        <button>
                            <Link href={"/services/window_tinting"} className="btn flex px-2 py-2 gap-2 btn_secondary">
                                Lean More
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== SLIDER 2 ===== */}
            <div className="px-5 lg:px-28 casuser_container gallary_wrapper   relative ">
                <div
                    className="relative py-8 w-full   flex items-center  gap-x-2 max-w-[1920px] mx-auto "
                    // data-aos="fade-right"
                    // data-aos-duration="1500"
                >
                    <p className=" absolute font-orbitron text_stroke opacity-10  lg:opacity-40 text-5xl lg:text-9xl font-bold">GALLERY</p>

                    <div className="ml-2 mt-1 h-1 bg-[#4FFEF3] bg-opacity-50 w-[50px] lg:w-[150px]"></div>
                    <h5 className="text-lg mt-1 font-bold text-[#4FFEF3]">GALLERY</h5>
                </div>
                <div className=" flex flex-col md:flex-row items-center  max-w-[1920px] mx-auto" data-aos="fade-right" data-aos-duration="1500">
                    <div className="pb-10">
                        <h3>OUR GALLERY</h3>
                        <p className="py-5 text-base w-[300px] text-white opacity-100 lg:text-lg">
                            Praesent varius est nisl, vel mollis massa malesuada non. Aenean nec diam ante. Interdum et malesuada fames ac ante ipsum
                            primis in faucibus.
                        </p>
                        <button>
                            <Link href={"blog"} className="btn px-5 py-2  btn_primary">
                                Show All
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* :::::::::=== Shape Line ======::::::::: */}
            <div>
                <div className="h-[5px] bg-[#4FFEF3]"></div>
            </div>

            <section id="testimonial" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Testimonial />
            </section>
        </section>
    );
}
