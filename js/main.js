

const viajes = [
    {
        id: 1,
        nombre: "Hielo Azul",
        precio: 50000,
        img: "https://www.welcomeargentina.com/paseos/hieloazul/refugio-hielo-azul-el-bolson-2.jpg",


    },
    {
        id: 2,
        nombre: "Cajon Del Azul",
        precio: 45000,
        img: "https://www.rionegro.com.ar/wp-content/uploads/2023/01/El-Bolson-Cajon-del-Azul-Federico-Magri-11-2.jpg"
    },
    {
        id: 3,
        nombre: "El Retamal",
        precio: 32000,
        img: "https://elbolsonguia.com.ar/wp-content/uploads/2023/07/Refugio-El-Retamal-1_11zon-1-scaled.jpeg"
    },
    {
        id: 4,
        nombre: "Los Laguitos",
        precio: 50000,
        img: "https://www.rionegro.com.ar/wp-content/uploads/2021/11/bolson-refugio-la-playita.jpg"
    },
];

let tour;

if (localStorage.getItem("tour")) {
    tour = JSON.parse(localStorage.getItem("tour"));
} else {
    tour = [];
};


const container = document.getElementById("container");



function agregarAlCarrito(refugio) {



    if (tour.some(el => el.id === refugio.id)) {
        const indexRefugio = tour.findIndex(el => el.id === refugio.id);
        tour[indexRefugio].visitas += 1;
    } else {
        const nuevoRefugio = {
            id: refugio.id,
            nombre: refugio.nombre,
            precio: refugio.precio,
            visitas: 1,
        };
        tour.push(nuevoRefugio);
    };

    console.log("Añadiste un destino a tu viaje", tour);
    localStorage.setItem("tour", JSON.stringify(tour));
};

function crearCard(refugio) {
    const card = document.createElement("div");
    card.className = "card";

    const titulo = document.createElement("h3");
    titulo.innerText = refugio.nombre;

    const imagen = document.createElement("img");
    imagen.src = refugio.img
    imagen.className = "img";

    const precio = document.createElement("p");
    precio.innerText = `$${refugio.precio}`;

    const boton = document.createElement("button");
    boton.innerText = "Agregar este refugio al Tour";
    boton.onclick = () => agregarAlCarrito(refugio);

    card.append(titulo);
    card.append(imagen);
    card.append(precio);
    card.append(boton);
    container.append(card);
}

const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const nacimiento = document.getElementById("nacimiento");
const email = document.getElementById("email");

let Formulario = document.getElementById("formulario");
Formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const objeto = {
        nombre: nombre.value,
        dni: dni.value,
        nacimiento: nacimiento.value,
        email: email.value
    }
    console.log("Enviado", objeto);
    alert("Listo, recibiras nuestras ofertas en exclusiva")

});

const boton = document.createElement("button");
boton.innerText = "Agregar a mi Tour"

viajes.forEach(el => crearCard(el));

const mostrar = document.createElement("button");
mostrar.innerText = "Ver mi tour";


mostrar.addEventListener("click", () => {
    console.log("Este es el tour a realizar", tour);
});

const limpiar = document.createElement("button");
limpiar.innerText = "Volver a organizar mi tour";

limpiar.addEventListener("click", () => {
    tour = [];
    localStorage.setItem("tour", JSON.stringify(tour));
});

carrito.append(mostrar)
carrito.append(limpiar)