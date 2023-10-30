import React from "react";
import Image from "next/image";
import { servicesData, serviceGallaryImage } from "../StaticData/services";
const Services = () => {
    return (
        <section id="services">
            <div className="services_hero_aria overflow-hidden h-[700px]">
                <div className="px-5 lg:px-28 pt-32 ">
                    <div data-aos="fade-right" data-aos-duration="2000" className="text-left max-w-[1920px] mx-auto">
                        <h2>Car + Vehicle Wrap</h2>
                        <p className="text-base lg:text-lg py-3">Specializing in all shapes+ sizes of vehicles and various materials</p>
                    </div>
                </div>
            </div>
            <div className="px-5 py-10 lg:px-28 overflow-hidden ">
                <div data-aos="fade-right" data-aos-duration="2000" className="mt-16 max-w-[1920px] mx-auto">
                    <h2 className="text-4xl text-center">Quality Las Vegas Car Wraps</h2>
                    {/* test */}

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            {servicesData.map((item, index) => (
                                <div data-aos="fade-right" data-aos-duration="2000" key={index} className="mt-8">
                                    <h3 className="py-3">{item.title}</h3>
                                    <p className="mt-8 text-justify rounded-lg text-base lg:text-lg opacity-100 text-white ">{item.subTitle}</p>
                                </div>
                            ))}
                        </div>
                        {/* image gallary */}
                        <div className="mt-8">
                            <div className="grid grid-cols-2  gap-4">
                                {serviceGallaryImage.map((data) => (
                                    <div data-aos="fade-left" data-aos-duration="2000" key={data.id}>
                                        <Image src={data.image1} className="rounded-lg" alt="iamge" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
