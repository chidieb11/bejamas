import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="top-0 sticky z-10">
        <div className="flex justify-between items-center mt-4 sm:m-5 text-4xl sm:mt-2 sm:mr-20 sm:ml-20">
          <div className="cursor-pointer font-bold">Bejamaz</div>
          <div className="cursor-pointer">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <hr className="bg-gray-100 h-1 mt-5 sm:mr-20 sm:ml-20" />
      </div>
    </>
  );
};

export default Navbar;
