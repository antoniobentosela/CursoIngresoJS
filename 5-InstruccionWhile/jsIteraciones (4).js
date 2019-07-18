function mostrar()
{
var numero
  do {

    numero = prompt ("ingrese un numero");
    numero = parseInt (numero);

  } while (numero < 0 || numero > 9 || isNaN(numero));


  document.getElementById ("Numero").value = numero;


}//FIN DE LA FUNCIÓN
