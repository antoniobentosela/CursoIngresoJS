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
                preciofinal = (precio - preciofinal);

                    document.getElementById ("elPrecioFinal").value = preciofinal;

                
            
}
