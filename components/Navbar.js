import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "./Modal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container navbar">
      <div className="flex justify-between items-center mt-4 text-4xl sm:mt-5 ">
        <div className="cursor-pointer font-bold">Bejamaz</div>
        <div>
          <div className="cursor-pointer relative">
            <AiOutlineShoppingCart
              className="mr-4"
              onClick={() => {
                setOpenModal(true);
              }}
            />
            <span
              onClick={() => {
                setOpenModal(true);
              }}
              className="navbar-counter bg-slate-300 p-1 rounded text-xl"
            >
              2
            </span>
          </div>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
      <hr className="bg-gray-100 h-1 mt-5 " />
    </div>
  );
};

export default Navbar;
