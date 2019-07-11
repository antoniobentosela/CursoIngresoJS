/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var dato1;
var dato2;

function sumar()

{
  dato1 = document.getElementById ("numeroUno").value;
  dato2 = document.getElementById ("numeroDos").value;

  dato1 = parseInt (dato1);
  dato2 = parseInt (dato2);

  alert ("La suma es " + (dato1 + dato2));
}

function restar()
{
  dato1 = document.getElementById ("numeroUno").value;
  dato2 = document.getElementById ("numeroDos").value;

  dato1 = parseInt (dato1);
  dato2 = parseInt (dato2);

  alert ("La resta es " + (dato1 - dato2));
}

function multiplicar()
{
  dato1 = document.getElementById ("numeroUno").value;
  dato2 = document.getElementById ("numeroDos").value;

  dato1 = parseInt (dato1);
  dato2 = parseInt (dato2);

  alert ("La multiplicación es " + (dato1 * dato2));
}

function dividir()
{
  dato1 = document.getElementById ("numeroUno").value;
  dato2 = document.getElementById ("numeroDos").value;

  dato1 = parseInt (dato1);
  dato2 = parseInt (dato2);

  alert ("La divición es " + (dato1 / dato2));
}

