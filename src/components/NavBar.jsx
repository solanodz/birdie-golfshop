
import logoBirdie from "../assets/logos/pajaritosolo.png"
import Cart from './Cart'


const NavBar = () => {
    return (
        <div className="fixed w-full bg-white z-10">
            <div className="mx-6 text-sm p-1 flex flex-col md:flex-row justify-between border-b-2 border-gris">
                <div className="flex items-center justify-center">
                    <img
                        src={logoBirdie}
                        alt="logo birdie golfshop"
                        className="h-16"
                    />
                </div>
                <div className="justify-center flex items-center">
                    <ul className="flex flex-row justify-between items-center md:justify-center ">
                        <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro">Inicio</li>
                        <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro">Productos</li>
                        <li className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro">Contactanos</li>
                        <li><div className="bg-black md:ml-auto mt-2 p-2 rounded-full text-md flex justify-center items-center hover:bg-verdeOscuro text-white">
                            <Cart />
                        </div></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default NavBar
