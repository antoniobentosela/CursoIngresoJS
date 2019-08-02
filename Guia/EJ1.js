function ej1(){

  console.log("ej1");

  contador = 0
  var altura
  var base
  var angulo1
  var angulo2
  var angulo3

  while (contador < 1){

    altura = prompt ("ingrese la altura de un triangulo");
    base = prompt ("ingrese la base de un triangulo");
    angulo1 = prompt ("ingrese los angulos de un triangulo");
    angulo2 = prompt ("ingrese los angulos de un triangulo");
    angulo3 = prompt ("ingrese los angulos de un triangulo");

    altura = parseInt (altura);
    base = parseInt (base);
    angulo1 = parseInt (angulo1);
    angulo2 = parseInt (angulo2);
    angulo3 = parseInt (angulo3);

    if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90){

      alert ("La superficie es " + base * altura / 2);



      break;
    }
    alert ("no es un triangulo rectangulo");

    break;

  }

}
  function ej2 (){

    var respuesta = true;
    var nombre
    var edad
    var ganados
    var perdidos
    var acumuladorEdad = 0
    var promedio
    var contador = 0
    var nombreMax
    var contadorRecord = 0

    while (respuesta == true){

      do {

        nombre = prompt ("escriba un nombre");
        var auxiliarNombre = parseInt (nombre);  // Asi se valida que sean letras y no numeros.

      } while (!isNaN (auxiliarNombre))

      do {

        edad = prompt ("escriba la edad");
        edad = parseInt (edad);                  // Asi se valida que sean numeros y no letras y mayor a 0.

      } while (isNaN (edad) || edad < 0);

      do {

        ganados = prompt ("escriba partidos ganados");
        ganados = parseInt (ganados);

      } while (isNaN (ganados) || ganados < 0);

      do {

        perdidos = prompt ("escriba partidos perdidos");
        perdidos = parseInt (perdidos);

      } while (isNaN (perdidos) || perdidos < 0);

      acumuladorEdad = acumuladorEdad + edad;
      contador ++;

      promedio = (acumuladorEdad / contador);




      respuesta = confirm ("Desea continuar?");

    }

    alert ("El promedio de edad es " + promedio);
  }




