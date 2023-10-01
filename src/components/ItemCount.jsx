
// eslint-disable-next-line react/prop-types
const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {


    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex items-center flex-row'>
                    <button
                        onClick={handleSumar}
                        className="text-black bg-white border-2 border-black hover:bg-black hover:text-white duration-300 font-semibold h-fit px-2 py-0.5 rounded-md"
                    >
                        +
                    </button>
                    <p className='mt-1 px-5 font-regular text-black text-2xl'>{cantidad}</p>
                    <button
                        onClick={handleRestar}
                        className="text-black bg-white border-2 border-black hover:bg-black hover:text-white duration-300 font-black h-fit px-2 py-0.5 rounded-md"
                    >
                        –
                    </button>
                </div>
                <button
                    onClick={handleAgregar}
                    type="submit"
                    className="text-white bg-black border-2 border-black hover:bg-white hover:text-black duration-300 py-1 px-3 rounded-md mt-4"
                >
                    Agregar al Carrito
                </button>

            </div>
        </div>
    )
}

export default ItemCount
