/* ------------------------------------------------------------------
                            FUNCIONES  AUXILIARES
 ------------------------------------------------------------------*/

//Funcion de fecha auxiliar
const fechaFiltro = (mesx, aniox) => {
  return local.ventas.filter(
    (elemento) =>
      elemento.fecha.getMonth() + 1 === mesx &&
      elemento.fecha.getFullYear() === aniox
  );
};

//fecha cambio MODIFICA(1889 error)
const inpFecha = document.querySelector("#inputFecha"); //llamo input agregar venta
const inpFecha2 = document.querySelector("#inputFecha2"); //llamo input a editar venta

inpFecha.addEventListener("change", function (e) {
  e.target.value;
});

//AGREGA UN DIA MAS A LA FECHA
const sumafECHA = (fecha, dias) => {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
};

/* ------------------------------------------------------------------
                              FUNCIONES 
   ------------------------------------------------------------------*/

//1) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se
//puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
const precioMaquina = (componentes) => {
  const { precios } = local;
  let acumulador = 0;
  for (const precio of precios) {
    if (componentes.includes(precio.componente)) {
      acumulador += precio.precio;
    }
  }
  return acumulador;
};

/* 2) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad
  de veces que fue vendido,o sea que formó parte de una máquina que se vendió.
  La lista de ventas no se pasa por parámetro,
  se asume que está identificada por la variable ventas
   */

const cantidadVentasComponente = (componente) => {
  let { ventas } = local;
  //console.log(ventas);
  return ventas.filter((elemento) => elemento.componentes.includes(componente))
    .length;
};

/*3) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la
  vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas.
  El importe de una venta es el que indica la función precioMaquina. 
  El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre). 
  calcular la suma de las ventas de todas las vendedoras 
  */
const vendedoraDelMes = (mes, anio) => {
  let { ventas, vendedoras } = local; //desestructuring
  let ventasFiltrado = [];
  if (mes == 0 && anio == 0) {
    // Para no crear otra funcion, hago que si el mes y el anio es 0, tome como las ventas globales sin filtrado
    ventasFiltrado = ventas;
  } else {
    ventasFiltrado = fechaFiltro(mes, anio);
  }
  let vendedorasObj = {}; //crear objeto para guardar vendedoras y valor de venta
  let ventasMax = 0; // tiene las ventas maximas
  let vendedoraMax = 0; //quien vendio la venta maxima
  for (const vendedora of vendedoras) {
    //recorrer array vendedoras
    let contador = 0; //inicializo el contador
    for (const venta of ventasFiltrado) {
      //recorrer array ventas con los meses ya filtrados
      if (vendedora === venta.nombreVendedora) {
        //comparo si coincide el nombre de la vendedora del array de vendedoras creado con la del arrayFiltrado
        contador += precioMaquina(venta.componentes); // utilizo la funcion precioMaquina para guardar en el contador el monto de la venta
      }
    }
    vendedorasObj[vendedora] = contador;
    if (contador > ventasMax) {
      ventasMax = contador;
      vendedoraMax = vendedora;
    }
  }
  //return `${vendedoraMax} vendio por un total de $${ventasMax}`;
  return vendedoraMax;
};

//console.log(vendedoraDelMes(0, 0)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

/* 4)ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre). */

const ventasMes = (mes, anio) => {
  let { ventas } = local;
  let ventasFiltrado = fechaFiltro(mes, anio);
  let contador = 0;
  for (venta of ventasFiltrado) {
    contador += precioMaquina(venta.componentes);
  }
  return contador;
};
// console.log(ventasMes(1, 2019)); // 1250

/* 5) ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha. */
const ventasVendedora = (nombre) => {
  let { ventas } = local;
  let arrayvendedora = ventas.filter(
    (elemento) => elemento.nombreVendedora === nombre
  );
  let contador = 0;
  for (venta of arrayvendedora) {
    contador += precioMaquina(venta.componentes);
  }
  return contador;
};
// console.log(ventasVendedora('Grace')); // 900

/* 6) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente.
  El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente */
const componenteMasVendido = () => {
  let { precios } = local;
  let mayor = 0;
  let comp = "";
  for (componentx of precios) {
    let cantidadVentas = cantidadVentasComponente(componentx.componente);
    if (cantidadVentas > mayor) {
      comp = componentx.componente;
      mayor = cantidadVentas;
    }
  }
  return comp;
};
//console.log(componenteMasVendido()); // Monitor GPRS 3000

