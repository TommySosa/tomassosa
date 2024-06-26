import React from 'react'

export default function TimeLine() {
    const data = [
        {
            id: 1,
            title: "Software Developer",
            subtitle: "Censys S.A",
            description: "Integro el equipo Scrum del banco VOII",
            date: "Abril 2024 - Actualidad"
        },
        {
            id: 2,
            title: "Full Stack Developer",
            subtitle: "Municipalidad de Yerba Buena",
            description: "En mi corta trayectoria participé en el desarrollo y migración del sistema de padrones del Municipio.",
            date: "Marzo 2024 - Abril 2024"
        },
        {
            id: 3,
            title: ".NET Developer",
            subtitle: "Ministerio de Educación de Tucumán",
            description: "Participé en el desarrollo y mejora del Sistema Integrado del Ministerio de Educación (SIME) en el área de Gestión Económica Financiera. Destaco por el desarrollo de nuevas vistas/ABM, importación y exportación de datos en Excel, resolución de problemas y cumplimiento de plazos. Utilicé patrones como Modelo-Vista-Controlador y N-Capas, y principios ágiles con Gitlab.",
            date: "Oct 2023 - Abril 2024",
        },
        {
            id: 4,
            title: "Full Stack Developer",
            subtitle: "Proyectos personales y universitarios",
            description: "Diseño y desarrollo full stack con React, Next.js, Express, MySQL, SQL Server, y ASP.NET Core MVC. Tanto sólo como en equipo, en varios casos coordinando y liderando el equipo aplicando SCRUM.",
            date: "Jul 2022 - Actualidad",
        },
    ]

    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
                <div className="-my-6">
                    {data.map((data) => (
                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                            <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-[90px] h-10 text-center mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{data.date}</time>
                                <div className="text-xl font-bold text-gray-400">{data.subtitle}</div>
                            </div>
                            <div className="text-slate-400">{data.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
