# Proyecto Punto de Venta
## Descripción
El proyecto simula un punto de venta en sitio, para ello el vendedor primero toma el pedido, para esto debe hacer click en el botón de "Nuevo Pedido", esto activa el menú para empezar agregar los items del pedido.

Al dar click en cada item se va modificando el pedido.

Una vez finalizado el pedido se procede a crear la orden del pedido, para se debe dar click en el botón "Crear Orden", esto arrogara el número de orden que se le debe dar al cliente para solicitar la entrega de su pedido.

## Features
Se consume un API para mostrar los productos del menú, también cuando se crea el pedido se envía la orden a esta API.

Se muestra el número de ordern usando la líbreria sweetalert2.

También el diseño del sistema usa el framework bootstrap 5.

La arquitectura de la aplicación es modular divida en diversos modulos.