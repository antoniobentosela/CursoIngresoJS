function mostrar()
{
  var numero1
  var numero2
  var resultado


    numero1 = prompt ("Escriba un numero");
    numero2 = prompt ("Escriba otro numero");

      if (numero1 == numero2) {

        alert (numero1 + numero2);

      } else {

        if (numero1 > numero2){

          numero1 = parseInt (numero1);
          numero2 = parseInt (numero2);

            alert (numero1 - numero2);

      } else {

        if (numero1 < numero2){

          numero1 = parseInt (numero1);
          numero2 = parseInt (numero2);

          alert (numero1 + numero2);

          if (numero1 + numero2 > 10){

            alert ("la suma es " + (numero1 + numero2) + " y supero al 10" );
          }
          }
      }
      }
}

