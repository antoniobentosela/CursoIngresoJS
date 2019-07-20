function mostrar()
{

	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var promedioPositivos;
	var promedioNegativos;
	var numero;
	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta==true)
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);

			if(numero>0)
			{

				contadorPositivos ++;
				acumuladorPositivos = acumuladorPositivos + numero;

			} else { 

				if(numero<0)
				{
				
					contadorNegativos++;
					acumuladorNegativos = acumuladorNegativos + numero;

				} else {

					contadorCeros ++;

				}
			}

			if (numero %2 == 0){

				contadorPares ++;
			}

		
		
		respuesta = confirm ("Desea continuar?");
	
	}

	if(contadorPositivos != 0){

		promedioPositivos = acumuladorPositivos / contadorPositivos;

	} else {

		promedioPositivos = "No se ingresaron numeros Positivos";
	}
	if (contadorNegativos != 0){

		promedioNegativos = acumuladorNegativos / contadorNegativos;
	
	} else {

		promedioNegativos = "No se ingresaron numeros Negativos";

	}
	
	
	

	document.write ("1.Suma de positivos: " + acumuladorNegativos + "<br>");	
	document.write ("2.Suma de negativos: " + acumuladorNegativos + "<br>");
	document.write ("Cantidad de Positivos: " + contadorPositivos + "<br>"); 
	document.write ("Cantidad de Negativos: " + contadorNegativos + "<br>");
	document.write ("Cantidad de ceros: " + contadorCeros + "<br>");
	document.write ("Cantidad de Pares: " + contadorPares + "<br>");
	document.write ("Promedio Positivos: " + promedioPositivos + "<br>");
	document.write ("Promedio Negativos: " + promedioNegativos + "<br>");



}//FIN DE LA FUNCIÓN