/*7)huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.
  El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre). */
const huboVentas = (mes, anio) => {
  let { ventas } = local;
  const arrayFecha = fechaFiltro(mes, anio);
  return arrayFecha.length > 0;
};
// console.log(huboVentas(1,2019))

/* --------------------------------------Parte 2--------------------------------------------
  
  1)Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin
  límite de fecha. */
const ventasSucursal = (sucursal) => {
  let { ventas } = local;
  let suma = 0;
  const filtrarSucursal = ventas.filter(
    (sucursalx) => sucursalx.sucursal === sucursal
  );
  for (const venta of filtrarSucursal) {
    suma += precioMaquina(venta.componentes);
  }
  return suma;
};
//console.log(ventasSucursal("Centro")); // 990

/*Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el 
  nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
  El importe de una venta es el que indica la función precioMaquina.
  El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).*/

const sucursalDelMes = (mes, anio) => {
  let { sucursales } = local; //desestructuring
  let ventasFiltrado = fechaFiltro(mes, anio);

  let ventasMax = 0;
  let sucursalMax = 0;
  for (const sucursal of sucursales) {
    let contador = 0;
    for (const venta of ventasFiltrado) {
      if (sucursal === venta.sucursal) {
        contador += precioMaquina(venta.componentes);
      }
    }

    if (contador > ventasMax) {
      ventasMax = contador;
      sucursalMax = sucursal;
    }
  }
  return sucursalMax;
};

//console.log(sucursalDelMes(2,2019)); // "Centro"

/*---------------------------------------Parte 3--------------------------------------
  
  renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año*/

const renderPorMes = (anio) => {
  let { ventas } = local;
  let meses = [];
  for (let venta of ventas) {
    if (!meses.includes(venta.fecha.getMonth() + 1)) {
      meses.push(venta.fecha.getMonth() + 1);
    }
  }

  meses.sort(function (x, y) {
    if ((x, y)) return 1;
    else return -1;
  });
  let acc = "";
  for (const mes of meses) {
    acc += `<li>${mes}/ ${anio} :${ventasMes(mes, anio)}</li>`;
  }
  return acc;
};

//console.log(renderPorMes(2019));

/*renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal*/

const renderPorSucursal = () => {
  const { sucursales } = local;
  let acc = "";
  for (let sucursal of sucursales) {
    acc += `<li> ${sucursal}:${ventasSucursal(sucursal)}</li>`;
  }
  return acc;
};

//console.log(renderPorSucursal());

/*render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la 
  vendedora que más ingresos generó Reporte Ventas por mes: 
  Total de enero 2019: 1250 Total de febrero 2019: 4210 Ventas por sucursal: Total de Centro: 4195 
  Total de Caballito: 1265 Producto estrella: Monitor GPRS 3000 Vendedora que más ingresos generó: Grace 
  */

const render = () => {
  return `${renderPorMes(
    2019
  )}  ${renderPorSucursal()} <li>Producto estrella: ${componenteMasVendido()}</li> ${vendedoraDelMes(
    0,
    0
  )}`;
};

//console.log(render());

/* ----------------------------------------------------------------------------------------------------------------------
                                       AGREGAR, EDITAR, ELIMINAR VENTAS
   ----------------------------------------------------------------------------------------------------------------------*/

//-------------------------------------Agregar vendedoras-------------------------------//

const agregarVendedoras = (clase) => {
  const { vendedoras } = local;
  const select = document.querySelector(clase);
  for (const vendedora of vendedoras) {
    let option = document.createElement("option");
    option.innerHTML = vendedora;
    select.appendChild(option);
  }
};
agregarVendedoras(".vendedorasSelect"); //nueva venta
agregarVendedoras(".vendedorasSelect1"); //editar venta

//-------------------------------------Agregar componentes//

const agregarComponentes = (clase2) => {
  let { precios } = local;
  ("");
  for (const precio of precios) {
    const select = document.querySelector(clase2);
    let option = document.createElement("option");
    option.innerHTML = precio.componente;
    select.appendChild(option);
  }
};
agregarComponentes(".componentesSelect"); //nueva venta
agregarComponentes(".componentesSelect1"); //Editar venta

