import React, { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="p-4 relative h-96">
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')` }}></div>
                <div className="container mx-auto relative z-10">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            {/* <img src={logo} alt="Logo" className="h-8 mr-2" /> */}
                            <span className="text-white text-xl font-bold">Your Logo</span>
                        </div>
                        <div className="hidden md:flex">
                            <a href="#" className="text-white mx-4">Home</a>
                            <a href="#" className="text-white mx-4">About</a>
                            <a href="#" className="text-white mx-4">Services</a>
                            <a href="#" className="text-white mx-4">Contact</a>
                        </div>
                        <div className="md:hidden">
                            <button className="text-white" onClick={toggleMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    {/* Responsive Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white bg-opacity-50 z-10 absolute w-full">
                            {/* <div className="md:hidden"> */}
                            <a href="#" className="block text-white py-2 px-4 text-black">Home</a>
                            <a href="#" className="block text-white py-2 px-4 text-black">About</a>
                            <a href="#" className="block text-white py-2 px-4 text-black">Services</a>
                            <a href="#" className="block text-white py-2 px-4 text-black">Contact</a>
                        </div>
                    )}
                    <p className='h-25 text-white font-bold text-7xl flex items-center justify-center mt-4'>zomato</p>
                    <p style={{ fontFamily: 'sans-serif' }} className='text-white font-bold text-2xl flex items-center justify-center'>Discover the best food & drinks in Indore</p>
                    <div className="flex items-center rounded-md justify-between mt-4 border bg-white px-2 w-[280px] mx-auto">
                        <i className="fa-solid fa-magnifying-glass text-2xl text-red-500"></i>
                        <input type="text" placeholder="Search" className="py-3 focus:outline-none w-[220px]" />
                        {/* <button className="sc-cnTzU dtejtM">Search</button> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
