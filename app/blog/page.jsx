import Image from "next/image";
import { Suspense } from "react";
import image2 from "../../public/img/blog/Image Card (1).png";
import image3 from "../../public/img/blog/Image Card (2).png";
import image1 from "../../public/img/blog/Image Card.png";
import Loading from "./loading";
import { blogData, TopStoriesClients } from "../StaticData/blog";

import Card from "./Card";
const Blog = () => {
    return (
        <Suspense fallback={<Loading />}>
            <section className="px-5 py-12 lg:px-28 pt-32 ">
                <div className="blog  max-w-[1920px] mx-auto">
                    <div data-aos="zoom-out" data-aos-duration="1500">
                        <h3>Top Things You Need to Know</h3>
                        <hr className="bg-[#818181] opacity-40 h-[2px]" />
                        <div className="mt-8 grid items-center gap-6 py-2 grid-cols-1 md:grid-cols-2">
                            <div>
                                <Image className="transform transition duration-500 hover:scale-90" src={image1} alt="blog" />
                            </div>
                            <div className="flex gap-y-5 flex-col">
                                <p className="text-base">Uncategorized</p>
                                <h3 className="text-base">Transform Your Car with Stunning Las Vegas Car Wraps from Dipped Autoworks</h3>
                                <p className="text-base opacity-80">
                                    Living in Las Vegas it’s a smart choice to get a Vinyl wrap for an important vehicle. While we don’t have snow and
                                    real rain in the city, the Sun’s rays are as damaging to the paint as the water to the car itself.
                                </p>
                                <p className="text-base font-normal">November 14, 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid gap-6 md:grid-cols-3" data-aos="zoom-out" data-aos-duration="1500">
                        {blogData.map((item, index) => (
                            <Card
                                key={index}
                                img={item.featureImage}
                                title={item.title}
                                subTitle={item.subTitle}
                                category={item.category}
                                date={item.publishedData}
                            />
                        ))}
                    </div>
                    <div className="pt-16" data-aos="zoom-out" data-aos-duration="1500">
                        <h3>Top Stories Clients</h3>
                        <hr className="bg-[#818181] opacity-40 h-[2px]" />
                        <div className="mt-8 grid items-center gap-6 py-2 grid-cols-1 md:grid-cols-2">
                            <div className="flex gap-y-5 flex-col">
                                <Image className="transform transition duration-500 hover:scale-90" src={image2} alt="tarif al hasan" />
                                <p className="text-base">Uncategorized</p>
                                <h3 className="text-2xl">Transform Your Car with Stunning Las Vegas Car Wraps from Dipped Autoworks</h3>
                                <p className="text-base opacity-80">
                                    Living in Las Vegas it’s a smart choice to get a Vinyl wrap for an important vehicle. While we don’t have snow and
                                    real rain in the city, the Sun’s rays are as damaging to the paint as the water to the car itself.
                                </p>
                                <p className="text-base font-normal">November 14, 2019</p>
                            </div>
                            <div className="flex gap-y-5 flex-col">
                                <Image className="transform transition duration-500 hover:scale-90" src={image3} alt="tarif al hasan" />
                                <p className="text-base">Uncategorized</p>
                                <h3 className="text-2xl">Transform Your Car with Stunning Las Vegas Car Wraps from Dipped Autoworks</h3>
                                <p className="text-base opacity-80">
                                    Living in Las Vegas it’s a smart choice to get a Vinyl wrap for an important vehicle. While we don’t have snow and
                                    real rain in the city, the Sun’s rays are as damaging to the paint as the water to the car itself.
                                </p>
                                <p className="text-base font-normal">November 14, 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-5 gap-6 md:grid-cols-3" data-aos="zoom-out" data-aos-duration="1500">
                        {TopStoriesClients.map((item, index) => (
                            <Card
                                key={index}
                                img={item.featureImage}
                                title={item.title}
                                subTitle={item.subTitle}
                                category={item.category}
                                date={item.publishedData}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Suspense>
    );
};

export default Blog;
