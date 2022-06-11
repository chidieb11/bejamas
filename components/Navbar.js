import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "./Modal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="top-0 sticky z-10">
        <div className="flex justify-between items-center mt-4 sm:m-5 text-4xl sm:mt-2 sm:mr-20 sm:ml-20">
          <div className="cursor-pointer font-bold">Bejamaz</div>
          <div>
            <div className="cursor-pointer">
              <AiOutlineShoppingCart
                className=""
                onClick={() => {
                  setOpenModal(true);
                }}
              />
              <span
                onClick={() => {
                  setOpenModal(true);
                }}
                className="absolute top-4 bg-slate-300 p-1 rounded text-xl"
              >
                2
              </span>
            </div>
            {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        </div>
        <hr className="bg-gray-100 h-1 mt-5 sm:mr-20 sm:ml-20" />
      </div>
    </>
  );
};

export default Navbar;
