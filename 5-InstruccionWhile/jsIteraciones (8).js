function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

  do {

    do {
      contador = prompt ("escriba un numero");
      contador = parseInt (contador);

    } while (isNaN(contador));

    if (contador >=0){

      positivo += contador;

    } else  {

      negativo *= contador;
    }
  } while (confirm ("Desea continuar?"));




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
