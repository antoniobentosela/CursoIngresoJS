function mostrar() {
  var nombreMax;
  var peso;
  var edad;
  var tipo;
  var nombre;
  var contador = 0;
  var promedio;
  var acumulador = 0;
  var edadMax;
  var esPrimerPerro = true;
  var contadorPesoEdad = 0;
  

  while (contador < 4) {

    contador++;

    tipo = prompt("Ingrese el tipo de su mascota");

    while (tipo != "gato" && tipo != "perro") {

      tipo = prompt("Error ingrese un tipo que sea gato o perro");

    }
    peso = prompt("Ingrese el peso de su mascota");

    while (isNaN(peso) == true || peso > 100 || peso < 1) {

      peso = prompt("Error ingrese un peso entre 1 y 100");

    }

    edad = prompt("Ingrese el edad de su mascota");

    while (isNaN(edad) == true || edad > 25 || edad < 1) {

      edad = prompt("Error ingrese un edad entre 1 y 25");
    }

    nombre = prompt("ingrese el nombre de su mascota");

    peso = parseInt(peso);
    acumulador = acumulador + peso;
    edad = parseInt(edad);

    if (tipo == "perro" && esPrimerPerro) {
      edadMax = edad;
      nombreMax = nombre;
      esPrimerPerro == false;

    } else {

      if (tipo == "perro" && edad > edadMax) {

        edadMax = edad;
        nombreMax = nombre;
      }

    }

    if (peso < 10 && edad > 10){
      contadorPesoEdad ++;
      
    }
  }

  
 
  promedio = acumulador / contador;



  alert("El promedio del peso total es " + promedio + "\n" +
    "El perro mas viejo es " + nombreMax);
  alert ("Cantidad animales " + contadorPesoEdad);
}
