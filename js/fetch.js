/*
En la siguiente funcion es para 
poder enviar la informacion del formulario.
*/
function fetchApi(url, data) {
    /* 
        Creamos una promesa con el fin de poder controlar cualquier 
        error que se pueda generar durante el envio
        de los datos ingresados en el formulario.

        Recibimos por parametro la URL y los datos a enviar.
    */
    return new Promise(function (resolve, reject) {
        /* 
            En la siguiente linea validamos si es compatible 
            El navegador con la siguiente funcion.
        */
        if (self.fetch) {
            /* 
                En la siguiente linea establecemos los parametros de la peticion.
            */
            var params = {
                method: 'POST',
                cache: 'default',
                mode:'cors'
            }
            /* 
                En la siguiente linea asignados los datos como 
                parametro para el envio a la peticion.
            */
            params.body = data
            // En la siguiente linea es la creacion la peticion.
            var request = new Request(url, params);
            // En la siguiente linea es la ejecucion la peticion.
            fetch(request).then(res => res.json()).then(data => {
                /* 
                    En la siguiente linea se establece que 
                    la promesa ha sido resuelta.
                 */
                resolve(data)
            }).catch(error => {
                /* 
                    En la siguiente linea capturamos cualquier 
                    error que pueda ocurrir en el envio de la peticion.
                */
                reject(Error('Request failed', error))
            })
        }
    })
}