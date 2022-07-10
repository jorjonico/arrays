let nombre = prompt("🤖 Por favor dime tu nombre");

function bienvenida(){
    alert ("🤖 Hola" + " " + nombre + " " + "Bienvenido a mi biblioteca personal");
    alert ("Aquí puedes explorar todos mis ebooks y descargarlos");
} 

bienvenida();


class libroElegido {
    constructor(libro) {
      this.id = libro.id;
      this.titulo = libro.titulo;
      this.autor = libro.autor;
      this.genero = libro.genero;
      this.cantidad = 1;
    }
}

const libros = [
    {id:1, titulo: "El Hobbit",  autor: "J.R Tolkien", genero: "Novela fantástica"},
    {id:2, titulo: "1984",  autor: "George Orwell", genero: "Ficción distópica"},
    {id:3, titulo: "El mundo perdido",  autor: "Arthur Conan Doyle", genero: "Ciencia ficcón"},
    {id:4, titulo: "Cuentos de la selva",  autor: "Horacio Quiroga", genero: "Cuento"},
    {id:5, titulo: "A sangre fría",  autor: "Truman Capote", genero: "Policial"},
  ];
  
  const canasta = [];
  let total = 0;
  
//Mostrar lista de libros disponibles


const listaLibros = () =>{
    let librosArray = [];
    for (libro of libros) {
      librosArray.push(`${libro.id} ${libro.titulo}, ${libro.autor}, ${libro.genero} \n`);
    
    }
      alert(`📙 Estos son los libros disponibles: \n ${librosArray.join("• ")}`);
    }

  listaLibros();

//Escoger libro de la lista x título y enviar a la canasta
 
  const elegirLibro = () => {
    let consultarLibro = prompt('Escribe el Título del libro ');
    const libroAgregar = libros.find(libro => libro.titulo == consultarLibro); // retorna el objeto 
    console.log(libroAgregar);
    canasta.push(new libroElegido(libroAgregar));
  }
  
elegirLibro ();

console.log ("Escogiste el libro", canasta);

canasta.forEach ( libro => {
    alert (`Felicitaciones ${nombre} 👏! agregaste ${libro.titulo} de ${libro.autor} a tu colección \n`); 
    alert ( "Que lo disfrutes 😃. Vuelve pronto 👋" );
})