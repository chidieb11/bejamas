const Header = () => {
    return (
        <div className="sm:mr-20 sm:ml-20 mt-5 mb-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold">Vegetable Salad</h1>
                <button className="bg-black w-32 h-12 sm:w-64 text-white whitespace-nowrap sm:h-12">Add To Cart</button>
            </div>
        </div>
    );
};

export default Header;
