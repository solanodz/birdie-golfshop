
import { Link } from "react-router-dom";
import logoBirdie from "../assets/logos/pajaritosolo.png"
import Cart from './Cart'
import "/src/index.css"
import { useState } from "react";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="fixed w-full bg-gris border-b-2 border-grisOscuro  z-10">
            <div className="mx-6 text-sm p-1 flex flex-col md:flex-row justify-between border-b-2 border-gris">
                <div className="flex items-center justify-between sm:justify-around">
                    <Link to="/hero">
                        <img
                            src={logoBirdie}
                            alt="logo birdie golfshop"
                            className="h-16 mx-3"
                        />
                    </Link>
                    <ul className="mx-3">
                        <li><div className="bg-black md:ml-auto mt-2 p-2 rounded-full text-md flex justify-center items-center hover:bg-verdeOscuro text-white">
                            <Cart />
                        </div></li>
                    </ul>
                </div>
                <div className="justify-center flex items-center">
                    <nav className="flex md:flex-row flex-col justify-between items-center md:justify-center">
                        <button
                            className="md:hidden p-2"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        <ul
                            id="navbar"
                            className={`${isOpen ? 'flex' : 'hidden'
                                } md:flex md:flex-row flex-col md:justify-center items-center`}
                        >
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/bolsas">Bolsas</Link></li>
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/drives">Drives</Link></li>
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/maderas">Maderas</Link></li>
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/hierros">Hierros</Link></li>
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/wedges">Wedges</Link></li>
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/putters">Putters</Link></li>
                            <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/contacto">Contacto</Link></li>
                            {/* <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/carrito"> Carrito</Link></li> */}
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
}

export default NavBar
