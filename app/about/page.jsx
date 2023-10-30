import Link from "next/link";
import Image from "next/image";
const About = () => {
    return (
        <section id="services">
            <div className="services_hero_aria overflow-hidden relative">
                <div className="px-5 lg:px-28">
                    <div className="pt-40 max-w-[1920px] mx-auto">
                        <div className="text-left lg:w-[400px]" data-aos="fade-right" data-aos-duration="2000">
                            <h2 className="text-4xl leading-[16px]">OUR HISTORY</h2>
                            <p className="text-base  lg:text-md py-6">
                                Dipped Auto Works not only provides Las Vegas with the best car wraps but we also provide superior window tinting,
                                collision repair, ceramic coating and much more! We also provide inexpensive pricing without compromising our high
                                quality of service. As we continue to increase in demand and earn rave customer reviews, we would love for you to join
                                in our journey to earning the position as the best place in Las Vegas to customize your vehicle.
                            </p>
                            <Link href="/sevices" className="btn inline-flex btn_primary text-md px-5 py-2 font-orbitron">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
