import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const CardTitle = () => {
  return (
    <div className="sm:mr-20 sm:ml-20">
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="capitalize sm:text-2xl">
            photography /{" "}
            <span className="text-gray-700 whitespace-nowrap">
              premium photos
            </span>
          </h1>
        </div>
        <div className="capitalize flex sm:text-xl justify-center items-center">
          <div className="mr-5 flex">
            <BsArrowUp className="cursor-pointer hover:text-gray-800 ease-in duration-300" />
            <BsArrowDown className="cursor-pointer hover:text-gray-800 ease-in duration-300" />
          </div>
          <div className="sm:text-lg">
            sort by
            <select
              name="price"
              className="sm:ml-3 w-20 p-1 capitalize text-lg"
            >
              <option value="price">price</option>
              <option value="price">name</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
