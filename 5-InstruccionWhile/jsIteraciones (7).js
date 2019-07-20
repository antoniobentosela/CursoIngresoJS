function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta= true;

  while (respuesta == true) {                           

    contador = prompt ("Escriba un numero");
    contador = parseInt (contador);
    acumulador = acumulador + contador;

    respuesta = confirm ("Desea continuar?")              
  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
