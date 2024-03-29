import React from 'react'
import ProjectCard from '../ui/ProjectCard'

export default function Proyects() {
    const data = [
        {
            id: 1,
            title: "VHG Servicio técnico",
            image: "/vhg.png",
            urlGithub: "https://github.com/TommySosa/vhgserviciotecnico",
            urlDemo: "https://vhgserviciotecnico.vercel.app/",
            description: "Landing con catálogo de productos, trabajos realizados, formulario de contacto, etc. Se usó NextJs, Tailwind, y Google Sheets como base de datos para una rápida gestión y sin costo."
        },
        {
            id: 2,
            title: "Okr genius",
            image: "/okrgenius.png",
            urlGithub: "https://github.com/ErikaCV/okr-genius/tree/develop",
            urlDemo: "https://okrgenius.onrender.com/",
            description: "Proyecto realizado en equipo para el Proyecto Yerba Buena TI, usando SCRUM como metodología ágil y terminado en 4 sprints. Se usó NextJs, Tailwind, Prisma, PostgreSQL."
        },
        {
            id: 3,
            title: "Campus Virtual",
            image: "/campus.png",
            urlGithub: "https://github.com/TommySosa/campus",
            urlDemo: null,
            description: "Trabajo final de la carrera, cuenta con automatizacion de corrección de ejercicios y creación de estos con IA, simplificación de procesos administrativos, como inscripciones, carga de notas,etc. Se conecta a través de la API a un sistema local desarrollado en Python para reconocimiento facial para controlar la asistencia. Desarrollado con Nextjs, Tailwind, Nextjs, Next-auth, MySql, Express, OpenAI API, Prisma."
        },
        {
            id: 4,
            title: "Calculadora médica",
            image: "/calculadora_medica.webp",
            urlGithub: null,
            urlDemo: "https://play.google.com/store/apps/details?id=com.tomassosa.calculadoramedica&pli=1",
            description: "Calcula la dosis, goteo y el IMC. Destinado a estudiantes y/o profesionales del área de salud."
        }
    ]

    return (
        <section className="w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6 text-white">
            <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl md:mt-[100px] mb-10" id="projects">
                Proyectos
            </h1>
            <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                {data.map((item) => (
                    <ProjectCard key={item.id} data={item} />
                ))}
            </div>
        </section>
    )
}
