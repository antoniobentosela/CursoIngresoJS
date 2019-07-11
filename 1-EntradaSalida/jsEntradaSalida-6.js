/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var dato1;

  var dato2;

  dato1 = document.getElementById ("numeroUno").value;

  dato2 = document.getElementById ("numeroDos").value;

  dato1 = parseInt (dato1);

  dato2 = parseInt (dato2);

  alert ("La suma es " + (dato1 + dato2));

}

