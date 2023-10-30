import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./service.css";
import slideIMage1 from "../../../public/img/services/window/image 1.png";
import slideIMage2 from "../../../public/img/services/window/image 2.png";
import slideIMage3 from "../../../public/img/services/window/image 3.png";
import Image from "next/image";
// import required modules
import { Navigation } from "swiper";

const WindowTinting = () => {
    return (
        <section className="mt-4 max-w-[1800px] mx-auto">
            <Swiper navigation={true} modules={[Navigation]} className="">
                <SwiperSlide>
                    <div className="grid grid-cols-2 max-w-[1560px] mx-auto">
                        <div className=" lg:h-[560px]">
                            <Image src={slideIMage1} alt="slide" className="h-full w-full" />
                        </div>
                        <div className=" lg:h-[560px]">
                            <Image src={slideIMage2} alt="slide" className="h-full w-full" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2  max-w-[1400px] mx-auto">
                        <div className=" lg:h-[560px]">
                            <Image src={slideIMage3} alt="slide" />
                        </div>
                        <div className=" lg:h-[560px]">
                            <Image src={slideIMage2} alt="slide" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default WindowTinting;
