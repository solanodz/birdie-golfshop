/* eslint-disable react/prop-types */

import Item from './Item';
import MaxWidthWrapper from './MaxWidthWrapper';

const ItemList = ({ productos, titulo }) => {

    return (

        <MaxWidthWrapper>
            <h2 className='capitalize w-full text-3xl text-center sm:text-left sm:text-4xl font-montserrat font-semibold pb-2 ml-3 font-text text-black'>{titulo}</h2>
            <div className='w-full'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {productos && productos.map((prod) => (
                        <Item producto={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default ItemList;


