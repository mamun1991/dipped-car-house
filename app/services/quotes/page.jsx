"use client";
import { QuotesData } from "../../StaticData/services";
import WindowTinting from "../../component/sliders/WindowTinting";
import Link from "next/link";

const Services = () => {
    return (
        <section id="services">
            <div className="services_hero_aria overflow-hidden ">
                <div className="px-5 lg:px-28 ">
                    <div className="pt-32 md:pt-64 max-w-[1920px] mx-auto">
                        <div data-aos="fade-left" data-aos-duration="2000" className="text-left">
                            <h2 className="text-4xl">Paint Protection Film Installer</h2>
                            <p className=" py-3 text-base w-full lg:w-[600px] lg:text-lg">
                                If you’re looking for an affordable way to protect your vehicle’s paint job, contact us today at Dipped Auto Works. We
                                would be more than happy to answer any questions you have and provide you with a free quote.
                            </p>
                            <button>
                                <Link href="quotes" className="btn btn_primary px-4 py-3">
                                    Get Quotes
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" 2xl:px-5 max-w-[1920px] mx-auto">
                <div className="mt-24">
                    <h2 className="text-2xl px-5 pb-4 md:text-3xl text-center">Las Vegas Paint Protection Film Installer</h2>
                    {/* ::::::Slider ::::::: */}

                    <WindowTinting />

                    <div className="mt-5 px-5 sm:max-w-7xl mx-auto">
                        {QuotesData.map((service, index) => (
                            <div key={index}>
                                <div className="grid  gap-10">
                                    <div>
                                        <h3 className="py-3 leading-[3.75rem] text-lg">{service.title}</h3>
                                        <p className="text-justify text-[#BDBDBD] opacity-70  text-sm md:text-lg">{service.subTitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn_primary block mx-auto px-4 py-3 my-20">Get a Quotes</button>
                </div>
            </div>
        </section>
    );
};

export default Services;
