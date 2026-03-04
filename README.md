# 🎯 Juego del Número Mágico

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de un juego web interactivo creado mediante la integración de **HTML, CSS y JavaScript**.  
El objetivo del juego es que el usuario adivine un número aleatorio entre **1 y 100** en un máximo de **10 intentos**.

El sistema proporciona retroalimentación después de cada intento, indicando si el número ingresado es **mayor o menor** que el número correcto. Además, muestra un historial de los números que el jugador ha intentado previamente.

El juego está diseñado con una interfaz sencilla, amigable para el usuario y adaptable a diferentes dispositivos.

---

## Objetivo del Juego

Permitir al usuario adivinar un número generado aleatoriamente entre 1 y 100 en un máximo de 10 intentos, proporcionando pistas que orienten al jugador hasta encontrar el número correcto.

---

## Tecnologías Utilizadas

El proyecto fue desarrollado utilizando tecnologías básicas del desarrollo web:

- **HTML5** → estructura de la página.
- **CSS3** → diseño visual y estilos de la interfaz.
- **JavaScript** → lógica del juego e interactividad.

---

## Funcionamiento del Juego

1. Al iniciar el juego se genera un número aleatorio entre **1 y 100**.
2. El jugador ingresa un número en el campo de entrada.
3. El sistema compara el número ingresado con el número secreto.
4. Si el número es incorrecto:
   - El sistema indica si el número correcto es **mayor o menor**.
   - Se registra el número en el historial de intentos.
5. El jugador tiene un máximo de **10 intentos**.
6. Si el jugador adivina el número:
   - Se muestra un mensaje de felicitación.
   - El juego finaliza.
7. Si el jugador agota los intentos:
   - El juego informa el número correcto.
8. El usuario puede reiniciar el juego mediante el botón **"Jugar de nuevo"**.

---

## Estructura del Proyecto
numero-magico
|
|--index.html
|
|--css/
|  |__estilo.css
|
|--js/
|  |__juegos.js
|
|--README.md

---

## Características del Proyecto

- Generación aleatoria de números.
- Control de intentos del jugador.
- Registro de historial de números intentados.
- Retroalimentación al usuario después de cada intento.
- Interfaz simple e intuitiva.
- Diseño responsive compatible con dispositivos móviles.
- Opción de reinicio del juego.

---

## Cómo Ejecutar el Proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo **index.html** en cualquier navegador web.

También puede ejecutarse desde un servidor local o ser desplegado en servicios de hosting.

---

## Versión en Línea

El juego puede desplegarse utilizando servicios gratuitos como:

- GitHub Pages
- Netlify
- Vercel

---

## Autor

Proyecto desarrollado como ejercicio académico para la práctica de desarrollo web utilizando **HTML, CSS y JavaScript**.
