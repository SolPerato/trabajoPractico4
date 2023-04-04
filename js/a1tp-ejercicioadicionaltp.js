class persona{
constructor(nombre, edad , Profecion){
        this.nombre=nombre;
        this.edad=edad;
        this.Profecion=Profecion;
       }

     saludar(){
            console.log("Hola , soy " + this.nombre + " Mi edad es: " + this.edad +" años "+ " Mi Profecion es: "+ this.Profecion);
     }
     
     Despedirse(){
        console.log("Hasta la proxima, un gusto conocerte :) ");
 }

}

let obejtopersona = new persona("Sol Perato ", 22 , "Estudiante");
let objpersona = new persona("Hernan Perato ",20 , "Estudiante ");
let objpersona2 = new persona("Agustin Varela " , 24 , "Tecnico ")
obejtopersona.saludar();
obejtopersona.Despedirse();
objpersona.saludar();
objpersona.Despedirse();
objpersona2.saludar();
objpersona2.Despedirse();