
import { Link } from "react-router-dom";
import logoBirdie from "../assets/pajaritosolo.png"
import Cart from './Cart'
import "/src/index.css"

import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { BsFillInfoCircleFill } from "react-icons/bs";

const components = [
    {
        id: 1,
        title: 'Bolsas',
        category: 'bolsas',
        // description:
        //     <Link to="/productos/bolsas">Bolsas mochila con apoyo trípode, livianas con multiples compartimentos y bolsillos para guardar tus accesorios de golf.</Link>,
    },
    {
        id: 2,
        title: 'Drives',
        category: 'drives',
        // description:
        //     <Link to="/productos/drives">Drives de golf con loft regulable, varas de distintos pesos y flexibilidad, con la mejor calidad del mercado.</Link>,
    },
    {
        id: 3,
        title: 'Maderas',
        category: 'maderas',
        // description:
        //     <Link to="/productos/maderas">Maderas 3 y 5 con distintos grados de loft, con varas de distintos pesos y flexibilidad.</Link>,
    },
    {
        id: 4,
        title: 'Hierros',
        category: 'hierros',
        // description: <Link to="/productos/hierros">Hierros de hoja con varas de acero o grafito con distintos pesos y flexibilidad.</Link>,
    },
    {
        id: 5,
        title: 'Wedges',
        category: 'wedges',
        // description:
        //     <Link to="/productos/wedges">Wedges desde 48° a 60° con varas de acero y estrías bien marcadas para un mejor control de la pelota.</Link>,
    },
    {
        id: 6,
        title: 'Putters',
        category: 'putters',
        // description:
        //     <Link to="/productos/putters">Putters grandes o chicos con grips de distintos tamaños y formas.</Link>,
    },
]


const Navbar = () => {

    /* const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    } */


    return (
        <div>

            <MaxWidthWrapper className='md:block border-b border-gray-300 py-3'>
                <nav className='flex items-center justify-between'>
                    <div className="flex gap-6">
                        <Link to={'/'}>
                            <img src={logoBirdie} alt='logo' className='w-10' />
                        </Link>
                        <div className='flex gap-4'>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
                                        <NavigationMenuContent size='sm' className='w-fit'>
                                            <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {components.map((component) => (
                                                    <Link to={`/productos/${component.category}`} key={component.id} className='text-zinc-700 hover:bg-green-100 duration-200 p-2 rounded-lg text-sm '>
                                                        <h2 className='w-max font-semibold cursor-pointer'>{component.title}</h2>
                                                        {/* <p >{component.description}</p> */}
                                                    </Link>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="hidden sm:flex">
                                        <Link to={'/contact'} className={buttonVariants({ variant: 'ghost' })}>Contactanos</Link>
                                    </NavigationMenuItem>
                                    {/* <NavigationMenuItem>
                                    <Link to={'/register'} className={buttonVariants({ variant: 'ghost' })}>Registrarse</Link>
                                </NavigationMenuItem> */}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-6 text-xl">
                        <Cart />
                    </div>
                </nav>
            </MaxWidthWrapper >
            <div>

            </div>
        </div>
    );
}
{/* <div className="fixed w-full bg-gris mb-12 z-10">
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
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/bolsas">Bolsas</Link></li>
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/drives">Drives</Link></li>
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/maderas">Maderas</Link></li>
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/hierros">Hierros</Link></li>
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/wedges">Wedges</Link></li>
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/productos/putters">Putters</Link></li>
                            <li onClick={() => setIsOpen(false)} className=" lg:mx-4 p-3 text-black cursor-pointer font-medium hover:text-verdeOscuro"><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>  */}


export default Navbar
