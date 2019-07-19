function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='Desea continuar?';

  while (confirm (contador)) {

    contador = prompt ("Escriba un numero");
    contador = parseInt (contador);
    acumulador = acumulador + contador;

    if (respuesta == true){
      break;
    }

  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
