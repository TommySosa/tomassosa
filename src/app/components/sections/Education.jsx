"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from '../ui/Modal';

export default function Education() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState("")

    const openModal = (certificate) => {
        setSelectedCertificate(certificate)
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const data = [
        {
            id: 1,
            title: "Universidad Tecnológica Nacional",
            subtitle: "Tecnicatura Universitaria en Programación",
            date: "Abril 2022 - Diciembre 2023",
            image: "/utn.webp",
            width: 150,
            height: 150,
            certificateUrl: null
        },
        {
            id: 2,
            title: "Global learning",
            subtitle: "Proyecto Yerba Buena TI Javascript, React y NextJs nivel avanzado",
            date: "Mayo 2023 - Diciembre 2023",
            image: "/globallearning.png",
            width: 180,
            height: 180,
            certificateUrl: "/diploma_react.jpeg"
        },
        {
            id: 3,
            title: "Global learning",
            subtitle: "Especialización en .NET",
            date: "Octubre 2022 - Diciembre 2022",
            image: "/globallearning.png",
            width: 180,
            height: 180,
            certificateUrl: "/diploma_globallearning.jpeg"
        },
        {
            id: 4,
            title: "INTI",
            subtitle: "Argentina Programa",
            date: "Febrero 2022 - Mayo 2023",
            image: "/argentinaprograma.jpg",
            width: 180,
            height: 180,
            certificateUrl: "/diploma_argprograma4.0.png"
        },
    ]

    return (
        <section className="w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6 text-white">
            <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl md:mt-10" id="education">
                Estudios
            </h1>

            <div className='flex justify-center items-center flex-col md:flex-row mt-10'>
                {data.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className='border-2 border-white w-[300px] h-[380px] cursor-pointer p-4 mx-5 m-4 relative transition-transform transform hover:scale-105' onClick={() => openModal(item.certificateUrl)}>
                            <div className='flex justify-center mt-4'>
                                <Image alt={item.subtitle} priority src={item.image} width={item.width} height={item.height} />
                            </div>
                            <div className='text-center'>
                                <h2 className='font-bold'>{item.title}</h2>
                                <h3 className='text-sm'>{item.subtitle}</h3>
                                <br />
                                <p className='absolute bottom-0 left-0 right-0'>{item.date}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            {modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} imageSrc={selectedCertificate} />}
        </section>
    )
}