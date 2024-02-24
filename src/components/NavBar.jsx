
import { Link } from "react-router-dom";
import logoBirdie from "../assets/pajaritosolo.png"
import Cart from './Cart'
import "/src/index.css"

import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components = [
    {
        id: 1,
        title: 'Bolsas',
        category: 'bolsas',
    },
    {
        id: 2,
        title: 'Drives',
        category: 'drives',
    },
    {
        id: 3,
        title: 'Maderas',
        category: 'maderas',
    },
    {
        id: 4,
        title: 'Hierros',
        category: 'hierros',
    },
    {
        id: 5,
        title: 'Wedges',
        category: 'wedges',
    },
    {
        id: 6,
        title: 'Putters',
        category: 'putters',
    },
]


const Navbar = () => {

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
                                                    </Link>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="hidden sm:flex">
                                        <Link to={'/contact'} className={buttonVariants({ variant: 'ghost' })}>Contactanos</Link>
                                    </NavigationMenuItem>
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

export default Navbar
