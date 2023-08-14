/* eslint-disable react/prop-types */

const ItemDetail = ({ item }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-4 xs:mt-40 md:p-6 mx-4 md:mx-0 md:max-w-3xl flex flex-col md:flex-row md:space-x-4">
                <img
                    src={item.href}
                    alt={item.imagenAlt}
                    className="w-full h-40 md:w-2/5 md:h-auto object-contain"
                />
                <div className="md:w-3/5 md:pl-4 flex flex-col justify-between">
                    <h3 className="text-base md:text-xl py-2 font-semibold">{item.name}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                    <h4 className="text-lg font-semibold md:text-xl mt-2">$ {item.price}</h4>
                    <button className="bg-verdeOscuro text-white py-1 px-3 rounded-md mt-4">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}


export default ItemDetail
