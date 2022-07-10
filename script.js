// Clase de producto con el constructor con los parametros nombre, marca, precio y stock con valores predeterminados
class Producto{
    constructor(nombre =" ", marca = " ", precio = "1", stock ="1"){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}
// Array vacio, que luego va a llenar el usuario con objetos y declaro las variables globales
const productos = [];
let precio, stock, nombre, marca, continua
/* ciclos do/while con los mensajes al usuario y los prompt y sus respectivas condicionales
el primer ciclo es mientras el usuario me quiera ingresar mas productos y el segundo 
es para validaciones de los numeros ingresados */
do{
    do{
    nombre = prompt ("Ingrese un nombre de producto").toLowerCase()
    marca = prompt ("ingrese marca").toLowerCase()
    } while ((nombre.length == 0 || marca.length == 0))

    do{
        precio = parseFloat(prompt("ingrese un precio"))
        stock = parseFloat(prompt("ingrese stock"))
    }while ((isNaN (precio) || isNaN (stock)) || (precio <=0 || stock <=0))
    //llenar el array vacio con los productos ingresados, y la pregunta si quiero o no seguir cargando productos
    const producto = new Producto (nombre, marca, precio, stock)
    productos.push (producto)
    continua= prompt ("Desea ingresar mas productos? S = SI/N = NO").toLowerCase()

}while (continua != "n")

//sale por consola ordenado por precio de menor a mayor
const ordenS = productos.map(persona => persona.precio)
console.log(ordenS.sort((a,b) => a-b))

//sale por consola los productos que tengan un stock menor o igual a 5
const alarmaStock = productos.filter(objeto => objeto.stock <=5)
alarmaStock.forEach(objeto =>{
    console.log(objeto.nombre, objeto.stock)
})

//Funcion para mostrar en un alert los productos que ingresa el cliente
const productoIngresado = () =>{
    let productoArray = [];
    for (Producto of productos) {
    productoArray.push(`Producto: ${Producto.nombre} Marca: ${Producto.marca} | Precio: ${Producto.precio} | Stock: ${Producto.stock}\n`);
    }
    alert(`Estos son los productos Ingresados:\n${productoArray.join("")}`);
}
productoIngresado();