//-------------------------------------Agregar sucursal//

const agregarSucursal = (clase3) => {
  let { sucursales } = local;
  const select = document.querySelector(clase3);
  for (let sucursal of sucursales) {
    let option = document.createElement("option");
    option.innerHTML = sucursal;
    select.appendChild(option);
  }
};
agregarSucursal(".sucursalesSelect"); //nueva venta
agregarSucursal(".sucursalesSelect1"); //Editar venta

/* -------------------------------------------------------------------------------------------------------
                                         AGREGAR DATOS DEL ARRAY A LA TABLA
   -------------------------------------------------------------------------------------------------------*/
const tablaDeVentas = document.querySelector("#tablaCargarDatos");
const agregarTablaVentas = () => {
  let format = (date, locale, options) =>
    new Intl.DateTimeFormat(locale, options).format(date);
  const { ventas } = local;
  ventas.forEach((venta, index) => {
    const filaNuevaventas = document.createElement(`tr`);
    filaNuevaventas.innerHTML = `
     <td class="tdTabla">${format(venta.fecha)} </td>  
     <td class="tdTabla">${venta.nombreVendedora} </td>
     <td class="tdTabla">${venta.sucursal} </td>
     <td class="tdTabla">${venta.componentes} </td>
     <td class="tdTabla">${precioMaquina(venta.componentes)} </td>
     <td class="tdTabla"> <button class="icono-editado" id=${index}><i class="fas fa-pencil-alt"></i></button></td>
     <td class="tdTabla"> <button class="icono-eliminado" id=${index}><i class="fas fa-trash-alt"></i></button></td>`;

    tablaDeVentas.appendChild(filaNuevaventas);
  });
};

agregarTablaVentas();

/* ----------------------------------------------------------------------------------------
                                              AGREGAR NUEVA VENTA
   ------------------------------------------------------------------------------------------ */

const nuevaVenta = () => {
  let { ventas } = local;
  let tablaDeVentas = document.querySelector("#tablaCargarDatos");
  let vendedoraSeleccionada = document.querySelector(".vendedorasSelect");
  let componentesSeleccionados = document.querySelector("#componentesSel");
  let sucursalSeleccionada = document.querySelector(".sucursalesSelect");
  const filaNuevaventas2 = document.createElement(`tr`);

  filaNuevaventas2.classList.add("table-line");
  let arrayComponentes = componentesSeleccionados.options;
  let selected = []; //SELECCIONA MAS DE UNA OPCION
  for (const option of arrayComponentes) {
    if (option.selected) {
      selected.push(option.value);
    }
  }

  let objNuevo = {
    // GUARDA VALORES EN EL OBJETO
    fecha: sumafECHA(new Date(inpFecha.value), 1),
    nombreVendedora: vendedoraSeleccionada.value,
    componentes: selected,
    sucursal: sucursalSeleccionada.value,
  };
  ventas.unshift(objNuevo); // UNSHIFT PARA QUE ME APAREZCA ARRIBA LA VENTA
  actualizar();
};

let boton = document.querySelector("#botonprueba");
boton.addEventListener("click", function (e) {
  e.preventDefault();
  nuevaVenta();
  ocultarBtn.style.display = "none";
});

/* ----------------------------------------------------------------------------------------------------------------
                                                    ACTUALIZA TABLA
   ----------------------------------------------------------------------------------------------------------------*/

const actualizar = () => {
  tablaDeVentas.innerHTML = "";
  agregarTablaVentas(); //tabla base
  eliminarVenta(); //elimina la venta
  editarVenta(); //edita la fecha
  modalElimin(); //cierra modal elimina
  modalEdit(); //cierra modal editar
  actualizarCentro(); //actualiza ventas centro
  actualizarCaballito(); //actualiza ventas caballito
  actualizarProductoEstrella(); //actualiza producto estrella
  actualizarVededoraMasGenero(); // actualiza vendedora que mas genero
};
/* ----------------------------------------------------------------------------------------------------
                                              EDITAR VENTA
   -------------------------------------------------------------------------------------------------------*/

