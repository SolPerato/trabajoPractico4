let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad){
        this.saldo += cantidad;
    },
    extraer(cantidad){
        this.saldo -= cantidad;
    },
    informar: function(){
        document.write(`Saldo de ${this.titular}: ${this.saldo}`);
    }
};


cuenta.ingresar(10);
cuenta.extraer(5);
cuenta.informar();
