import Image from "next/image";
import {
  meal1Image,
  meal2Image,
  meal3Image,
  nature1Image,
  pet1Image,
} from "../assets/imgs";
import Checkbox from "./Checkbox";

const items = [
  { name: "Vegetable Salad", price: "10", category: "food", image: meal3Image },
  { name: "Fruit Salad", price: "12", category: "food", image: meal1Image },
  { name: "Pasta", price: "22", category: "food", image: meal2Image },
  { name: "Cute Rabbit", price: "50", category: "pet", image: pet1Image },
  {
    name: "Snow Mountain",
    price: "82",
    category: "nature",
    image: nature1Image,
  },
];

const Cards = () => {
  return (
    <div className="container mb-10">
      <div className="parent flex justify-between">
        <div className="left mr-5">
          <div className="category">
            <h1 className="capitalize font-bold text-2xl mb-3">category</h1>
            <div className=" sm:text-xl">
              <Checkbox isChecked={false} title="chidi" />
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                people
              </div>
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                premium
              </div>
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                pets
              </div>
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                food
              </div>
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                landmarks
              </div>
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                cities
              </div>
              <div className="capitalize">
                <input type="checkbox" className="mr-4" />
                nature
              </div>
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
        <div className="right sm:grid sm:grid-cols-4 sm:gap-6">
          {items.map((item, index) => {
            return (
              <div className="card" key={index}>
                <Image
                  src={item.image}
                  width={350}
                  height={350}
                  objectFit="cover"
                />
                <h2 className="capitalize text-gray-700">{item.category}</h2>
                <h3 className="capitalize font-bold text-xl">{item.name}</h3>
                <span className="text-gray-700">${item.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
