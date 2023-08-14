

import Item from './Item';

const ItemList = ({ productos, titulo }) => {

    return (
        <div>
            <h2 className='text-5xl font-bold pt-28 pb-2 pl-8'>{titulo}</h2>

            <div className="grid grid-cols-1 gap-x-1 gap-y-0 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-12">
                {productos && productos.map((prod) => (
                    <Item producto={prod} key={prod.id} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;


