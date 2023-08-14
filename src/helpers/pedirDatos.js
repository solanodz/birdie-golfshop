import products from "../prods/productos.json";

const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}

export default pedirDatos


export const pedirItem = (id) => {
    return new Promise((resolve, reject) => {

        const item = products.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}