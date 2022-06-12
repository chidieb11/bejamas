import React from "react";
import Image from "next/image";

const Modal = ({closeModal}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer absolute right-0 sm:right-20 bg-slate-50 p-4 rounded">
                <div className="flex justify-end">
                    <button
                        className="font-mono mb-4"
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        x
                    </button>
                </div>
                <div className="title flex">
                    <div>
                        <h2 className="text-lg font-mono mr-4 capitalize">
                            vegetable salad
                        </h2>
                        <span className="text-lg font-mono">$10</span>
                    </div>
                    <Image
                        src={
                            "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1634581616%2Fbejamas-test%2Fpexels-ella-olsson-1640777_vokrpz.jpg&w=256&q=75"
                        }
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="mr-0"
                    />
                </div>
                <hr className="h-1 mt-1 mb-1"/>
                <div className="title flex">
                    <div>
                        <h2 className="text-lg font-mono mr-4 capitalize">
                            vegetable salad
                        </h2>
                        <span className="text-lg font-mono">$10</span>
                    </div>
                    <Image
                        src={
                            "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647613%2Fbejamas-test%2Ffruit-salad_luanzq.jpg&w=384&q=75"
                        }
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="mr-0"
                    />
                </div>
                <hr className="h-1 mt-1 mb-1"/>
                <div className="footer">
                    <button
                        className="uppercase text-lg bg-black text-white w-72 h-10 ease-in-out duration-300"
                        onClick={() => {
                            closeModal(false);
                        }}
                    >
                        clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
