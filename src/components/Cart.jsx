import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from '../context/CartContext'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'




const Cart = () => {
    initMercadoPago("TEST-e34757e5-e004-47ca-8aba-7fcb7117ef72")

    const [preferenceId, setPreferenceId] = useState(null)


    const [open, setOpen] = useState(false);
    const { cantidadEnCarrito } = useContext(CartContext)
    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }

    const createPreference = async () => {
        try {
            const response = await axios.post('http://localhost:8080/create_preference', {
                description: 'Compra en Birdie Golfshop',
                price: 100,
                quantity: 2,
                currency_id: 'ARS',
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id)
        }
    }

    return (
        <div>
            <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff", }}
                size='lg'
                onClick={() => setOpen(true)}
                className='cursor-pointer'
            >
            </FontAwesomeIcon>
            <span className='pl-3 pr-1'>{cantidadEnCarrito()}</span>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto bg-white relative w-screen max-w-lg">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute p-2 pr-1 sm:pr-1 mt-3 text-white rounded-es-lg rounded-tl-lg bg-black hover:bg-verdeOscuro duration-300 flex sm:p-2 -ml-9">
                                                <button
                                                    type="button"
                                                    className="relative items-center rounded-md text-gray-300 focus:outline-none focus:verdeOscuro"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full m-3 flex-col overflow-y-scroll bg-white rounded-lg py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-3xl text-left pt-6 text-black rounded-lg font-bold py-1 pl-4">
                                                    Tu Carrito:
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div>
                                                    {
                                                        carrito.map((prod) => (
                                                            <div key={prod.id} className="pl-1 pb-2 flex flex-col sm:flex-row p-auto mx-2 bg-gris mb-2 rounded-xl sm:mx-2">
                                                                <img src={prod.href} alt={prod.imageAlt} className=" bg-white m-1 mt-2 rounded-lg sm:w-24 p-4 h-40 max-h-52 md:w-2/5 md:h-auto object-contain" />
                                                                <div className="flex flex-col p-4">
                                                                    <h2 className="text-md font-bold">{prod.name}</h2>
                                                                    <p className='text-sm'>Precio unit: $ {prod.price}</p>
                                                                    <p className='text-sm'>Precio total: $ {prod.price * prod.cantidad}</p>
                                                                    <p className='text-sm'>Cantidad: {prod.cantidad}</p>
                                                                    <button onClick={() => eliminarProducto(prod.id)} className="text-md text-white rounded-md w-fit bg-rojo py-1 px-2 flex mt-auto"><FontAwesomeIcon icon={faTrashCan} /></button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    {carrito.length > 0 ?
                                                        <div className="mr-3 flex flex-col justify-end items-end">
                                                            <h2 className="ml-8 mb-3 w-full flex justify-end mt-8 font-semibold text-black bg-white p-2 px-6 sm:text-lg rounded-md">Precio Total: $ {precioTotal()}</h2>
                                                            <div className="flex flex-col w-full justify-between sm:flex-row">
                                                                <button
                                                                    type="button"
                                                                    className="text-md text-center w-full mr-1 mb-2 text-white rounded-md border-2 border-verdeOscuro bg-verdeOscuro hover:bg-white hover:text-verdeOscuro duration-300 p-2"
                                                                    onClick={handleBuy}><FontAwesomeIcon icon={faBagShopping} /> Finalizar Compra</button>
                                                                {preferenceId && <Wallet inicialization={{ preferenceId }} />}

                                                                <button className="text-md w-full mb-2 text-white rounded-md border-2 border-rojo bg-rojo hover:bg-white hover:text-rojo duration-300 p-2" onClick={handleVaciar}><FontAwesomeIcon icon={faTrashCan} /> Vaciar Carrito</button>

                                                            </div>

                                                        </div> :
                                                        <p className="sm:pl-8 pt-4 text-2xl text-rojo font-bold">El carrito esta vacio!</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default Cart