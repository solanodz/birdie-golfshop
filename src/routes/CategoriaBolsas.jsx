import { Link } from 'react-router-dom'
import CallawayNegra from '../assets/sin-fondo/bolsas/bolsa-callaway-negra.png'
import CallawayAzul from '../assets/sin-fondo/bolsas/bolsa-callaway.png'
import PowerbiltNegra from '../assets/sin-fondo/bolsas/bolsa-powerbilt.png'
import TaylorMadeNegra from '../assets/sin-fondo/bolsas/bolsa-taylormade.png'
import TitleistGris from '../assets/sin-fondo/bolsas/bolsa-titleist-gris.png'
import TitleistAzul from '../assets/sin-fondo/bolsas/bolsa-titleist.png'



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
const productsBolsas = [
    {
        id: 1,
        name: 'Bolsa Callaway Negra',
        href: '#',
        price: '$20000',
        imageSrc: CallawayNegra,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Bolsa Callaway Azul',
        href: '#',
        price: '$20000',
        imageSrc: CallawayAzul,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 3,
        name: 'Bolsa Powerbilt Negra',
        href: '#',
        price: '$20000',
        imageSrc: PowerbiltNegra,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 4,
        name: 'Bolsa TaylorMade Negra',
        href: '#',
        price: '$20000',
        imageSrc: TaylorMadeNegra,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 5,
        name: 'Bolsa Titleist Gris',
        href: '#',
        price: '$20000',
        imageSrc: TitleistGris,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 6,
        name: 'Bolsa Titleist Azul',
        href: '#',
        price: '$20000',
        imageSrc: TitleistAzul,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    // More products...
]

export default function categoryBolsas() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productsBolsas.map((product) => (
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
