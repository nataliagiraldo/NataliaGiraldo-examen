let suma = 0;

function agregar(info, endPoint){
    let opciones = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    }

    fetch(endPoint, opciones)
    .then((respuesta)=>{
        if(!respuesta.ok){
            console.log("error")
            

        }
        return respuesta.json()
        
    })
    .then(data => {
        console-log(data);
    })
    .catch((error)=>console.log('Hubo un error'))
}

export{
    agregar
}







