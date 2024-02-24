/* eslint-disable react/prop-types */
import Item from '../components/Item'

const AllProducts = ({ productos }) => {
    return (
        <div>
            <h2 className='capitalize w-full mt-12 text-3xl text-center sm:text-left sm:text-4xl font-montserrat font-semibold pb-2 ml-3 font-text text-black'>Todos los productos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productos && productos.map((prod) => (
                    <Item producto={prod} key={prod.id} />
                ))}
            </div>
        </div>
    )
}

export default AllProducts
