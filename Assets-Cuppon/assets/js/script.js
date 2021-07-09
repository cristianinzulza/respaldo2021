//alert("Estoy ejecutando la función alert");
//console.log("Estoy ejecutando la función console.log");
/*
3 + 4
x = 3 + 4
x
y = x
y
y = y+y
y
x
z = "Hola"
z = z + y
console.log(z);
alert(z);

*/

//var texto = "Estoy escribiendo \'un \"texto \\ con \n \t \t salto de línea"
//alert(texto)

/*
var sumando1 = 5;
var sumando2 = 4;
var total_suma = sumando1 + sumando2;
alert(total_suma);
*/
/*
var dividendo = 8;
var divisor = 4;
var total_modulo = dividendo % divisor;
alert(total_modulo);
*/

/*
var variable1 = 5;
var variable2 = "5";
alert(variable1 == variable2);
alert(variable1 === variable2);
*/

//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Creando Tabla HTML con JavaScript y Bootstrap</h1>")
//Aquí creamos nuestra tabla con Bootstrap
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>ID</th>");
document.write("<th scope='col'>Nombre</th>");
document.write("<th scope='col'>Apellido</th>");
document.write("<th scope='col'>Email</th>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>1</th>");
document.write("<td>Morty</td>");
document.write("<td>Smith</td>");
document.write("<td>morty_smith@correo.com</td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
//Aquí cerramos nuestra tabla
document.write("</div>");
//Aquí cerramos nuestro div contenedor
