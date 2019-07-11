/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var dato1

  dato1 = document. getElementById ("sueldo").value;

  dato1 = parseInt (dato1);

  document. getElementById ("resultado").value = (dato1 * 110 / 100);







}
