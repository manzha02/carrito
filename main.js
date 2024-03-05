let nombre = prompt ("Ingrese su nombre aquí!")

//voy a ingresar algunos elementos/productos para que el usuario seleccione

let esmalte = 10000;
let limas = 1500;
let cortauñas = 4000;
let cabinas = 55000;

alert ("Bienvenido/a " + nombre );

let pedir = prompt ("¿Ya sabe que es lo que necesita? Ingrese SI o NO ");

if ((pedir === "no") || (pedir === "No")|| (pedir === "NO") || (pedir === "nO")){
    alert ("Mire nuestras redes para mayor info...");
} else {
    let orden = prompt ("Ingrese su pedido: esmalte / limas / cortauñas / cabinas");

   switch (orden){
    case "esmalte": 
    alert ("Gracias por su pedido. Su total es de: $ " + esmalte);

    break;



    case "limas": 
    alert ("Gracias por su pedido. Su total es de: $ " + limas);

    break;



    case "cortauñas": 
    alert ("Gracias por su pedido. Su total es de: $ " + cortauñas);
    break;



    case "cabinas": 
    alert ("Gracias por su pedido. Su total es de: $ " + cabinas);
    break;

}
}

function agradecer (){
    alert ( nombre + ", ya hemos procesado su pedido. Se encuentra en prepración. Pronto será contactado.");
}

agradecer ()
