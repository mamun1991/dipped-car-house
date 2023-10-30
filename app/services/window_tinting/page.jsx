import image from "../../../public/img/services//window_tinting.png";
import slideIMage2 from "../../../public/img/services/quotes/image 1.png";
import slideIMage3 from "../../../public/img/services/quotes/image 3.png";
import Image from "next/image";
import {
  WindowTintingData,
  WINDOW_TINTY_GLLARY,
} from "../../StaticData/services";
const Window = () => {
  const servicesItem = [
    {
      name: "Crack Repair",
    },
    {
      name: "Curb Rash Repair",
    },
    {
      name: "Bend Repair",
    },
    {
      name: "Corrosion Repair",
    },
    {
      name: "Plasti Dipped",
    },
    {
      name: "Gouge Repair",
    },
    {
      name: "Dent Repair",
    },
  ];
  return (
      <section id="WindowTinting">
          <div className="window_tinting_hero overflow-hidden">
              <div className="px-5 lg:px-24 pt-32">
                  <div className=" pb-20 flex flex-col gap-5 lg:flex-row max-w-[1920px] mx-auto">
                      <div data-aos="fade-right" data-aos-duration="2000" className="contact_box_2 basis-[100%] lg:basis-[40%] brounded-lg p-2">
                          <h3>Window Tinting</h3>
                          <p className="mt-6">Offering quality window tinting for your vehicle</p>
                      </div>
                      <div data-aos="fade-left" data-aos-duration="2000" className=" relative flex justify-end  basis-[100%] lg:basis-[60%]">
                          <div className="window_tinting_box_2 bg-[#222]  h-[260px] md:h-[515px] w-[94%] lg:w-[687px]"></div>
                          <div className="absolute top-7 right-8 ">
                              <Image className="h-full mx-auto " src={image} alt="tarif" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div>
              <div className="mt-6 py-20">
                  <h2 className="text-4xl py-4 text-center">Las Vegas Ceramic Coating</h2>

                  <div className="px-5 lg:px-28  2xl:px-0">
                      {WindowTintingData.map((service, index) => (
                          <div key={index} className="mt-5 md:max-w-3xl mx-auto 2xl:px-0">
                              <div className="grid  gap-10">
                                  <div>
                                      <p className="text-justify opacity-70 text-[#BDBDBD] text-base md:text-md ">{service.subTitle}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Window;
