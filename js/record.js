/*
En la siguiente funcion es para 
poder capturar la informacion del formulario.
*/
const getData = (formName) => {
    /* 
        Creamos una promesa con el fin de poder controlar cualquier 
        error que se pueda generar durante el procesamiento
        de los datos ingresados en el formulario.

        Recibimos por parametro el nombre del ID del formulario.
    */
    return new Promise(function (resolve, reject) {
        // en la siguiente va el parametro de ID del formulario.
        const form = document.querySelector(formName)
        /* 
            En la siguiente tenemos la inicialización de 
            la captura de los datos del formulario.
        */
        const formData = new FormData(form)
        /* 
            En la siguiente creacion el objecto para 
            guardar los datos extraidos del formulario.
        */
        let object = {}
        /* 
            en la siguiente tenemos el procesamiento de guardar 
            los datos en el objecto creado.
        */
        formData.forEach(function(value, key) {
            object[key] = value
        })
        // en la siguiente linea se establece que la promesa ha sido resuelta.
        resolve(object)
    })
}