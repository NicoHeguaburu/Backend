class constructorUsuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
}

const usuario = new constructorUsuario ("Nicolás", "Heguaburu" );

const getFullName = () => {
    return(usuario.nombre + " " + usuario.apellido)
}

console.log(usuario)

const addMascota = (mascota) => {
    usuario.mascotas = [... mascota];
}

const countMascotas = () => {
    let contador = 0
    usuario.mascotas.forEach(mascota => {
        contador = contador + 1
    });
}

const addBook = ( libro , autor ) => {
    usuario.libros = [... {nombre: libro, autor: autor}]
} 

const getBookNames = () => {
    const titulos = []
    usuario.libros.forEach(libro => {
        titulos = [... libro.nombre]
    });
    return(titulos)
}



getFullName()
addMascota("Pacha")
addMascota("Marley")
countMascotas()
addBook("Harry Potter" , "J.K ROWLINGS")
addBook("THE LORD OF THE RINGS" , "J.R.R TOLKEIN")
getBookNames()

console.log(usuario)