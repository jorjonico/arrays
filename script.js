// Array vacio, que luego va a llenar el usuario con objetos y declaro las variables globales
const productos = [];
let precio, stock, nombre, marca, continua
// ciclos do/while con los mensajes al usuario y los prompt y sus respectivas condicionales
do{
    do{
    nombre = prompt ("Ingrese un nombre de producto").toLowerCase()
    marca = prompt ("ingrese marca").toLowerCase()
    } while ((nombre.length == 0 || marca.length == 0))

    do{
        precio = parseFloat(prompt("ingrese un precio"))
        stock = parseFloat(prompt("ingrese stock"))
    }while ((isNaN (precio) || isNaN (stock)) || (precio <=0 || stock <=0))
    //
    const producto = new Producto (nombre, marca, precio, stock)
    productos.push (producto)
    continua= prompt ("Desea ingresar mas productos? S = SI/N = NO").toLowerCase()

}while (continua != "n")

let lista = productos
productos.forEach(objeto => {
    let lista = [];
    alert(`Los nuevos productos ingresados son:\nProducto: ${objeto.nombre}, Marca: ${objeto.marca}, | Precio: $${objeto.precio} Stock: ${objeto.stock}\n`)
})
