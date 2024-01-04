// Como agregar elementos a LocalStorage
// localStorage.setItem(llave-valor)
localStorage.setItem('usuario','Salvatore')

// LocalStorage solo permite almacenar Strings.
/* Aunque si queremos almacenar un objeto (array o objeto) 
podemos utiliar el método JSON.stringify(objeto).
*/
const producto = {
    nombre : "Monitor 27'",
    precio : 399,
}

const productoString = JSON.stringify(producto);
localStorage.setItem('Producto',productoString);

// Como obtener los datos de LocalStorage
// localStorage.getItem('llave')
const user = localStorage.getItem('usuario');
console.log(user);


// LocalStorage solo permite almacenar Strings.
/* Aunque si queremos obtener un objeto (array o objeto) 
ya almacenado en LocalStorage podemos utiliar el método JSON.parse(objeto).
*/

const productoJSON = JSON.parse(localStorage.getItem('Producto'));
console.log(productoJSON);


// Como eliminar elementos de LocalStorage
// localStorage.removeItem('llave');
localStorage.removeItem('usuario');


//Limpiar LocalStorage
// localStorage.clear()
localStorage.clear()