import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import logo from '../assets/pajaritosolo.png'
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const Checkout = () => {

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
                        <div className="flex min-h-full items-center bg-transparent justify-center p-4 text-center sm:items-center sm:p-0">
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
                                                <div className="mx-auto pl-7 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                                    <FontAwesomeIcon
                                                        icon={faCircleCheck}
                                                        aria-hidden="true"
                                                        className='text-4xl rounded-full'
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
                                        <div className="px-4 py-3 text-right sm:flex sm:flex-row-reverse sm:p-3">
                                            <Button
                                                type="button"
                                                onClick={() => navigate('/hero')}
                                            >
                                                Aceptar
                                            </Button>
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
        <MaxWidthWrapper className='mt-12 text-center'>
            <img src={logo} alt="logo Birdie" className='w-20 mx-auto my-3' />
            <h2 className='font-semibold text-3xl font-montserrat'>Ingresa tus datos para finalizar la compra</h2>
            <form
                className='my-4 grid grid-flow-row sm:grid-flow-col gap-8 items-center text-left'
                onSubmit={handleSubmit(comprar)}
            >
                <section className='flex flex-col gap-2'>
                    <article className='flex flex-col gap-2'>
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input name='full_name' required type="text" placeholder='Ingresa tu nombre completo' {...register("name")} />
                        <div className='flex gap-2 justify-between w-full'>
                            <div className='w-full'>
                                <Label htmlFor="email">E-mail</Label>
                                <Input name='email' required type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                            </div>
                            <div className='w-full'>
                                <Label htmlFor="number">Teléfono</Label>
                                <Input name='phone' required type="tel" placeholder='Ingresa tu teléfono' {...register("number")} />
                            </div>
                        </div>
                    </article>
                    <article>

                        <div>
                            <Label htmlFor="country">País</Label>
                            <Input name='country' required type="text" placeholder='País de residencia' {...register("country")} />
                        </div>
                        <div>
                            <Label htmlFor="province">Provincia</Label>
                            <Input name='province' required type="text" placeholder='Ingresa en que provincia vives' {...register("province")} />
                        </div>
                        <div>
                            <Label htmlFor="zip-code">Código postal</Label>
                            <Input name='zip_code' required type="number" placeholder='Ingresa tu codigo postal' {...register("zip-code")} />
                        </div>
                        <div>
                            <Label htmlFor="address">Dirección</Label>
                            <Input name='address' required type="text" placeholder='Ingresa tu dirección' {...register("address")} />
                        </div>
                    </article>
                </section>
                <section className='bg-green-100 border border-green-300 rounded-lg'>
                    <div className='m-4'>
                        <h3 className='font-semibold text-2xl font-montserrat'>Resumen de tu compra</h3>
                        <ul name='purchase' className='rounded-md my-2 p-1 px-2 bg-green-200'>
                            {carrito.map((prod) => (
                                <li key={prod.id} className='flex justify-between'>
                                    <div className='flex mx-'>
                                        <p>{prod.name} x </p><p>{prod.cantidad}</p>
                                    </div>
                                    <p className='px-2'>${prod.price * prod.cantidad}</p>
                                </li>
                            ))}
                        </ul>

                        <p className='font-semibold text-right rounded-md my-2 p-1 px-2 bg-green-200 text-lg'>Total: ${precioTotal()}</p>
                        <Button type='submit' className='w-full'>Comprar</Button>
                    </div>
                </section>
            </form>
        </MaxWidthWrapper >
    )
}

export default Checkout