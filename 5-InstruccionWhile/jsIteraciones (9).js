function mostrar()
{

	var contador=0;
  // declarar variables
  var num;
  var max;
  var min;
  var respuesta = true
  var primeravez;
  
  while (respuesta == true){

    do {
      
      num = prompt ("escriba un numero");
      num = parseInt (num);

    } while (isNaN (num));

    if (contador == 0)
    {
      max = num;
      min = num;

    } else {

        if (num > max){

          max = num;
        }
       if (num < min){

        min = num;
       }
    }



    
    
  
    contador = contador +1;

    respuesta = confirm ("Desea continuar?");

  }




  document.getElementById ("maximo").value = max;
  document.getElementById ("minimo").value = min;






}//FIN DE LA FUNCIÓN
