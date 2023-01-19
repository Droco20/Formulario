/* 
En la siguiente es un evento de escucha sobre si ha cargado
de manera correcta el HTML, para que  apartir de eso
pueda ejecutar el codigo javascript de manera correcta.
*/
document.addEventListener("DOMContentLoaded", function(event) {
    // En la siguiente linea se imprime que se ha cargado correctamente.
    console.log("DOMContentLoaded event successfully")
})

/* 
En la siguiente funcion tenemos que esta se 
dispara desde el action del formulario en 
la linea 17 del archivo: index.html
*/
function save() {
    console.log("triggering save.")
    /* 
    En la siguiente linea establecemos cual seria 
    la URL donde enviaremos los datos.
    */
    let url = "https://api.requestcatcher.com/test"
    /* 
    En la siguiente linea tenemos la ejecución de la promesa 
    para capturar la informacion del formulario.
    */
    getData('#form').then(data => {
        console.log("Tus datos:", data)
        /* 
        En la siguiente linea tenemos la ejecución de la promesa 
        para enviar la informacion del formulario a la URL que 
        recibe esos datos.
        */
        fetchApi(url, data).then(data2 => {
            // Se confirma que se ha enviado la informacion del formulario.
            console.log("Ya se envio la informacion")
        })
    })
}