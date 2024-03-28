"use client"
import React, { useState } from 'react'

export default function Contact() {
    const [from, setFrom] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (from.trim() != "" && subject.trim() != "" && body.trim() != "") {
            if (from.length > 5 && subject.length < 50 && body.length > 5 && body.length < 200) {
                try {
                    const response = await fetch('/api/send', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ from, subject, body }),
                    });
                    if (response.ok) {
                        alert('Correo enviado correctamente');
                    } else {
                        console.error('Error al enviar el correo');
                    }
                } catch (error) {
                    console.error(error);
                    alert('Error al enviar el correo');
                }
            } else {
                alert("Ingresá valores con una longitud válida!")
            }
        }
        else {
            alert("Llená todos los campos!")
        }
    };

    return (
        <section className="w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6 text-white">
            <div className="container px-4 md:px-6">
                <h1 className="text-3xl leading-tight text-center  md:text-5xl md:mt-[100px] mb-10" id="contact">
                    Contacto
                </h1>
                <form className="grid gap-4 max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
                    <input className="max-w-lg flex-1 rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 text-black" placeholder="Tu email" type="email" onChange={(e) => setFrom(e.target.value)} />
                    <input className="max-w-lg flex-1 rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 text-black" placeholder="Asunto" type="text" onChange={(e) => setSubject(e.target.value)} />
                    <textarea
                        className="w-full h-32 p-2 rounded border focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 text-black"
                        placeholder="Tu mensaje"
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button type="submit" className='bg-[#03FE95] py-2 rounded-md' aria-label='Enviar'>Enviar</button>
                </form>
            </div>
        </section >
    )
}
