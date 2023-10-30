"use client";

import { useState } from "react";
import { BsFillClockFill, BsTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckBox from "./CheckBox";
const Contact = () => {
    const [value, setValue] = useState();

    const serviceLabel = [
        {
            name: "Wheel Repair",
        },
        {
            name: "Interior Detailing",
        },
        {
            name: "Exterior Detailing",
        },
        {
            name: "Window Tint",
        },
        {
            name: "Vinyl Wrap",
        },
        {
            name: "Paint Protection Film",
        },
        {
            name: "Ceramic Coating",
        },
    ];
    return (
        <section id="contact">
            <div className="contact_hero_aria">
                <div className=" pt-44" data-aos="zoom-in-up" data-aos-duration="1500">
                    <div className="text-center">
                        <h2 className="leading-[0px] ">Drop Us a Line!</h2>
                        <p className="md:w-[70%] py-8 mx-auto text-base opa  lg:text-lg">
                            Need a quote or have questions on how we can help you with your vehicle? Feel free to contact us anytime! We have fast
                            response times and will be sure to answer your questions.
                        </p>
                    </div>
                    <div className=" pb-20" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="contact_box_2 w-full max-w-[1920px] mx-auto  lg:w-[52%] bg-[#222222] rounded-lg p-8">
                            <form action="post">
                                <div className="input_filed gap-2 grid grid-cols-1 md:grid-cols-2 ">
                                    <div>
                                        <label className="text-lg pb-4" htmlFor="name">
                                            Full Name
                                        </label>
                                        <input
                                            className="outline-0 text-[#3D4C5E] border-0 rounded-md text-lg w-full p-2"
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-lg pb-4" htmlFor="model">
                                            Full Name Yeer Make and Model
                                        </label>
                                        <input
                                            className="outline-0 text-[#3D4C5E] border-0 rounded-md text-lg w-full p-2"
                                            type="text"
                                            required
                                            placeholder="Yeer Make and Model"
                                        />
                                    </div>
                                </div>
                                <div className="services_check_box">
                                    <h6 className="text-xl py-5">Services</h6>
                                    <div className="grid grid-cols-2">
                                        {serviceLabel.map((service, index) => (
                                            <CheckBox label={service.name} key={index} />
                                        ))}
                                    </div>
                                </div>
                                {/* phonr number */}
                                <h6 className="text-xl py-5">Phone :</h6>

                                <PhoneInput placeholder="Enter phone number" value={value} country="BD" onChange={setValue} />
                                <button type="submit" className="btn py-2 block mt-6 w-full btn_primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_information py-20" data-aos="zoom-in-up" data-aos-duration="1500">
                <div className="text-center">
                    <h3>Contact Info</h3>
                    <ul className="grid gap-4 mt-4">
                        <li className="flex justify-center items-center gap-2">
                            <FaTelegramPlane /> 5380 S Valley View Blvd, Las Vegas, NV 89118
                        </li>
                        <li className="flex justify-center items-center gap-2">
                            <BsTelephoneFill /> 702-379-8716
                        </li>
                        <li className="flex justify-center items-center gap-2">
                            <BsFillClockFill /> Monday-Sunday 9am-6pm
                        </li>
                        <li className="flex justify-center items-center gap-2">
                            <MdEmail /> christianbeckerle@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
