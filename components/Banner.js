import Image from "next/image";

const Banner = () => {
    return (
        <>
            <div className="relative w-10/11 mt-5 h-96 sm:mt-0 sm:mr-20 sm:ml-20 mb-8">
                <Image
                    src={"https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1634581616%2Fbejamas-test%2Fpexels-ella-olsson-1640777_vokrpz.jpg&w=1920&q=75"}
                    layout="fill" objectFit="cover"
                />
            </div>
        </>
    );
};

export default Banner;
