import Image from "next/image";

const ItemDesc = () => {
  return (
    <div className="lg:mr-20 lg:ml-20">
      <div className="flex justify-between flex-col lg:flex-row gap-5">
        <div className="">
          <h1 className="capitalize mb-3 text-2xl font-bold">
            about the vegetable salad
          </h1>
          <h2 className="capitalize text-2xl text-gray-700 mb-5">food</h2>
          <p className="text-gray-700">
            This exquisite meal was made captured by Ella Olsen, it is made with
            a vegetable sortee and spices. One ambitious Bite will have you
            tasting heaven. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolore quasi repellat molestias dicta, quos accusantium
            laboriosam iusto. Cumque est, dolores ullam fuga exercitationem
            impedit sit saepe quas eos earum quis!
          </p>
        </div>
        <div>
          <h1 className="whitespace-nowrap sm:ml-96 items-center capitalize mb-3 text-2xl font-bold">
            people also buy
          </h1>
          <div className="flex items-center justify-center mr-0 mb-10 gap-10">
            <Image
              src="https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1634581616%2Fbejamas-test%2Fpexels-ella-olsson-1640777_vokrpz.jpg&w=640&q=75"
              width={150}
              height={150}
              objectFit="cover"
            />
            <Image
              src="https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647613%2Fbejamas-test%2Ffruit-salad_luanzq.jpg&w=640&q=75"
              width={150}
              height={150}
              objectFit="cover"
            />
            <Image
              src="https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647822%2Fbejamas-test%2Fpasta_fyitkc.jpg&w=640&q=75"
              width={150}
              height={150}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-beyween mb-10">
            <h1 className="capitalize text-xl font-bold">details</h1>
            <span className="text-gray-700">Size: 1920X1920 Pixels </span>
            <span className="text-gray-700">Size:4.5 mb</span>
          </div>
        </div>
      </div>
      <hr className="mb-10 bg-gray-100 h-1" />
    </div>
  );
};

export default ItemDesc;
