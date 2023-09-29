import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Checkout = () => {

    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    const [pedidoId, setPedidoId] = useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
            /* Estos son los campos que vamos a ver en Firestore */
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        }
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if (pedidoId) {
        return (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex flex-col pl-auto sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    aria-hidden="true"
                                                    className='text-4xl text-verdeClaro bg-verdeOscuro rounded-full'
                                                />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    ¡Compra realizada!
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Muchas gracias por tu compra. Recibiras el pedido dentro de los proximos 5 días habiles.
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        El id de tu compra es:
                                                    </p>
                                                    <p className='font-semibold'>{pedidoId}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex bg-verdeOscuro w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-verdeOscuro duration-300 border-2 border-verdeOscuro sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Aceptar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >
        )
    }

    return (
        <div className=' items-center pt-40 flex flex-col'>
            <h1 className='text-3xl font-bold mb-4'>Finalizar Compra</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(comprar)}>
                <input className='w-80 border-2 border-black rounded-md my-1 p-1' type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input className='w-80 border-2 border-black rounded-md my-1 p-1' type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                <input className='w-80 border-2 border-black rounded-md my-1 p-1' type="phone" placeholder='Ingresa tu teléfono' {...register("number")} />
                <button className='w-fit px-4 py-1 bg-verdeOscuro rounded-md ml-auto font-medium text-white' type='submit'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout