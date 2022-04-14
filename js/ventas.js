/* ------------------------------------------------------------------
                                DATOS
 ------------------------------------------------------------------*/
const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    {
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 24),
      nombreVendedora: "Sheryl",
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Ada",
      componentes: ["Motherboard MZI", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 11),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 15),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 21),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 8),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 16),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 27),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 22),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 5),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 7),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 14),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Centro",
    },
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 },
  ],
};
/* ------------------------------------------------------------------
                            FUNCION AUXILIAR 
 ------------------------------------------------------------------*/
//Funcion de fecha auxiliar
const fechaFiltro = (mesx, aniox) => {
  return local.ventas.filter(
    (elemento) =>
      elemento.fecha.getMonth() + 1 === mesx &&
      elemento.fecha.getFullYear() === aniox
  );
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
    //console.log(precio.componente);
    if (componentes.includes(precio.componente)) {
      //  console.log(precio);
      acumulador += precio.precio;
    }
  }
  return acumulador;
};

/* console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)
console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)

console.log(local.precios[4].componente.includes('Motherboard')) */

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
//console.log(cantidadVentasComponente('Monitor ASC 543'));

/*3) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la
vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas.
El importe de una venta es el que indica la función precioMaquina. 
El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre). 
calcular la suma de las ventas de todas las vendedoras 
*/
//1 crear la funcion
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
    // console.log(cantidadVentas);
    if (cantidadVentas > mayor) {
      comp = componentx.componente;
      //console.log(comp);
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
  //console.log(filtrarSucursal);
  for (const venta of filtrarSucursal) {
    //console.log(venta)
    suma += precioMaquina(venta.componentes);
  }
  return suma;
};
//console.log(ventasSucursal("Centro")); // 990

/* Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad 
pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y 
evitemos repetir?*/

/*Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el 
nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
El importe de una venta es el que indica la función precioMaquina.
El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).*/

const sucursalDelMes = (mes, anio) => {
  let { ventas, sucursales } = local; //desestructuring
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

/* ------------------------------------------------------------------
                            XXXXXXXXXXXXXXXXX
 ------------------------------------------------------------------*/

// FORMATO DE FECHA//
const format = (date, locale, options) =>
  new Intl.DateTimeFormat(locale, options).format(date);

// -------------------AGREGAR COMOPONENTES A NUEVA VENTA Y EDITAR VENTA-----------//

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

//Agregar componentes//

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

//Agregar sucursal//

const agregarSucursal = (clase3) => {
  let { sucursales, ventas } = local;
  const select = document.querySelector(clase3);
  for (let sucursal of sucursales) {
    let option = document.createElement("option");
    option.innerHTML = sucursal;
    select.appendChild(option);
  }
};
agregarSucursal(".sucursalesSelect"); //nueva venta
agregarSucursal(".sucursalesSelect1"); //Editar venta

// --------------------------------------AGREGAR DATOS DEL ARRAY A LA TABLA ----------------------//

const agregarTablaVentas = () => {
  let tablaDeVentas = document.querySelector(".tabla-nv");
  const { ventas } = local;
  ventas.forEach((ventas) => {
    const filaNuevaventas = document.createElement(`tr`);
    let datosTabla = `
   <td>${format(ventas.fecha, "es")} </td>
   <td >${ventas.nombreVendedora} </td>
   <td>${ventas.sucursal} </td>
   <td>${ventas.componentes} </td>
   <td>${precioMaquina(ventas.componentes)} </td>
   <td> <button class="icono-editado" ><i class="fas fa-pencil-alt"  "id = "btnEditar-${ventas}"></i></button> </td>
   <td><button class="icono-eliminado"  ><i class="fas fa-trash-alt" "id = "btnEliminar-${ventas}"></i></button></td> `;

    filaNuevaventas.innerHTML = datosTabla;
    tablaDeVentas.appendChild(filaNuevaventas);
  });
};

agregarTablaVentas();

// --------------------------------------AGREGAR NUEVA VENTA TABLA----------------------//

const nuevaVenta = () => {
  let tablaDeVentas = document.querySelector(".tabla-nv");
  let vendedoraSeleccionada = document.querySelector(".vendedorasSelect");
  let componentesSeleccionados = document.querySelector("#componentesSel");
  let sucursalSeleccionada = document.querySelector(".sucursalesSelect");
  let fechaSeleccionada = document.querySelector(".fechaSelect");
  const filaNuevaventas2 = document.createElement(`tr`);
  filaNuevaventas2.classList.add("table-line");
  let arrayComponentes = componentesSeleccionados.options;
  let selected = [];
  for (const option of arrayComponentes) {
    if (option.selected) {
      selected.push(option.value);
    }
  }

  let datosTabla2 = `
   <td>${format(new Date(fechaSeleccionada), "es")} </td>
   <td>${vendedoraSeleccionada.value} </td>
   <td>${sucursalSeleccionada.value} </td>
   <td>${selected} </td>
   <td>${precioMaquina(selected)} </td>
   <td> <button class="icono-editado"><i class="fas fa-pencil-alt"  "id = "btnEditar-"></i></button> </td>
   <td ><button class="icono-eliminado"><i class="fas fa-trash-alt" "id = "btnEliminar-"></i></button></td> `;

  filaNuevaventas2.innerHTML = datosTabla2;
  tablaDeVentas.appendChild(filaNuevaventas2);
};

let boton = document.querySelector("#botonprueba");
boton.addEventListener("click", function (e) {
  e.preventDefault();
  nuevaVenta();
  ocultarBtn.style.display = "none";
});

//---------------------------------------  ELIMINAR VENTA -------------------------------------------/ ??FALTAAA
//SELECCIONA LA FILA PERO NO ELIMINA (VER POR QUE!)

const btnEliminar = document.querySelectorAll(".icono-eliminado");
for (const botonEliminado of btnEliminar) {
  botonEliminado.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.remove();
  });
}

//-------------------------------AGREGAR VENTAS A SUCURSAL---------------------/

//CENTRO
let ventasCentro = document.querySelector("#centro");
const totalCentro = document.createElement(`td`);
let valorAdentroCentro = `<b>$${ventasSucursal("Centro")}</b> `;

totalCentro.innerHTML = valorAdentroCentro;
ventasCentro.appendChild(totalCentro);

//CABALLITO

let ventasCaballito = document.querySelector("#caballito");
const totalCaballito = document.createElement(`td`);
let valorAdentroCaballito = `<b>$${ventasSucursal("Caballito")} </b>`;

totalCaballito.innerHTML = valorAdentroCaballito;
ventasCaballito.appendChild(totalCaballito);

/* ------------------------------------------------------------------
                            AGREGAR REPORTES
 ------------------------------------------------------------------*/

//PRODUCTO ESTRELLA

let productoEstrella = document.querySelector("#resultado_estrella");
productoEstrella.innerHTML = `<b>${componenteMasVendido()}</b>`;

//VENDEDORA QUE MAS GENERO

let vendedoraMasGenero = document.querySelector("#resultado_vendedora");
vendedoraMasGenero.innerHTML = `<b>${vendedoraDelMes(0, 0)}</b>`;

/* 1) falta editar venta 
   2) falta eliminar la fila ya esta seleccionada 
   3) falta modificar fecha (no idea de como hacerlo)
   4)falta hacer que los datos de la parte superior( producto estrella y eso se actualice al agrega nueva venta)
     crear array vacio y guardar los datos ahi para poder actualizarlo
  5) Responsive 
*/
