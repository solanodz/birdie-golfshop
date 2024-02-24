import { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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


const Cart = () => {

    const { cantidadEnCarrito } = useContext(CartContext)
    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
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
                                            <div className="flex text-left flex-col sm:p-4 p-0">
                                                <h2 className="text-xs sm:text-md font-bold">{prod.name}</h2>
                                                <p className='text-sm'>Precio unit: $ {prod.price}</p>
                                                <p className='text-xs sm:text-sm'>Precio total: $ {prod.price * prod.cantidad}</p>
                                                <p className='text-xs sm:text-sm'>Cantidad: {prod.cantidad}</p>
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