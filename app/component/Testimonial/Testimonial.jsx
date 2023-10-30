import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { testimonialData } from "../../StaticData/testimonial";
import Image from "next/image";

import "swiper/css/free-mode";
import "swiper/css/pagination";
// import requerment
import { Autoplay, FreeMode, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import styles from "./Testimonial.module.css";
// import required modules
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial() {
    const FiveStar = () => {
        return (
            <div className="flex justify-center gap-4">
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
            </div>
        );
    };
    const FourStar = () => {
        return (
            <div className="flex justify-center gap-4">
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <AiFillStar className="text-2xl text-[#4FFEF3]" />
                <BsStarHalf className="text-2xl text-gray-600" />
            </div>
        );
    };
    return (
        <div className="my-24 px-5  max-w-[1920px] mx-auto">
            <div className=" lg:px-28 space-y-10">
                <div className="relative py-8 w-full   flex items-center   gap-x-2">
                    <p className=" absolute font-orbitron text_stroke opacity-10  lg:opacity-40 text-4xl lg:text-9xl font-bold">TESTIMONIAL</p>

                    <div className="ml-2 mt-1 h-1 bg-[#4FFEF3] bg-opacity-50 w-[50px] lg:w-[150px]"></div>
                    <h5 className="text-lg mt-1 font-bold text-[#4FFEF3]">TESTIMONIAL</h5>
                </div>

                <p className=" font-orbitron font-bold text-xl lg:text-3xl text-white opacity-100">What People Are Saying</p>
            </div>

            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                scrollbar={{
                    hide: false,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={15}
                freeMode={true}
                modules={[FreeMode, Autoplay, Scrollbar]}
                className="mySwiper px-5 md:px-0"
            >
                {testimonialData.map((item, index) => (
                    <SwiperSlide className={styles.TestimonialSidebar} key={index}>
                        <div className="py-10">
                            <div className="">
                                <div className="p-5 z-10 text-lg opacity-60 lg:px-10 relative">
                                    <p className="absolute text-9xl leading-[172.8px] font-bold opacity-20 top-[-2rem]  left-[2.5rem] ">“</p>
                                    <p className="text-center">{item.testimonial}</p>
                                    <div className="pt-10">{item.ratting === 5 ? <FiveStar /> : <FourStar />}</div>
                                    <div className="avatar flex justify-center pt-10 pb-1">
                                        <div className="flex items-center space-x-4">
                                            <Image className="w-10 h-10 rounded-full" src={item.profilePhoto} alt={item.clientName} />
                                            <div className="font-medium dark:text-white">
                                                <div>{item.clientName}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
