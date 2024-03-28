"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Computer, Pencil, Server, Settings, Smartphone } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function SliderServices() {
    const data = [
        {
            icon: <Pencil />,
            title: "Diseño",
            description: "Diseño creativo y profesional de interfaces intuitivas y atractivas, centradas en la experiencia del usuario",
        },
        {
            icon: <Computer />,
            title: "Desarrollo web",
            description: "Diseño y desarrollo de sistemas a medida, adaptados a tus necesidades",
        },
        {
            icon: <Smartphone />,
            title: "Desarrollo móvil",
            description: "Diseño y desarrollo de aplicaciones a medida, adaptados a tus necesidades",
        },
        {
            icon: <Server />,
            title: "Publicación",
            description: "Hosting para publicar tu web, y en caso de aplicaciones en la Play Store"
        },
        {
            icon: <Settings />,
            title: "Mantenimiento",
            description: "Mantenimiento y soporte técnico del sistema y/o base de datos."
        }
    ];

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {data.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer  sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[#303030] transition-all duration-300  border-2">
                        <div className="mb-4 text-4xl">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}