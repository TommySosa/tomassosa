"use client"

import TimeLine from "../ui/TimeLine";

export default function Experience() {
    return (
        <section className="w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6 text-white">
            <h1 className="text-3xl mb-12 leading-tight text-center md:text-left md:text-5xl md:mt-10" id="experience">
                Experiencia
            </h1>
            <TimeLine />
        </section>
    );
}