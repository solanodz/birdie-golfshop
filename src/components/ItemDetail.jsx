/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Reveal from "./Reveal";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Badge } from "./ui/badge";

const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext)
    console.log(carrito)
    const [cantidad, setCantidad] = useState(1)
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <MaxWidthWrapper className="flex justify-center items-center my-32 mx-auto">
            <Reveal>
                <div className="flex sm:flex-row flex-col gap-20 mx-auto items-center justify-center">
                    <img
                        src={item.href}
                        alt={item.imagenAlt}
                        className="object-fit align-center w-2/5 h-2/5 sm:w-1/5 sm:h-1/5 mx-auto sm:mx-0"
                    />
                    <div className="md:w-3/5 md:pl-4 flex flex-col gap-6">
                        <div>
                            <Reveal>
                                <h3 className="font-montserrat text-xl sm:text-3xl py-2 font-semibold">{item.name}</h3>
                            </Reveal>
                            <Reveal>
                                <Badge className="my-2">{item.category}</Badge>
                            </Reveal>
                        </div>
                        <Reveal>
                            <p className="max-w-2xl text-sm md:text-base text-gray-600">{item.description}</p>
                        </Reveal>
                        <Reveal>
                            <div className="flex flex-col gap-4 w-full">
                                <h4 className="font-semibold text-xl">$ {item.price}</h4>
                                <ItemCount
                                    cantidad={cantidad}
                                    handleSumar={handleSumar}
                                    handleRestar={handleRestar}
                                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                                    className='w-full mx-auto'
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Reveal>
        </MaxWidthWrapper>
    );
}


export default ItemDetail
