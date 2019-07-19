function mostrar()
{

	var contador=0;
  // declarar variables
  var num;
  var max;
  var min;
  var primeravez = true;

  while (prompt ("escriba un numero")){

    do {
      num = prompt ("escriba un numero");
      num = parseInt (num);

    } while (isNaN(num));

      if (primeravez){

          primeravez =false;
          max = num;
          min = num;

      }

  }

  document.getElementById ("maximo").value = max;
  document.getElementById ("minimo").value = min;

	var respuesta='si';

	while(respuesta!='no')
	{


	}




}//FIN DE LA FUNCIÓN
