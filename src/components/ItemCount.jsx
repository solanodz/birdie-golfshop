// eslint-disable-next-line react/prop-types
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "./ui/button";
import { toast } from "sonner";


const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {


    return (
        <div>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex items-center my-auto flex-row'>
                    <Button
                        variant='ghost'
                        onClick={handleSumar}
                        size='sm'
                    >
                        <FaPlus />
                    </Button>
                    <p className='m-1 px-5 font-semibold p-1 bg-gray-100 rounded-lg text-xl'>{cantidad}</p>
                    <Button
                        variant='ghost'
                        onClick={handleRestar}
                        size='sm'
                    >
                        <FaMinus />
                    </Button>
                </div>
                <Button
                    type="submit"
                    onClick={() => {
                        handleAgregar();
                        toast.success('Producto agregado al carrito exitosamente');
                    }}
                    className='w-full'
                >
                    Agregar al Carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
