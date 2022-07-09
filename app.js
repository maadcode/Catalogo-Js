const menu = [
    {
        id: 1,
        title: "Librero",
        category: "Armarios",
        price: 299.99,
        img: "./assets/librero.jpg",
        desc: "Librero grande con multiples repisas de color baige.",
        height: 122.2,
        width: 80.1,
        stature: "Grande"
    },
    {
        id: 2,
        title: "Juego de comedor cuadrado",
        category: "Mesas",
        price: 3999.99,
        img: "./assets/juego-de-comedor.jpg",
        desc: "Juego de comedor cuadrado con 8 sillas de color baige.",
        height: 88,
        width: 165,
        stature: "Grande"
    },
    {
        id: 3,
        title: "Mesa de noche Domenico",
        category: "Armarios",
        price: 799.99,
        img: "./assets/mesa-de-noche.jpg",
        desc: "Mesa de noche Domenico, material de madera con 3 cajones.",
        height: 65,
        width: 49,
        stature: "Pequeño"
    },
    {
        id: 4,
        title: "Velador Multifuncional con dos cajones",
        category: "Armarios",
        price: 200.99,
        img: "./assets/velador-multifuncional.jpg",
        desc: "Velador Multifunción Bulma Medium con dos cajones y repisas flotantes para mayor facilidad de organización en tus objetos personales.",
        height: 75,
        width: 34,
        stature: "Pequeño"
    },
    {
        id: 5,
        title: "Juego de Comedor Circular 4 Sillas Silvani",
        category: "Mesas",
        price: 900.00,
        img: "./assets/juego-de-comedor-2.jpg",
        desc: "Tapiz: Terciopelo, Microfibra -Estructura: Madera Maciza",
        height: 70,
        width: 50,
        stature: "Pequeño"
    },
    {
        id: 6,
        title: "Juego de Comedor Falotih 4 Sillas",
        category: "Mesas",
        price: 800.00,
        img: "./assets/juego-de-comedor-3.jpg",
        desc: "Ensamblado con madera Tornillo + MDF de la mejor calidad, este producto será de prolongada duración en casa. Este juego viene con 4 sillas ideales para tus hijos, familiares o visitas.",
        height: 80,
        width: 100,
        stature: "Mediano"
    },
    {
        id: 7,
        title: "Conjunto de cama",
        category: "Dormitorios",
        price: 700.99,
        img: "./assets/conjunto-cama.jpg",
        desc: "Dormitorio con Cajones Pure Fresh.",
        height: 237,
        width: 115,
        stature: "Grande"
    },
    {
        id: 8,
        title: "Cama de niño",
        category: "Niños",
        price: 400.99,
        img: "./assets/cama-de-nino.jpg",
        desc: "Cama doble: diseño de marco de cama doble, el marco de la cama inferior se puede extraer. Adecuado para una familia con dos niños, o el bebé necesita adultos para dormir.",
        height: 63,
        width: 30,
        stature: "Pequeño"
    },
    {
        id: 9,
        title: "Cama adulto",
        category: "Dormitorios",
        price: 500.99,
        img: "./assets/cama-adulto.jpg",
        desc: "Cama Adulto, con diseño atractivo y funcional en la cabecera que posee dos cajones con puertas en los extremos y en el medio un compartimento de tres espacios. Además de su amplia pateadera con gavetas y sus piezas universales que favorecen al mantenimiento.",
        height: 207,
        width: 160,
        stature: "Grande"
    },
    {
        id: 10,
        title: "Escritorio Galicia",
        category: "Escritorio",
        price: 199.99,
        img: "./assets/escritorio.png",
        desc: "Escritorio marrón con librero.",
        height: 120,
        width: 40,
        stature: "Mediano"
    },
    {
        id: 11,
        title: "Escritorio Montessori Casita",
        category: "Escritorio",
        price: 300.99,
        img: "./assets/escritorio-montessori-casita.jpeg",
        desc: "Escritorio bajito con forma de casita y estilo nórdico, perfecto para completar la habitación de nuestros niños con muebles Montessori adecuados a su altura y ritmo de crecimiento",
        height: 122,
        width: 40,
        stature: "Pequeño"
    },
    {
        id: 12,
        title: "Escritorio para niños",
        category: "Niños",
        price: 490.99,
        img: "./assets/escritorio-para-niños.jpeg",
        desc: "Hermoso y moderno juego de escritorio y silla para niños viene en colores brillantes e incluye amplio escritorio y silla",
        height: 100,
        width: 114,
        stature: "Mediano"
    },
    {
        id: 13,
        title: "Armario de almacenamiento",
        category: "Armario",
        price: 25.99,
        img: "./assets/armario-de-almacenamiento.jpeg",
        desc: "El armario de almacenamiento está fabricado con madera contrachapada de abedul cosechada de forma sostenible con un acabado de laca de madera natural resistente, resistente a los arañazos, fácil de limpiar.",
        height: 91,
        width: 41,
        stature: "Pequeño"
    }
]

const $sectionCenter = document.querySelector('.section-center');
const $btnContainer = document.querySelector('.btn-container');
const $btnFiltrosExtra = document.getElementById('filtrosExtras');

$btnFiltrosExtra.addEventListener('click', (ev) => {
    ev.preventDefault();
    let menuFiltered = menu;

    const filtroTamano = document.getElementById('tamano').value;
    if(filtroTamano != "") {
        menuFiltered = menuFiltered.filter(menuItem => menuItem.stature === filtroTamano)
    }

    const filtroPrecioMin = document.getElementById('precioMin').value;
    if(filtroPrecioMin != "") {
        menuFiltered = menuFiltered.filter(menuItem => menuItem.price >= parseInt(filtroPrecioMin))
    }

    const filtroPrecioMax = document.getElementById('precioMax').value;
    if(filtroPrecioMax != "") {
        menuFiltered = menuFiltered.filter(menuItem => menuItem.price <= parseInt(filtroPrecioMax))
    }

    let category = localStorage.getItem('category') || '';
    if(category != "" && category != "Todo") {
        menuFiltered = menuFiltered.filter(menuItem => menuItem.category === category)
    }

    displayMenuItems(menuFiltered)
})

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
    displayMenuButtons()
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `
            <article class="menu-item">
                <div class="item--left">
                    <img src=${item.img} class="photo" alt=${item.title} width="250">
                    <a href="https://api.whatsapp.com/send?phone=+51940146776&text=Hola%20quiero%20un%20${item.title}" target="_blank" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> Hacer pedido</a>
                </div>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                    <p class="item-text">Medidas ${item.width} x ${item.height} cm</p>
                    <p class="item-text price">${item.price} soles</p>
                </div>
            </article>
        `
    })

    displayMenu = displayMenu.join("")
    $sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce((values, item) => {
        if(!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['Todo'])
    const categoryBtns = categories.map(category => `<button class="filter-btn" type="button">${category}</button>`).join("")
    $btnContainer.innerHTML = categoryBtns
    
    const $btnsFilter = $btnContainer.querySelectorAll('.filter-btn')
    
    $btnsFilter.forEach(btn => {
        btn.addEventListener('click', e => {
            const category = e.currentTarget.textContent
            localStorage.setItem('category', category);
            const menuCategory = menu.filter(menuItem => menuItem.category === category)
            if(category === 'Todo') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
}