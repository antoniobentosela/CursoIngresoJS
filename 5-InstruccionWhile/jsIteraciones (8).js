function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

  while (confirm ("")){

    do {
      contador = prompt ("escriba un numero");
      contador = parseInt (contador);

    } while (isNaN(contador));

    if (contador >=0){

      positivo += contador;

    } else  {

      negativo *= contador;
    }
  }

	var respuesta='si';


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
