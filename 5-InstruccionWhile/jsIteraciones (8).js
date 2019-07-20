function mostrar()
{

  var contador=0;
  var numero;
	var positivo=0;
  var negativo=1;
  var respuesta = true

  while (respuesta == true){

   do {
    
    numero = prompt ("Escriba un numero");
    numero = parseInt (numero);

   } while (isNaN (num));
    
    if (contador > 0){

      positivo = positivo + numero;
    
    } else{  
      
      if (contador < 0){

      negativo = negativo * numero;
    }
    
    respuesta = confirm ("Desea continuar?");
  
  }

  }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
