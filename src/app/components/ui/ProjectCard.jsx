"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProyectCard({ data }) {
    const { title, image, urlDemo, urlGithub, description } = data;
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const displayedDescription = expanded ? description : description.slice(0, 185);

    return (
        <div className="p-4 border border-teal-50 rounded-xl transition-transform transform hover:scale-105">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image src={image} alt="Image" width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto" />
            <div className="flex gap-5 mt-5">
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                    Github
                </Link>
                {urlDemo && (
                    <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                        Live demo
                    </Link>
                )}
            </div>
            <p className="my-4">
                {displayedDescription}
                {!expanded && description.length > 185 && (
                    <button className="text-blue-500" onClick={toggleExpanded}>
                        Ver más
                    </button>
                )}
            </p>
        </div>
    );
}
