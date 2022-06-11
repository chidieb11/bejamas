import Image from "next/image";

const Cards = () => {
  return (
    <div className="sm:mr-20 sm:ml-20 mb-10">
      <div className="parent flex justify-between">
        <div className="left mr-5">
          <div className="category">
            <h1 className="capitalize font-bold text-2xl mb-3">category</h1>
            <div className="flex flex-col sm:text-xl">
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                people
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                premium
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                pets
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                food
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                landmarks
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                cities
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                nature
              </span>
            </div>
          </div>
          <div className="price mt-3">
            <h1 className="capitalize font-bold text-2xl">price</h1>
            <div className="mb-3 flex flex-col whitespace-nowrap sm:text-xl">
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                lower than $20
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                $20 - $100
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                $100 - $200
              </span>
              <span className="capitalize">
                <input type="checkbox" className="mr-4" />
                more than $200
              </span>
            </div>
          </div>
        </div>
        <div className="right sm:grid sm:grid-cols-3 sm:gap-6">
          <div className="card">
            <Image
              src={
                "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1634581616%2Fbejamas-test%2Fpexels-ella-olsson-1640777_vokrpz.jpg&w=384&q=75"
              }
              width={350}
              height={350}
              objectFit="cover"
            />
            <h2 className="capitalize text-gray-700">food</h2>
            <h3 className="capitalize font-bold text-xl">vegetable salad</h3>
            <span className="text-gray-700">$10</span>
          </div>
          <div className="card">
            <Image
              src={
                "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647823%2Fbejamas-test%2Fsnow-mountain_bfxr9o.jpg&w=384&q=75"
              }
              width={350}
              height={350}
              objectFit="cover"
            />
            <h2 className="capitalize text-gray-700">nature</h2>
            <h3 className="capitalize font-bold text-xl">Snow Mountain</h3>
            <span className="text-gray-700">$10</span>
          </div>
          <div className="card">
            <Image
              src={
                "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647613%2Fbejamas-test%2Ffruit-salad_luanzq.jpg&w=384&q=75"
              }
              width={350}
              height={350}
              objectFit="cover"
            />
            <h2 className="capitalize text-gray-700">food</h2>
            <h3 className="capitalize font-bold text-xl">Fruit Salad</h3>
            <span className="text-gray-700">$10</span>
          </div>
          <div className="card">
            <Image
              src={
                "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647611%2Fbejamas-test%2Fa-beautiful-girl_rowmzu.jpg&w=384&q=75"
              }
              width={350}
              height={350}
              objectFit="cover"
            />
            <h2 className="capitalize text-gray-700">premium</h2>
            <h3 className="capitalize font-bold text-xl">Pretty Black Model</h3>
            <span className="text-gray-700">$10</span>
          </div>
          <div className="card">
            <Image
              src={
                "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647822%2Fbejamas-test%2Frabbit_ikq6nc.jpg&w=384&q=75"
              }
              width={350}
              height={350}
              objectFit="cover"
            />
            <h2 className="capitalize text-gray-700">pets</h2>
            <h3 className="capitalize font-bold text-xl">Cute Rabbit</h3>
            <span className="text-gray-700">$10</span>
          </div>
          <div className="card">
            <Image
              src={
                "https://bejamas-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdavien21%2Fimage%2Fupload%2Fv1633647822%2Fbejamas-test%2Floving-father_crxsic.jpg&w=384&q=75"
              }
              width={350}
              height={350}
              objectFit="cover"
            />
            <h2 className="capitalize text-gray-700">people</h2>
            <h3 className="capitalize font-bold text-xl">Loving Father</h3>
            <span className="text-gray-700">$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
