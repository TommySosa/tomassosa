import React from 'react'
import ReactIcon from '../icons/ReactIcon'
import GitIcon from '../icons/GitIcon'
import NodeIcon from '../icons/NodeIcon'
import ExpressIcon from '../icons/ExpressIcon'
import FirebaseIcon from '../icons/FirebaseIcon'
import DotNetIcon from '../icons/DotNetIcon'
import NextIcon from '../icons/NextIcon'
import SqlServerIcon from '../icons/SqlServerIcon'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import CSharpIcon from '../icons/CSharpIcon'
import TailwindIcon from '../icons/TailwindIcon'
import MySqlIcon from '../icons/MySqlIcon'
import BootstrapIcon from '../icons/BootstrapIcon'

export default function Technologies() {
    const data = [
        {
            id: 1,
            name: "React",
            icon: <ReactIcon />
        },
        {
            id: 2,
            name: "Git",
            icon: <GitIcon />
        },
        {
            id: 3,
            name: "NodeJs",
            icon: <NodeIcon />
        },
        {
            id: 4,
            name: "Express",
            icon: <ExpressIcon />
        },
        {
            id: 5,
            name: "Firebase",
            icon: <FirebaseIcon />
        },
        {
            id: 6,
            name: ".NET",
            icon: <DotNetIcon />
        },
        {
            id: 7,
            name: "NextJs",
            icon: <NextIcon />
        },
        {
            id: 8,
            name: "Sql Server",
            icon: <SqlServerIcon />
        },
        {
            id: 9,
            name: "HTML",
            icon: <HtmlIcon />
        },
        {
            id: 10,
            name: "CSS",
            icon: <CssIcon />
        },
        {
            id: 11,
            name: "JavaScript",
            icon: <JsIcon />
        },
        {
            id: 12,
            name: "C#",
            icon: <CSharpIcon />
        },
        {
            id: 13,
            name: "Tailwind",
            icon: <TailwindIcon />
        },
        {
            id: 14,
            name: "MySQL",
            icon: <MySqlIcon />
        },
        {
            id: 15,
            name: "Bootstrap",
            icon: <BootstrapIcon />
        },
        {
            id: 16,
            name: "React Native",
            icon: <ReactIcon />
        }
    ]

    return (
        <section className="w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6 text-white">
            <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl md:mt-[200px]" id="education">
                Tecnologías
            </h1>

            <div className='flex justify-center flex-wrap mt-10'>
                {
                    data.map((item) => (
                        <div className='border-2 border-white w-[200px] h-[100px] p-4 mx-5 m-4 transition-transform transform hover:scale-105' key={item.id}>
                            <div className='flex items-center flex-row'>
                                <div className='flex-col'>
                                    {item.icon}
                                </div>
                                <div className="flex-col">
                                    <p className='ml-4'>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}