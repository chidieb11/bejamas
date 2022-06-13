const Header = () => {
  return (
    <div className="container mt-8 mb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-bold">Vegetable Salad</h1>
        <button className="bg-black w-32 h-12 sm:w-64 text-white whitespace-nowrap sm:h-12 hover:bg-slate-800 ease-in duration-300">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
