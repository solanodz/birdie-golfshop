import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import fondoHero from '/public/assets/fondos/fondo-hero.jpg'
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import logoBlanco from '/public/assets/logos/blanco.png'

const Checkout = () => {
    const FondoHeroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fondoHero})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const navigate = useNavigate()
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
            <Transition.Root show={open} as={Fragment} >
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
                        <div style={FondoHeroStyle} className="flex min-h-full items-center bg-transparent justify-center p-4 text-center sm:items-center sm:p-0">
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
                                    <Reveal>
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
                                                onClick={() => navigate('/hero')}
                                            >
                                                Aceptar
                                            </button>
                                        </div>
                                    </Reveal>
                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root >
        )
    }

    return (
        <div style={FondoHeroStyle} className='flex md:flex-row flex-col-reverse h-screen justify-between items-center pt-0'>
            <div className="w-1/3 mx-auto sm:mx-auto">
                <Reveal>
                    <img src={logoBlanco} alt="" />
                </Reveal>
            </div>
            <Reveal>
                <div className="text-center items-center border border-grisOscuro mx-auto bg-white px-6 sm:px-24 mt-28 sm:mt-24 h-screen pr-screen shadow-2xl shadow-black flex flex-col">
                    <h1 className='text-3xl pt-12 text-black font-regular mb-12'>Finalizar Compra</h1>
                    <form className='flex flex-col w-max' onSubmit={handleSubmit(comprar)}>
                        <input className='font-light text-sm w-64 sm:w-80 border text-black bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1.5' type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                        <input className='font-light text-sm w-64 sm:w-80 border text-black bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1.5' type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                        <input className='font-light text-sm w-64 sm:w-80 border text-black bg-transparente border-grisOscuro placeholder:italic placeholder:text-grisOscuro rounded-md my-1 px-2 py-1.5' type="phone" placeholder='Ingresa tu teléfono' {...register("number")} />
                        <button className='w-fit mx-auto px-4 py-2 border-2 border-verdeOscuro bg-verdeOscuro hover:bg-transparente hover:text-verdeOscuro duration-200 rounded-md mt-6 font-medium text-white' type='submit'>Comprar</button>
                    </form>
                </div>
            </Reveal>
        </div>
    )
}

export default Checkout