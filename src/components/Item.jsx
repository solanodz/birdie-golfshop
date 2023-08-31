import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Item = ({ producto }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-4 sm:py-8 lg:max-w-6xl lg:px-4">
                <h2 className="sr-only">Products</h2>
                <div className="group border-gris h-full border p-2 rounded-md">
                    <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                            src={producto.href}
                            alt={producto.imagenAlt}
                            className="h-full w-full object-contain object-center"
                            style={{ aspectRatio: '1 / 1' }}
                        />
                        <div className="flex flex-col">
                            <p className="bg-verdeClaro rounded-full w-fit px-2 border-verdeOscuro border-2 text-verdeOscuro text-xs font-semibold">{producto.category}</p>
                            <h3 className="mt-4 text-xlg text-black font-semibold">{producto.name}</h3>
                        </div>
                        <p className="mt-1 text-xl py-2 font-medium text-black">$ {producto.price}</p>
                        <div className="flex flex-row justify-between">
                            <Link to={`/item/${producto.id}`} className="bg-black text-white p-1 px-3 rounded-md w-max mt-1">+ info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
