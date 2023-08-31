/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

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
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-4 xs:mt-40 md:p-6 mx-4 md:mx-0 md:max-w-3xl flex flex-col md:flex-row md:space-x-4">
                <img
                    src={item.href}
                    alt={item.imagenAlt}
                    className="w-full h-40 md:w-2/5 md:h-auto object-contain"
                />
                <div className="md:w-3/5 md:pl-4 flex flex-col justify-between">
                    <div>
                        <h3 className="text-base md:text-xl py-2 font-semibold">{item.name}</h3>
                        <p className="bg-verdeClaro rounded-full w-fit px-4 border-verdeOscuro border-2 text-verdeOscuro font-semibold">{item.category}</p>
                    </div>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                    <h4 className="text-lg font-semibold md:text-xl mt-2">$ {item.price}</h4>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />

                </div>
            </div>
        </div>
    );
}


export default ItemDetail
