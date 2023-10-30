import image from "../../../public/img/services/wheel_repair.png";
import Image from "next/image";
import { WheelRepairData } from "../../StaticData/services";
const WheelRepair = () => {
  return (
      <section id="WindowTinting">
          <div className="wheel_hero_aria overflow-hidden">
              <div className="px-5 lg:px-24 pt-32">
                  <div className=" max-w-[1920px] mx-auto overflow-hidden pb-20 flex flex-col gap-5 lg:flex-row">
                      <div data-aos="fade-right" data-aos-duration="1000" className="contact_box_2 basis-[100%] lg:basis-[40%] brounded-lg p-8">
                          <h3>Vehicle Detailing</h3>
                          <p className="mt-6 text-base lg:text-lg">A clean car is a happpy car</p>
                      </div>
                      <div data-aos="fade-left" data-aos-duration="1000" className=" relative flex justify-end  basis-[100%] lg:basis-[60%]">
                          <div className="window_tinting_box_2 bg-[#222222] h-[260px] md:h-[515px] w-[94%] lg:w-[687px]"></div>
                          <div className="absolute top-7 right-8">
                              <Image className="h-full mx-auto " src={image} alt="tarif" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="px-5 lg:px-28 2xl:px-0 py-20">
              <div className="mt-6">
                  <h2 className="text-4xl py-4 text-center">Las Vegas Paint Protection Film Installer</h2>

                  {WheelRepairData.map((service, index) => (
                      <div className="mt-5 mx-auto md:max-w-3xl 2xl:px-0" key={index}>
                          <div className="grid gap-12">
                              <div>
                                  <p className="text-justify text-base lg:text-lg opacity-70 text-[#BDBDBD]  sm:text-xl">{service.subTitle}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
};

export default WheelRepair;
