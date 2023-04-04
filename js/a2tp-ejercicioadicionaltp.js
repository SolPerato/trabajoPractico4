class animal{
constructor(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
}
 emitirSonido(){
    document.write("<br>");
    document.write("Hola me llamo:  " + this.nombre+ "  Mi edad es: " +this.edad + " años")
    document.write("<br>");
}

}
class perro extends animal{
    constructor(nombre , edad){
        super(nombre , edad);

    }

    sonar(){
     document.write("Soy un perro y mi sonido es un ladrido");
     document.write("<br>");
    }
    
      Ladrar(){
        document.write("Guauu!!");
        document.write("<br>");
       }
}
class gato extends animal{
    constructor(nombre , edad){
        super(nombre , edad);

    }

    sonar(){
     document.write("Soy un gato y mi sonido es un maullido");
     document.write("<br>");
    }
    
      maullido(){
        document.write("Miaauuu!!");
        document.write("<br>");
       }
}



const Lola = new perro ("LOLA" , 3),
 Paco = new gato("PACO" , 4);
 let obejtoperro = new perro("Odin ", 6 );
 let objgato = new gato("Pompom ",2 )
console.log(Lola);
console.log(Paco);
Lola.emitirSonido();
Lola.sonar();
Lola.Ladrar();
Paco.emitirSonido();
Paco.sonar();
Paco.maullido();
obejtoperro.emitirSonido();
obejtoperro.sonar();
obejtoperro.Ladrar();
objgato.emitirSonido();
objgato.sonar();
objgato.maullido();