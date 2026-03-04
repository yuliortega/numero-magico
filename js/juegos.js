// Generar número aleatorio

let numeroMagico = Math.floor(Math.random() * 100) + 1

let intentos = 0
const maxIntentos = 10

// Elementos HTML

const input = document.getElementById("numeroUsuario")
const boton = document.getElementById("btnIntentar")
const mensaje = document.getElementById("mensaje")
const historial = document.getElementById("historial")
const contador = document.getElementById("contador")
const progreso = document.getElementById("progreso")
const reiniciar = document.getElementById("reiniciar")

// Evento botón intentar

boton.addEventListener("click", intentarNumero)

function intentarNumero(){

const valor = Number(input.value)

if(valor < 1 || valor > 100){

mensaje.textContent = "Ingrese un número entre 1 y 100"

return

}

intentos++

contador.textContent = intentos

// actualizar barra progreso

progreso.style.width = (intentos/maxIntentos)*100 + "%"

// guardar historial

let item = document.createElement("li")

item.textContent = valor

historial.appendChild(item)

// validación

if(valor === numeroMagico){

mensaje.textContent = "🎉 ¡Correcto! Adivinaste el número"

terminarJuego()

}

else if(intentos === maxIntentos){

mensaje.textContent = "❌ Se acabaron los intentos. El número era " + numeroMagico

terminarJuego()

}

else{

if(valor < numeroMagico){

mensaje.textContent = "El número mágico es MAYOR"

}

else{

mensaje.textContent = "El número mágico es MENOR"

}

}

input.value = ""

input.focus()

}

// terminar juego

function terminarJuego(){

input.disabled = true

boton.disabled = true

reiniciar.style.display = "block"

}

// reiniciar

reiniciar.addEventListener("click", reiniciarJuego)

function reiniciarJuego(){

numeroMagico = Math.floor(Math.random() * 100) + 1

intentos = 0

contador.textContent = 0

mensaje.textContent = ""

historial.innerHTML = ""

progreso.style.width = "0%"

input.disabled = false

boton.disabled = false

reiniciar.style.display = "none"

input.focus()

}