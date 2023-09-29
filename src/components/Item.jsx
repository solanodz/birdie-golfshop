import { Link } from "react-router-dom";
import Reveal from "./Reveal";

/* eslint-disable react/prop-types */
const Item = ({ producto }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-xl px-4 py-4 sm:px-4 sm:py-8 lg:max-w-6xl lg:px-4">
                <h2 className="sr-only">Products</h2>
                <Reveal>
                    <div className="group border-gris h-fit border p-2 rounded-md">
                        <div className="object-fit aspect-h-1 aspect-w-1 w-full  overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <div>
                                <img
                                    src={producto.href}
                                    alt={producto.imagenAlt}
                                    className="h-full w-full object-contain object-center"
                                    style={{ aspectRatio: '1 / 1' }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="bg-verdeClaro rounded-full w-fit px-2 text-verdeOscuro text-xs font-semibold">{producto.category}</p>
                                <h3 className="mt-4 text-md h-12 text-black font-refgular">{producto.name}</h3>
                            </div>
                            <p className="mt-1 text-xl py-2 font-medium text-black">$ {producto.price}</p>
                            <div className="flex flex-row justify-between">
                                <Link to={`/item/${producto.id}`} className="bg-black text-white p-1 px-3 rounded-md w-max mt-1">+ info</Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Item;


{/* < div className="bg-white" >
            <Reveal>
                <div className="mx-auto border-2 border-gris rounded-lg m-2 max-w-2xl px-4 py-4 sm:px-4 sm:py-8 lg:max-w-6xl lg:px-4">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                            <img
                                src={producto.href}
                                alt={producto.imagenAlt}
                                className="h-full w-full object-contain object-center"
                                style={{ aspectRatio: '1 / 1' }}
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>

                                <p className="mt-1 text-xs flex bg-verdeClaro text-verdeOscuro px-2 font-medium w-fit rounded-full ">{producto.category}</p>
                                <h3 className="text-sm h-8 text-gray-700">
                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                    {producto.name}
                                </h3>
                                <p className="text-lg mt-4 font-medium text-gray-900">{producto.price}</p>
                                <div className="flex flex-row justify-between">
                                    <Link to={`/item/${producto.id}`} className="bg-black text-white cursor-pointer p-1 px-3 rounded-md w-max mt-1">+ info</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div > */}