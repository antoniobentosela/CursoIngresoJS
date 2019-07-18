function mostrar()
{

    var precio
    var descuento  
    var preciofinal

        precio = prompt ("Precio"); 
        descuento = prompt ("Descuento");
        
            precio = parseInt (precio);
            descuento = parseInt (descuento); 
            
                preciofinal = (precio * (descuento / 100));

                    document.getElementById ("elPrecioFinal").value = preciofinal;

                
            
}
