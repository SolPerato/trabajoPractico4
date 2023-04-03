 class producto{
    constructor(nombre, codigo ,precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
    caracteristicas() {
      return console.log("Producto: " + this.nombre + " Codigo: " + this.codigo + " Precio:$" + this.precio );
    };

    get area() {
        return this.caracteristicas();
      }
    
 }
 
 const almacen = new producto("Papa" , 13423 , 56);
 const almacen2 = new producto("lechuga" , 45653 , 32);
 const almacen3 = new producto("tomate" , 64754 , 76);
 const almacen4 = new producto("pepino" , 76676 , 98);
 const almacen5 = new producto("cebolla" , 23545 , 106);
 const arrayVerduleria= [ (almacen.area + almacen2.area + almacen3.area + almacen4.area)];
 console.log(arrayVerduleria);

document.write( "El listado es: " + arrayVerduleria);