let persona = {
    nombre: "Hernan",
    apellido: "Perato",
    edad: 20,
    estudiante: true,
    hobbies: [" Los deportes ,", " me gusta mucho leer libros sobre psicologia ,", " superarme dia a dia es mi objetivo ."],
    presentarPersona: function(){
        document.write("Hola mi nombre es: " + this.nombre+ " " + this.apellido + " ");
        document.write("Mi edad es: " + this.edad + " " + "años" + " ");
        document.write("Mis hobbies son: ");
        this.hobbies.forEach(element => {
            document.write(element);
        });
    },
    agregarHobbie: (hobbie)=>{
        persona.hobbies.push(hobbie);
    },
    borrarHobbie: (hobbie)=>{
        for(let i = 0; i < persona.hobbies.length; i++){
            if(persona.hobbies[i] === hobbie){
                persona.hobbies.splice(i, 1);
            }
        }
    },
    buscarHobbie: (hobbie)=>{
        let hobbieABuscar = persona.hobbies.find(hobbie_ => hobbie_.includes(hobbie));
        document.write(`<p>${ hobbieABuscar === undefined ? 'hobbie no encontrado' : hobbieABuscar }</p>`)
    }
}

persona.presentarPersona();