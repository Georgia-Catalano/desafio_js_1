let puesto = prompt("Ingrese un numero que indique su puesto final en la carrera o escriba ESC si desea salir");
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
