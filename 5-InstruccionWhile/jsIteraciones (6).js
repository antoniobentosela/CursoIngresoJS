function mostrar()
{

	var contador=0;
  var acumulador=0;
  var num

 while (contador < 5){

  do {

    num = prompt ("Escriba un numero");
    num = parseInt (num);


    } while (isNaN (num));

    contador ++;
    acumulador = acumulador + num;
}






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
