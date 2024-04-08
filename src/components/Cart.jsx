import { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
<<<<<<< HEAD
import { faCartShopping, faBagShopping } from "@fortawesome/free-solid-svg-icons"
=======
>>>>>>> 4e31f6c902c7124063fa0658913bda23fe388f12
import { CartContext } from '../context/CartContext'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IoClose } from "react-icons/io5";
import carritoVacio from '../assets/carrito.jpg'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaBagShopping, FaCartShopping } from 'react-icons/fa6'
import { Button, buttonVariants } from './ui/button'
import { Link } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from './ui/separator'
import { toast } from 'sonner';



import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'




const Cart = () => {
<<<<<<< HEAD
    initMercadoPago("TEST-e34757e5-e004-47ca-8aba-7fcb7117ef72")

    const [preferenceId, setPreferenceId] = useState(null)


    const [open, setOpen] = useState(false);
=======

>>>>>>> 4e31f6c902c7124063fa0658913bda23fe388f12
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
        <Sheet>
            <SheetTrigger>
                <span className='ml-4 m-0 text-xs px-1.5 py-0.5 text-white font-bold bg-green-600 rounded-full'>{cantidadEnCarrito()}</span>
                <FaCartShopping className='text-2xl' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Tu Carrito</SheetTitle>
                    <SheetDescription>
                        <div className="relative flex px- sm:px-4">
                            <ScrollArea className=' h-[600px] w-max'>
                                {
                                    carrito.map((prod) => (
                                        <ScrollArea key={prod.id} className=" pl-1 pb-2 flex flex-col sm:flex-row p-auto mx-2 bg-gris mb-2 rounded-xl sm:mx-2">
                                            <div className='flex flex-row-reverse items-start'>
                                                <Button variant='link' onClick={() => {
                                                    eliminarProducto(prod.id);
                                                    toast.error('Producto eliminado del carrito');
                                                }} size='sm' className='text-right ml-auto font-medium text-red-500 flex items-center gap-1'><IoClose className='text-lg my-auto' /></Button>
                                                <img src={prod.href} alt={prod.imageAlt} className=" bg-white rounded-lg sm:w-24 p-4 h-40 max-h-40 md:w-2/5 md:h-auto object-contain" />


                                            </div>
<<<<<<< HEAD
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
=======
                                            <div className="flex text-left flex-col sm:p-4 p-0">
                                                <h2 className="text-xs sm:text-md font-bold">{prod.name}</h2>
                                                <p className='text-sm'>Precio unit: $ {prod.price}</p>
                                                <p className='text-xs sm:text-sm'>Precio total: $ {prod.price * prod.cantidad}</p>
                                                <p className='text-xs sm:text-sm'>Cantidad: {prod.cantidad}</p>
>>>>>>> 4e31f6c902c7124063fa0658913bda23fe388f12
                                            </div>
                                            <Separator />
                                        </ScrollArea>
                                    ))
                                }
                                {carrito.length > 0 ?
                                    <div className="mr-3 flex flex-col items-end">
                                        <h2 className="ml-8 mb-3 w-full flex justify-end mt-8 font-semibold text-green-700 bg-green-200 p-2 px-4 sm:text-lg rounded-md">Precio Total: $ {precioTotal()}</h2>
                                        <div className="flex gap-2 mx-auto flex-col sm:flex-row mb-8 w-full sm:mb-0">
                                            <Link
                                                to={'/checkout'}
                                                variant=''
                                                className={buttonVariants({ variant: 'default' })}
                                            ><FaBagShopping /> Finalizar Compra</Link>

                                            <Button
                                                variant="destructive"
                                                className="flex gap-2"
                                                onClick={handleVaciar}
                                            >
                                                <FontAwesomeIcon icon={faTrashCan} /> Vaciar Carrito</Button>

                                        </div>

                                    </div> :
                                    <div className='flex flex-col justify-center text-cter gap-24 my-auto items-center'>
                                        <p className="font-bold ml-auto my-6 text-red-500">El carrito esta vacio!</p>
                                        <img src={carritoVacio} alt="carrito vacio imagen" className='w-40 sm:w-72 my-auto' />
                                    </div>
                                }
                            </ScrollArea>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default Cart