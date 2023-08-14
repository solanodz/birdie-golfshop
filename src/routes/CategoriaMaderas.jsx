import { Link } from 'react-router-dom'
import MaderaG425 from '../assets/sin-fondo/maderas/madera-g425.png'
import MaderaM4 from '../assets/sin-fondo/maderas/madera-m4.png'
import MaderaParadym from '../assets/sin-fondo/maderas/madera-paradym.png'
import MaderaRogue from '../assets/sin-fondo/maderas/madera-rogue.png'
import MaderaSteath from '../assets/sin-fondo/maderas/madera-steath.png'
import MaderaZx from '../assets/sin-fondo/maderas/madera-zx.png'



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
const productsMaderas = [
    {
        id: 1,
        name: 'Madera Ping G425',
        href: '#',
        price: '$20000',
        imageSrc: MaderaG425,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Madera TaylorMade M4',
        href: '#',
        price: '$20000',
        imageSrc: MaderaM4,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 3,
        name: 'Madera Callaway Paradym X',
        href: '#',
        price: '$20000',
        imageSrc: MaderaParadym,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 4,
        name: 'Madera Callaway Rogue',
        href: '#',
        price: '$20000',
        imageSrc: MaderaRogue,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 5,
        name: 'Madera TaylorMade Steath',
        href: '#',
        price: '$20000',
        imageSrc: MaderaSteath,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 6,
        name: 'Madera Srixon ZX',
        href: '#',
        price: '$20000',
        imageSrc: MaderaZx,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    // More products...
]

export default function CategoriaMaderas() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productsMaderas.map((product) => (
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