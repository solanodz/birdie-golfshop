
const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {


    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <button
                        onClick={handleSumar}
                        className="text-white bg-verdeOscuro border-2 border-verdeOscuro hover:bg-white hover:text-verdeOscuro duration-300 font-semibold h-fit px-2 py-0.5 rounded-md"
                    >
                        +
                    </button>
                    <p className='mt-1 px-4 font-semibold text-verdeOscuro text-lg'>{cantidad}</p>
                    <button
                        onClick={handleRestar}
                        className="text-white bg-verdeOscuro border-2 border-verdeOscuro hover:bg-white hover:text-verdeOscuro duration-300 font-black h-fit px-2 py-0.5 rounded-md"
                    >
                        –
                    </button>
                </div>
                <button onClick={handleAgregar} className="text-white bg-verdeOscuro border-2 border-verdeOscuro hover:bg-white hover:text-verdeOscuro duration-300 py-1 px-3 rounded-md mt-4">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
