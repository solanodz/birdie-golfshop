/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { pedirItem } from '../helpers/pedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/config'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id;
    console.log(id)

    {/* useEffect(() => {
        pedirItem(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id]) */}

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
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer
