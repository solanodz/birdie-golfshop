import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Badge } from "./ui/badge";

/* eslint-disable react/prop-types */
const Item = ({ producto }) => {
    return (
        <div className="rounded-xl shadow-lg border border-gray-200 ">
            <div className="p-3 flex flex-col">
                <h2 className="sr-only">Products</h2>
                <Reveal>
                    <Link to={`/item/${producto.id}`} className=" h-fit p-2 rounded-md">
                        <div className="object-fit aspect-h-1 sm:w-70 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                            <div className="w-50 items-center">
                                <img
                                    src={producto.href}
                                    alt={producto.imagenAlt}
                                    className="h-full w-50 sm:w-max object-contain object-center"
                                    style={{ aspectRatio: '1 / 1' }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <Badge className='w-fit'>{producto.category}</Badge>
                                <h3 className="mt-4 text-md h-12 text-black font-regular">{producto.name}</h3>
                            </div>
                            <p className="mt-1 text-xl py-2 font-medium text-black">$ {producto.price}</p>
                        </div>
                    </Link>
                </Reveal>
            </div>
        </div>
    );
};

export default Item;