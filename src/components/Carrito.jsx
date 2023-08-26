import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div>
            <h1 className='text-5xl font-bold pt-28 pb-2 pl-8'>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className="pl-8 pb-2 flex sm:flex-row p-auto mx-2 my-2 sm:mx-12">
                        <img src={prod.href} alt={prod.imageAlt} className="w-fitw-full h-40 max-h-52 md:w-2/5 md:h-auto object-contain" />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold">{prod.name}</h2>
                            <p>Precio unit: $ {prod.price}</p>
                            <p>Precio total: $ {prod.price * prod.cantidad}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <button onClick={() => eliminarProducto(prod.id)} className="text-md text-white rounded-md w-fit bg-rojo py-1 px-2 flex mt-auto"><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>
                    </div>
                ))

            }

            {carrito.length > 0 ?
                <div className=" mr-6 flex flex-col justify-end items-end">
                    <h2 className="ml-4 mb-3 flex justify-end mt-8 font-semibold bg-gris p-2 px-6 text-lg rounded-md w-fit">Precio Total: $ {precioTotal()}</h2>
                    <button className="text-md text-white rounded-md w-fit bg-rojo p-2" onClick={handleVaciar}><FontAwesomeIcon icon={faTrashCan} /> Vaciar Carrito</button>
                </div> :
                <p className="pl-8 pt-4 text-2xl text-rojo font-bold">El carrito esta vacio!</p>
            }
        </div>
    )
}

export default Carrito
