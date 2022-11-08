"use strict";

const horah1 = document.querySelector("body h1");

setInterval(() => {
  const fechaActual = new Date();

  const hour = fechaActual.getHours();
  const minutes = fechaActual.getMinutes();
  const seconds = fechaActual.getSeconds();

  horah1.textContent = `${hour}:${minutes}:${seconds}`;
}, 1000);
