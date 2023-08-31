# Birdie - Golfshop

![Logo Birdie - Golfshop](/src/assets/logos/icon.png)

## Descripción

Este sitio es una simulacion de un e-commerce de productos para jugar al golf. Contiene un navbar en el que estan linekadas todas las categorías con sus respectivos productos. Cada producto cuenta con un botón de "+ info" el cual mostrará la información detallada del producto traída desde [Firebase](https://firebase.google.com/?hl=es).

Al no ser un e-commerce real, no se piden datos de localización y métodos de pago del usuario, pero para simular la compra el usuario debe escribir su nombre, email y número de telefono.

Luego de introducir estos datos, aparecerá un dialog que avisará que la compra fue realizada con exito y le brindara el id de compra al usuario que quedará guardado en firebase junto con sus datos y los detalles de la compra.

## Navegación

- [Agregando un producto al carrito y finalizar la compra](https://scribehow.com/shared/Agregando_un_producto_al_carrito_y_finalizar_la_compra__tLNBo4BQR76oXpD3uh-9Pw)
- [Agregando mas de un mismo producto al carrito y finalizar la compra](https://scribehow.com/shared/Adding_a_hero_product_to_the_cart_and_completing_the_purchase__bWsI-utfQ7KakaOQr8CbWw)
- [Eliminando productos agregados al carrito de forma individual](https://scribehow.com/shared/Eliminar_productos_del_carro_individualmente__hcQzgK1LSamoSIURpuf5FQ)
- [Vaciar el carrito](https://scribehow.com/shared/Vaciar_el_carrito__hmlONgjrQMyOxLVyqftY7g)

## Herramientas

Se creó el proyecto React usando [Vite](https://vitejs.dev/). Para los estilos se utilizó [Tailwind](https://tailwindcss.com/) y para algunos componentes como el dialog panel se utilizó [Tailwind UI](https://tailwindui.com/). Los iconos son de la libreria [Font Awesome](https://fontawesome.com/). Para la parte de navegación se utilizó [react-router-dom](https://reactrouter.com/en/main) y para el formulario de Chekout se instaló [react-hook-form](https://react-hook-form.com/).

En la parte de base de datos en la que se encuentran todos los productos se utilizo [Firebase](https://firebase.google.com/?hl=es) para guardar todos los productos y despues traerlos al sitio.

Para guardar los datos del usuario y el detalle de la compra que realizaron también se utilizó [Firebase](https://firebase.google.com/?hl=es).
