

const ItemListContainer = () => {
    return (
        <div>

        </div>
    )
}

export default ItemListContainer

{/*
//---------------------------------------------
// ESTO PUEDE SERVIR PARA LA CREACION DE CARDS
//---------------------------------------------

// TRAEMOS LOS PRODS POR PETICION A UNA API O JSON 
const productos = [
    {
        id: 1,
        name: "pantalon",
        descripcion: "pantalon de jean azul",
        stock: 10
    },
    {
        id: 2,
        name: "Buzo",
        descripcion: "Buzo oversize negro",
        stock: 0
    },
    {
        id: 3,
        name: "Remera",
        descripcion: "Remera mangas corta blanca",
        stock: 8
    },
];

const Map = () => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            // Aqui copiamos los productos que creamos arriba (para simular la llamada a una API)
            setProductos([
                {
                    id: 1,
                    name: "pantalon",
                    descripcion: "pantalon de jean azul",
                    stock: 10
                },
                {
                    id: 2,
                    name: "Buzo",
                    descripcion: "Buzo oversize negro",
                    stock: 0
                },
                {
                    id: 3,
                    name: "Remera",
                    descripcion: "Remera mangas corta blanca",
                    stock: 8
                },
            ]);
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            // SI ESTA CARGANDO MOSTRAMOS EL H4
            {isLoading && <h4>Cargando...</h4>}

            // SI NO ESTA CARGANDO (OPERADOR NOT !) ENTONCES MOSTRAMOS LOS PRODUCTOS. EL "NO ESTA CARGANDO" SERIA CUANDO PASE EL TIEMPO QUE LE PUSIMOS AL SETTIMEOUT()
            {!isLoading &&
                productos.map(producto => {
                    return (
                        // USAMOS LA KEY EN EL ELEMENTO SUPERIOR ASI NO HACE FALTA PNERLA EN CADA ELEMENTO INFERIOR
                        <article key={producto.id}>
                            <h3>{producto.name}</h3>
                            <p>{producto.descripcion}</p>
                            {producto.stock > 0 ? <button>Agregar al carrito</button> : <span>No tenemos stock de este producto</span>}
                        </article>
                    )
                })
            }
        </div>
    )
}
*/}