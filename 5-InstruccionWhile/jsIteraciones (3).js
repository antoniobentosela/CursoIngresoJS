function mostrar()
{
var cont = 0;
var clave = prompt("ingrese el número clave.");
var error = false;
do {

  cont++;
  clave = prompt ("Error, repita la clave");

  if(cont == 3){

    error = true;

    break;
  }

}while (clave != "utn750");

  if(error){

    alert ("error");

  } else {

    alert ("exito");
  }









}//FIN DE LA FUNCIÓN
