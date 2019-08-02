function mostrar()
{
    var acumulador = 0
    var contador = 0
    var nota = true
    var sexo = true
    var promedio
    var notaMasBaja

    while (contador < 5){

        contador ++;
        nota = prompt ("Ingrese la nota");
        nota = parseInt (nota);
        acumulador = acumulador + nota;
        
        
         if (nota > 10){

            nota = false
         
            alert ("nota invalida");

            break;
        } 

        sexo = prompt ("Ingrese el sexo");

            if (sexo != "f" && sexo != "m"){

                sexo = false
                alert ("sexo invalido");    
                
                break;
            }
        }

        promedio = acumulador / contador
        
        alert ("El promedio es " + promedio);



}
