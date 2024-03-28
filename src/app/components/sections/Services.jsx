import React from 'react'
import SliderServices from '../ui/SliderServices'

export default function Services() {
    return (
        <>w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6 text-white
            <section className="grid items-center w-full justify-center my-12 max-w-6xl gap-6 mx-auto md:grid-cols-2 md:mt-[200px] text-white">
                <div className="max-w-[450px] mx-4">
                    <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl mb-12" id='services'>Servicios</h1>
                    <p className=" text-xl text-left text-gray-300">Ofrezco servicios de desarrollos especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                </div>
                <SliderServices />
            </section>
        </>
    )
}
