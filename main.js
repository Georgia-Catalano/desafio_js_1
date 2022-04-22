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
let puesto=prompt("Ingrese un numero que indique su puesto final en la carrera o escriba ESC si desea salir");
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
