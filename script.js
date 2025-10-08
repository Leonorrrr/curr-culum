function canviNom(){
    let nom = prompt("¿CÓMO QUIERES LLAMARTE?")
document.getElementById("nom").innerHTML = "NOM: "+nom;
}

function canviFoto(){
    let foto = prompt("¿Qué quieres ser?");
    document.getElementById("foto").src = foto 
}

function harryPotter(){
document.getElementById("foto").style = "display:none"

}

function canviaFons(){
   let body = document.getElementsByTagName("body")[0]
   let foto = prompt("¿DÓNDE QUIERES VIAJAR?")
   body.style = "background-image: url('"+foto+"'); background-size: cover;" ; 
}

function tradueix(){
    let body = document.getElementsByTagName("body")[0]
    body.style = "font-family: 'Times New Roman', Times, serif;"
}

function afegirInfo(){
    let llista = document.getElementById("academy");
    let element = document.createElement("li");
    element.innerHTML = prompt("¿QUÉ QUIERES AÑADIR?")
    llista.appendChild(element)
}

function ferGran(){
    document.getElementById("foto").style = "width: 100%"
}

function colorLletra(){
let body = document.getElementsByTagName("body")[0]
body.style = " color: rebeccapurple;"
}

function Moviment(){
    getElementsByTagName("body")[0].classList.add("logo");

}