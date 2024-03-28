"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import TransitionPage from "../ui/TransitionPage";
import Link from "next/link";

export default function Introduction() {
    return (
        <section className="z-20 w-full text-white">
            <TransitionPage />
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="md:w-[800px] md:h-[800px] flex justify-center items-center">
                    <div className="rounded-full w-44 h-44 md:w-[300px] md:h-[300px] overflow-hidden shadow-2xl">
                        <Image src="/perfil.jpg" priority width="300" height="300" alt="Tomás Sosa" className="object-cover w-full h-full" />
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="my-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrollador full stack, tengo la capacidad de crear sistemas completos, tanto en el frontend como en el backend. Mi enfoque combina la creatividad del diseño con la solidez de la programación, permitiéndome crear experiencias digitales integrales y eficientes.</p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="#projects" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl">
                            Ver proyectos
                        </Link>
                        <Link href="#contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl" >
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}