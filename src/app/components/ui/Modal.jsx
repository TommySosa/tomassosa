import { useState } from 'react';

export default function Modal({ isOpen, onClose, imageSrc }) {
    const [isVisible, setIsVisible] = useState(isOpen);

    const closeModal = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        <div className="relative flex flex-col w-full bg-[#03FE95] border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                                <h3 className="text-3xl font-semibold">Diploma</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                </button>
                            </div>
                            {
                                imageSrc ? <div className="relative p-6 flex-auto">
                                    <img src={imageSrc} alt="Diploma" className="h-auto max-w-full mx-auto" />
                                </div> : <p className='p-32'>En trámite! 🤪</p>
                            }
                        </div>
                    </div>
                </div>
            )}
            {isVisible && (
                <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
            )}
        </>
    );
};