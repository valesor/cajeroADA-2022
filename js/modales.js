// MODALES //

// crear constantes para modal //
const modalAgregarVenta = document.querySelector(".boton-nv");
const ocultarBtn = document.querySelector(".ocultar");
const btnCancelar = document.querySelectorAll(".boton-cancelar");
const modalOcultar = document.querySelector(".modal-ocultar");
const modalEliminarVentas = document.querySelector(".modal-eliminar");
const btnCancelar1 = document.querySelector(".boton-cancelar-1");

//-------------------------------- AGREGAR VENTA------------------------------------//
//Abrir modal//
modalAgregarVenta.addEventListener("click", () => {
  ocultarBtn.style.display = "block";
});

//------------------------------- EDITAR VENTA------------------------------------//
//Abrir modal//
const botonEditarVentas = document.querySelectorAll(".icono-editado");
for (let i = 0; i < botonEditarVentas.length; i++) {
  botonEditarVentas[i].addEventListener("click", () => {
    modalOcultar.style.display = "block";
  });
}

// ---------------------------ELIMINAR VENTA----------------------------------------//
//Abrir modal

const EliminarVentas = document.querySelectorAll(".icono-eliminado");
for (let t = 0; t < EliminarVentas.length; t++) {
  EliminarVentas[t].addEventListener("click", () => {
    modalEliminarVentas.style.display = "block";
  });
}

//Cerrar modal//

for (i = 0; i < btnCancelar.length; i++) {
  btnCancelar[i].addEventListener("click", () => [
    (ocultarBtn.style.display = "none"),
    (modalOcultar.style.display = "none"),
    (modalEliminarVentas.style.display = "none"),
  ]);
}
