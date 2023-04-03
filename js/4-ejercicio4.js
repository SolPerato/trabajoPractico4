 class producto{
    constructor(nombre, codigo ,precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
    caracteristicas() {
        document.write("Producto: " + this.nombre + " Codigo: " + this.codigo + "Precio:  " + this.precio );
    };

 }
 