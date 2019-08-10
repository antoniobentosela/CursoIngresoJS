function mostrar()
{
	var localidad;
	var habitantes;
	var respuesta = true;
	var temperatura;
	var contadorPar;
	
	while (respuesta){

		localidad = prompt ("Ingrese la localidad en la que vive");
		
		habitantes = prompt ("Ingrese la cantidad de habitantes de su localidad");
		
		while (isNaN (habitantes) == true || habitantes > 40 || habitantes < 1){ 

			habitantes = prompt ("Error: Ingrese una cantidad entre 1 y 40");

		} 

		temperatura = prompt ("Ingrese la temperatura minima de su localidad");

		while (isNaN (temperatura) == true || temperatura > 50 || temperatura < -50){ 
			
			temperatura = prompt ("Error: Ingrese una temperatura entre -50 y 50");
			
		} 


			if (temperatura % 2 == 0) {
				contadorPar ++;
			} // esto es para calcular los pares. 

			


		respuesta = confirm ("Desea continuar?");
	}

}
