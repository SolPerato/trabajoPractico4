class rectangulo{
    constructor(ancho , alto){
this.ancho = ancho; 
this.alto = alto; 
}
calcularArea() {
    return this.ancho * this.alto;
};

calcularPerimetro() {
    return 2 * (this.ancho + this.alto);
};


};

let Rectangulo = new rectangulo(10 , 20);
console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());

rectangulo.calcularArea();