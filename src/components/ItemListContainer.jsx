import pedirDatos from '../helpers/pedirDatos'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState()
    const category = useParams().category

    {/* useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (category) {
                    setProductos(res.filter((prod) => prod.category === category))
                    setTitulo(category)
                } else {
                    setProductos(res);
                    setTitulo("Productos")
                }
            })
    }, [category]) */}


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
    })

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer