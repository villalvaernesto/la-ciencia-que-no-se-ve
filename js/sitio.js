"use strict";

/* Pequeñas mejoras con JavaScript. Sin JavaScript el sitio sigue siendo legible:
   la lista de fuentes se ve completa y las respuestas del cuestionario están en texto. */

/* 1. Filtro de fuentes por tipo (página Fuentes) */
const radiosTipo = document.querySelectorAll('input[name="tipo"]');
if (radiosTipo.length > 0) {
  const fuentes = document.querySelectorAll(".fuente");
  const estadoFiltro = document.getElementById("estado-filtro");

  const filtrar = () => {
    const elegido = document.querySelector('input[name="tipo"]:checked').value;
    let visibles = 0;
    fuentes.forEach(fuente => {
      const mostrar = elegido === "todas" || fuente.dataset.tipo === elegido;
      fuente.hidden = !mostrar;
      if (mostrar) { visibles++; }
    });
    estadoFiltro.textContent = "Se muestran " + visibles + " fuentes.";
  };

  radiosTipo.forEach(radio => radio.addEventListener("change", filtrar));
}

/* 2. Cuestionario de autoevaluación (página Reflexión y ética) */
const cuestionario = document.getElementById("quiz");
if (cuestionario) {
  cuestionario.addEventListener("submit", evento => {
    evento.preventDefault();
    const preguntas = cuestionario.querySelectorAll("fieldset");
    let aciertos = 0;
    preguntas.forEach(pregunta => {
      const marcada = pregunta.querySelector("input:checked");
      if (marcada && marcada.dataset.correcta === "si") { aciertos++; }
    });
    document.getElementById("resultado-quiz").textContent =
      "Acertaste " + aciertos + " de " + preguntas.length + ". Revisá las respuestas explicadas más abajo.";
  });
}

/* 3. Formulario de comentarios: no hay servidor, así que no se envía ni se guarda nada */
const comentario = document.getElementById("comentario");
if (comentario) {
  comentario.addEventListener("submit", evento => {
    evento.preventDefault();
    comentario.reset();
    document.getElementById("estado-comentario").textContent =
      "Gracias por tu mensaje. Aclaración: este sitio no tiene servidor, por eso el comentario no se envió ni se guardó.";
  });
}
