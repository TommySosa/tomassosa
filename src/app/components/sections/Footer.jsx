import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#03FE95] text-white py-4 w-full h-[150px] mt-12">
            <div className="container mx-auto flex justify-center items-center space-x-4 h-full">
                <a
                    href="https://www.linkedin.com/in/tom%C3%A1s-facundo-sosa-b6197b22a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label='Linkedin'
                >
                    <LinkedinIcon size="24" />
                </a>
                <a
                    href="https://www.github.com/TommySosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label='Github'
                >
                    <GithubIcon size="24" />
                </a>
                <a
                    href="mailto:tomas.facundo.sosa@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label='Email'
                >
                    <MailIcon size="24" />
                </a>
                <a
                    href="tel:+3813284273"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label='Phone'
                >
                    <PhoneIcon size="24" />
                </a>
            </div>
        </footer>
    );
}
