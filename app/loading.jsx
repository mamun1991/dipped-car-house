"use client";

import Image from "next/image";
import loading from "../public/loading.svg";


export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <section className="h-screen backdrop-blur-lg flex justify-center items-center">
            <Image src={loading} alt="loading" className="w-8 h-8"/>
        </section>
    );
}
