import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const category = useParams().category

    useEffect(() => {
        const productosRef = collection(db, "items")
        const q = category ? query(productosRef, where("category", "==", category)) : productosRef
        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [category])

    return (
        <div>
            <ItemList titulo={category} productos={productos} />
        </div>
    )
}

export default ItemListContainer