import { Link } from 'react-router-dom'
import DriveEpic from '../assets/sin-fondo/drives/drive-epic.png'
import DriveG430 from '../assets/sin-fondo/drives/drive-g430.png'
import DriveSldr from '../assets/sin-fondo/drives/drive-sldr.png'
import DriveSt from '../assets/sin-fondo/drives/drive-st.png'
import DriveXl from '../assets/sin-fondo/drives/drive-xl.png'
import DriveZx5 from '../assets/sin-fondo/drives/drive-zx5.png'



/*
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
        // ...
        plugins: [
        // ...
        require('@tailwindcss/aspect-ratio'),
        ],
    }
    ```
*/
const productsDrives = [
    {
        id: 1,
        name: 'Drive Callaway Epic',
        href: '#',
        price: '$20000',
        imageSrc: DriveEpic,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Drive Ping G430',
        href: '#',
        price: '$20000',
        imageSrc: DriveG430,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 3,
        name: 'Drive TaylorMade SLDR',
        href: '#',
        price: '$20000',
        imageSrc: DriveSldr,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 4,
        name: 'Drive Mizuno STz',
        href: '#',
        price: '$20000',
        imageSrc: DriveSt,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 5,
        name: 'Drive Cleveland Launcher XL lite',
        href: '#',
        price: '$20000',
        imageSrc: DriveXl,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 6,
        name: 'Drive Srixon ZX5',
        href: '#',
        price: '$20000',
        imageSrc: DriveZx5,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    // More products...
]

export default function categoryDrives() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productsDrives.map((product) => (
                        <Link key={product.id} to={product.href} className="group border-gris border p-2 rounded-md">
                            <div className="border-b  border-gris  aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-contain object-center "
                                    style={{ aspectRatio: '1 / 1' }} // Add this style
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-xl py-2 font-medium text-gray-900">{product.price}</p>
                            <div className='flex flex-col'>
                                <button className='bg-verdeOscuro text-white p-1 px-3 rounded-md w-max mt-1'>Agregar al Carrito</button>
                                <button className='bg-black text-white p-1 px-3 rounded-md w-max mt-1'>+ info</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}