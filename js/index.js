//evento en el envio del formulario de la consigna 1
document.querySelector(".consigna1 form").addEventListener('submit', (ev)=>{
    ev.preventDefault()//previene el envio del formulario
    let arrayGatitos = ["😺","😸","😹"];//Array de imagenes de gatitos
    let msj =""//Crea una variable para ir concatenando el msj de resolucion}
    let cantidadDeGatos = ev.target.cantidadGatos.value //toma el valor del input
    for(let i=0; i<cantidadDeGatos;i++){ //arma el msj concatenado
            if(i<3) msj = msj + ("Gato #"+(i+1)+": "+ arrayGatitos[i]+"<br>")
            else msj = msj + ("Gato #"+(i+1)+": "+ arrayGatitos[i%3]+"<br>")//a partir del 3 indice aplica la logica de resto de la division
        }
    document.querySelector(".resolucion1 p").innerHTML = msj //Setea el valor del innerHTML del parrafo de resolucion 1
    console.log(msj.replace(/<br>/g,'')) // Se muestra en Consola (pedido en la resolucion del ejercicio)
})
//evento en el envio del formulario de la consigna 2
document.querySelector(".consigna2 form").addEventListener('submit', (ev)=>{
    ev.preventDefault()//previene el envio del formulario
    let cantidadGatos = ev.target.cantidadGatos2.value//toma el valor del input cantidad de gatos
    let cantidadPasos = ev.target.cantidadPasos.value//toma el valor del input cantidad de pasos
    let gatito = "🐈"//imagen gatito
    let paso = ""//imagen paso
    let msj =""//Crea una variable para ir concatenando el msj de resolucion
        for(let i=0; i<cantidadPasos; i++){ //Concatena la cantidad de pasos para la resolucion
            paso = paso + "🐾"
        }
        for(let i=0; i<cantidadGatos;i++){//arma el msj concatenado
            msj = msj + ("Gato #"+ (i+1)+": " + gatito + paso + "<br>")
        }
        document.querySelector(".resolucion2 p").innerHTML = msj//Setea el valor del innerHTML del parrafo de resolucion 2
        console.log(msj.replace(/<br>/g,'')) // Se muestra en Consola (pedido en la resolucion del ejercicio)
})
//evento en el envio del formulario de la consigna 3
document.querySelector(".consigna3 form").addEventListener('submit', (ev)=>{
    ev.preventDefault()//previene el envio del formulario
    let cantidadGatos = ev.target.cantidadGatos3.value//toma el valor del input cantidad de gatos
    let cantidadPasos = ev.target.cantidadPasos3.value//toma el valor del input cantidad de pasos
    let gatitoNegro = "🐈‍⬛"//imagen gatito Negro
    let gatitoRubio = "🐈"//imagen gatito Rubio
    let paso = ""//imagen paso
    let msj =""//Crea una variable para ir concatenando el msj de resolucion
            for(let i=0; i<cantidadPasos; i++){//Concatena la cantidad de pasos para la resolucion
            paso = paso + "🐾"
        }
        for(let i=0; i<cantidadGatos;i++){ //arma el msj concatenado
            if(i%2==0) msj = msj + ("Gato #"+ (i+1)+": " + gatitoRubio + paso+ "<br>")//indice impar gato rubio
            else msj = msj + ("Gato #"+ (i+1)+": " + gatitoNegro + paso+ "<br>")//indice par gato Negro
            }
        document.querySelector(".resolucion3 p").innerHTML = msj//Setea el valor del innerHTML del parrafo de resolucion 3
        console.log(msj.replace(/<br>/g,'')) // Se muestra en Consola (pedido en la resolucion del ejercicio)
})