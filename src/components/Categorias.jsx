
import catBolsas from '../assets/fondos/cat-bolsas.jpg'
import catDrives from '../assets/fondos/cat-drives.jpg'
import catMaderas from '../assets/fondos/cat-maderas.jpg'
import catHierros from '../assets/fondos/cat-hierros.jpg'
import catWedges from '../assets/fondos/cat-wedges.jpg'
import catPutters from '../assets/fondos/cat-putters.jpg'

const callouts = [
    {
        name: 'Bolsas',
        imageSrc: catBolsas,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Drives',
        imageSrc: catDrives,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Maderas',
        imageSrc: catMaderas,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Hierros',
        imageSrc: catHierros,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Wedges',
        imageSrc: catWedges,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Putters',
        imageSrc: catPutters,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    }
]

const Categorias = () => {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-4xl font-bold text-gray-900">Categorias</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 m-3 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="m-3 absolute rounded-lg inset-0 flex flex-col justify-center items-center text-center p-4 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h3 className="text-3xl font-bold">{callout.name}</h3>
                                    <p className="text-base">{callout.description}</p>
                                    <a href={callout.href} className="mt-2 text-blue-500 underline">
                                        Ver Productos
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categorias
