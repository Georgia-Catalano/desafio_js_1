//Desafio Complementario 1
/*let puesto = prompt("Ingrese un numero que indique su puesto final en la carrera o escriba ESC si desea salir");
while(puesto !="ESC"){
    switch (puesto) {
        case "1":
            alert("Medalla de oro");
            break;
        case "2":
            alert("Medalla de plata");
            break;
        case "3":
            alert("Medalla de bronce");
            break;
        default:
            alert("No ingresaste al podio");
            break;
    }
puesto=prompt("Ingrese un numero que indique su puesto final en la carrera o escriba ESC si desea salir");
}
*/

//Desafio Entregable 1 

/*function solicitarValor(){
    let nombre= prompt("Por favor ingrese su nombre:");
    let valor = parseFloat(prompt("Por favor, ingrese el monto que desea adquirir para conocer el valor total de su credito. Se consideran válidos sólo números enteros.)"));
    let interes = 5;
    let totalPrestamo = valor * interes ;

    console.log("Usted desea adquirir $" + valor + ".");
    console.log("La suma total que debera abonar por su prestamo sera de $" + totalPrestamo + ". Cuenta con 5 cuotas mensuales para liquidar el mismo.");
    let idcliente = nombre + " " + totalPrestamo;

}

solicitarValor();
*/

//Desafio Entregable 1 

/* let puesto=prompt("Ingrese un numero que indique su puesto final en la carrera o escriba ESC si desea salir");
function podio(){
    while(puesto !="ESC"){
        switch (puesto) {
            case "1":
                console.log("Medalla de oro");
                break;
            case "2":
                console.log("Medalla de plata");
                break;
            case "3":
                console.log("Medalla de bronce");
                break;
            default:
                console.log("No ingresaste al podio");
                break;
        }
    puesto=prompt("Ingrese un numero que indique su puesto final en la carrera o escriba ESC si desea salir");
    }
}
podio();
*/

//Desafio Entregable 1 

/* function podio (){
    let nombre = prompt("Ingrese su nombre")
    let puesto= prompt ("¿En que lugar llego a la meta?"); 
    if (puesto == 1) {
        console.log (nombre +" Ganaste");
    } else {
        console.log (nombre + " No ganaste");
    }

}

podio();
*/


// DESAFIO PRE ENTREGA 1
/*
//ARRAY
const medallas = [{id:1, medalla:"Oro"},
                {id:2, medalla:"Plata"},
                {id:3, medalla:"Bronce"} ]

//DECLARACION DE VARIABLE PUESTO PARA INGRESAR PUESTO EN LA CARRERA                
let puesto= parseFloat (prompt("Ingrese numero de llegada"))
//TIPOS DE BUSQUEDA QUE REALIZO EN ARRAY PARA VERIFICAR SI EL PUESTO INGRESADO TIENE UNA MEDALLA
const busqueda= medallas.find(medalla => medalla.id===puesto)
//console.log(busqueda)
const resultado = medallas.some(medalla => medalla.id===puesto)
//console.log(resultado)
//FUNCION QUE ME PERMITE CONOCER SI TENGO QUE OTORGAR UNA MEDALLA O NO
function darMedalla(){
//return console.log(busqueda) &&
//        console.log(resultado)
if (resultado ===true) {
    console.log("Ingreso al podio")
    console.log(busqueda);

} else {
    console.log("No ingreso al podio")
}
}
darMedalla()
*/

DESAFIO EVENTOS

//EVENTOS BOTONES

let boton = document.getElementById("boton");
boton.onclick=()=> {console.log("Click")}
boton.onmousemove=()=> {console.log("pasaste sobre el boton pero no hiciste click")}

//EVENTO TECLADO
// input ejemplo 1
let inputNombre = document.getElementById("usuario")
let inputContrasena= document.getElementById("contraseña")

inputNombre.onkeyup= () => {console.log("Nombre usuario")}
inputContrasena.onkeydown=() => {console.log("Cantidad digitos")}

// formulario ejemplo 2
let formulario = document.getElementById("formulario")
formulario.addEventListener("submit",validarformulario)

function validarformulario(e){
    e.preventDefault();
    let datosformulario = e.target
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
}