const editar = document.querySelector("#boton-guardarEditarV");
const editarVenta = () => {
  //LE ASIGNA UN ID AL TACHITO
  const btnEditar = document.querySelectorAll(".icono-editado");
  btnEditar.forEach((boton) => {
    boton.addEventListener("click", () => {
      let guardarIdEditar = boton.getAttribute("id");
      editar.setAttribute("aceptarEditar", guardarIdEditar);
    });
  });
};

editarVenta();

const butEditar = document.querySelector("#boton-guardarEditarV");
let objEditarVenta = {}; // GUARDA LOS NUEVOS VALORES
const editarVentaDeVerdad = () => {
  //CAPTURA LOS NUEVOS VALORES Y LOS MUESTRA EN LA TABLA
  const { ventas } = local;

  let tablaDeVentas = document.querySelector("#tablaCargarDatos");
  let vendedoraSeleccionada = document.querySelector(".vendedorasSelect1");
  let componentesSeleccionados = document.querySelector(".componentesSelect1");
  let sucursalSeleccionada = document.querySelector(".sucursalesSelect1");

  let arrayComponentes = componentesSeleccionados.options;
  let selected = [];
  for (const option of arrayComponentes) {
    if (option.selected) {
      selected.push(option.value);
    }
  }

  let objNuevo = {
    //VALORES NUEVOS SELECCIONADOS
    fecha: sumafECHA(new Date(inpFecha2.value), 1),
    nombreVendedora: vendedoraSeleccionada.value,
    componentes: selected,
    sucursal: sucursalSeleccionada.value,
  };

  ventas.forEach((venta, index) => {
    if (index == butEditar.getAttribute("aceptarEditar")) {
      ventas.splice(index, 1, objNuevo); //OBJNUEVO REEMPLAZA A LOS VALORES QUE YA ESTABAN EN LA TABLA
    }
    modalOcultar.style.display = "none";
  });
  actualizar();
};

butEditar.addEventListener("click", function (e) {
  e.preventDefault();
  editarVentaDeVerdad();
  ocultarBtn.style.display = "none";
});

/* -----------------------------------------------------------------------------------------------------
                                               ELIMINAR VENTA
   ----------------------------------------------------------------------------------------------------*/

const eliminar = document.querySelector("#boton-eliminar");
const eliminarVenta = () => {
  //LE ASIGNA UN ID AL TACHITO
  const btnEliminar = document.querySelectorAll(".icono-eliminado");
  btnEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      let guardarId = boton.getAttribute("id");
      eliminar.setAttribute("aceptarEliminar", guardarId);
    });
  });
};

eliminarVenta();

const eliminarVentaDeVerdad = () => {
  //ELIMINA DATOS
  const { ventas } = local;
  modalEliminarVentas.style.display = "none";
  ventas.forEach((venta, index) => {
    if (index == eliminar.getAttribute("aceptarEliminar")) {
      ventas.splice(index, 1);
      actualizar();
    }
  });
};
eliminar.addEventListener("click", eliminarVentaDeVerdad);
/* -----------------------------------------------------------------------------------------------------
                                       ACTUALIZA LOS DATOS DE LA PARTE DE ARRIBA 
   -----------------------------------------------------------------------------------------------------*/

//CENTRO
const botonCentro = document.querySelector("#centroTotal");

const actualizarCentro = () => {
  botonCentro.innerHTML = `<b>$${ventasSucursal("Centro")}</b> `;
};
actualizarCentro();

//CABALLITO

const botonCaballito = document.querySelector("#caballitoTotal");
const actualizarCaballito = () => {
  botonCaballito.innerHTML = `<b>$${ventasSucursal("Caballito")} </b>`;
};
actualizarCaballito();
/* ------------------------------------------------------------------
                                     AGREGAR REPORTES
   ------------------------------------------------------------------*/

//PRODUCTO ESTRELLA
const actualizarProductoEstrella = () => {
  let productoEstrella = document.querySelector("#resultado_estrella");
  productoEstrella.innerHTML = `<b>${componenteMasVendido()}</b>`;
};
actualizarProductoEstrella();
//VENDEDORA QUE MAS GENERO

const actualizarVededoraMasGenero = () => {
  let vendedoraMasGenero = document.querySelector("#resultado_vendedora");
  vendedoraMasGenero.innerHTML = `<b>${vendedoraDelMes(0, 0)}</b>`;
};
actualizarVededoraMasGenero();
