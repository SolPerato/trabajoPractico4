class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
   
    get area() {
       return this.calcularArea();
     }
   
    calcularArea () {
      return this.alto * this.ancho;
    }
   
    get perimetro() {
        return this.calcularPerimetro();
      }
    
     calcularPerimetro () {
       return (this.alto + this.ancho)/2;
     }
 

  }
  
  const cuadrado = new Rectangulo(10, 10);
  const cuadrado1 = new Rectangulo(30, 10);
  
  console.log(cuadrado.area);
  console.log(cuadrado1.perimetro)