let listaProductos = [
    {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
    },
    {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
    },
    {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];


function mostrarTabla(array){
    let partial = (`
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoria</th>
            </tr>
        </thead>
        <tbody>`);
    array.forEach(element => {
        partial += (`
        <tr>
            <td>${element.nombreProducto}</td>
            <td>&dollar; ${element.precio}</td>
            <td>${element.categoria}</td>
        </tr>`)
    });
    partial += (`
        </tbody>
    </table>`)
    document.getElementById("ejercicio3_tabla").innerHTML = partial;
}

function filtrar(array,elementoAFiltrar){
    let resultados = array.filter( producto => producto.categoria.includes(elementoAFiltrar));
    mostrarTabla(resultados);
}

function buscar(array, elementoABuscar){
    let html_partial;
    let resultado = array.find( producto => producto.categoria.includes(elementoABuscar));
    if(resultado === undefined){
        document.getElementById("ejercicio3_tabla").innerHTML = (`Producto <strong>${elementoABuscar}</strong> no encontrado`);
    }else{
        document.getElementById("ejercicio3_tabla").innerHTML = (`
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${resultado.nombreProducto}</td>
                        <td>${resultado.precio}</td>
                        <td>${resultado.categoria}</td>
                    </tr>
                </tbody>
        </table>
        `)
    }
}

listaProductos.mostrarTabla();