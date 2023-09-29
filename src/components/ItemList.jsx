/* eslint-disable react/prop-types */

import Item from './Item';

const ItemList = ({ productos, titulo }) => {

    return (

        <div className='mx-10 sm:mx-20'>
            <h2 className='capitalize w-full text-5xl text-center sm:text-left sm:text-6xl font-semibold pt-28 pb-4 ml-3 font-text text-black'>{titulo}</h2>
            <div className="grid grid-cols-1 gap-x-1 gap-y-0 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-12">
                {productos && productos.map((prod) => (
                    <Item producto={prod} key={prod.id} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;


