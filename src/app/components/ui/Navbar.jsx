"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        {
            href: "#experience",
            text: "Experiencia"
        },
        {
            href: "#education",
            text: "Estudios"
        },
        {
            href: "#services",
            text: "Servicios"
        },
        {
            href: "#projects",
            text: "Proyectos"
        },
        {
            href: "#contact",
            text: "Contacto"
        }
    ]

    return (
        <nav className='flex md:w-3/4 w-full bg-[#03FE95] py-4 rounded-b-lg fixed z-50'>
            <div className='flex justify-start flex-col'>
                <Link href={"inicio"}>
                    <Image src={"/logoTS.png"} width={50} height={50} alt='Tomás Sosa' priority />
                </Link>
            </div>
            <div className='md:hidden flex justify-end mr-4 fixed right-4'>
                <button onClick={toggleMenu} className='text-white' aria-label='Menu'>
                    <Menu size={24} />
                </button>
            </div>
            <div className={`md:flex md:justify-around w-full md:items-center font-bold text-white text-center uppercase ${isOpen ? 'block' : 'hidden'}`}>
                {
                    links.map((item) => (
                        <Link href={item.href} className="block md:inline-block py-2 md:py-0 md:px-4 hover:text-gray-300" key={item.href}>
                            {item.text}
                        </Link>
                    ))
                }
            </div>
        </nav>
    );
}
