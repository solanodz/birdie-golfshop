/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/config'
import { FaArrowLeft } from 'react-icons/fa6'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "items", id)
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                )
            })
    }, [id])

    return (
        <div>
            <Link to={'/productos'} className='flex gap-3 items-center px-3 py-1 my-3 w-fit hover:bg-green-100 rounded-full duration-200 font-medium text-sm'>
                <FaArrowLeft />
                <p>Ir a la página de productos</p>
            </Link>
            {item && <ItemDetail item={item} />}
        </div >
    )
}

export default ItemDetailContainer
