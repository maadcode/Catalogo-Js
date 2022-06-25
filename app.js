const menu = [
    {
        id: 1,
        title: "Librero",
        category: "Armarios",
        price: 15.99,
        img: "./assets/librero.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 2,
        title: "Juego de comedor",
        category: "Mesas",
        price: 13.99,
        img: "./assets/juego-de-comedor.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 3,
        title: "Mesa de noche",
        category: "Armarios",
        price: 21.99,
        img: "./assets/mesa-de-noche.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 4,
        title: "Velador Multifuncional",
        category: "Armarios",
        price: 15.99,
        img: "./assets/velador-multifuncional.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 5,
        title: "Juego de comedor",
        category: "Mesas",
        price: 10.99,
        img: "./assets/juego-de-comedor-2.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 6,
        title: "Juego de comedor",
        category: "Mesas",
        price: 17.99,
        img: "./assets/juego-de-comedor-3.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 7,
        title: "Conjunto de cama",
        category: "Dormitorios",
        price: 19.99,
        img: "./assets/conjunto-cama.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 8,
        title: "Cama de niño",
        category: "Dormitorios",
        price: 20.99,
        img: "./assets/cama-de-nino.jpg",
        desc: "Aquí va una descripción del producto."
    },
    {
        id: 9,
        title: "Cama adulto",
        category: "Dormitorios",
        price: 25.99,
        img: "./assets/cama-adulto.jpg",
        desc: "Aquí va una descripción del producto."
    }
]

const $sectionCenter = document.querySelector('.section-center')
const $btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
    displayMenuButtons()
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `
            <article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} width="250">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
                <a href="" target="_blank" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> Hacer pedido</a>
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
    }, ['all'])
    const categoryBtns = categories.map(category => `<button class="filter-btn" type="button">${category}</button>`).join("")
    $btnContainer.innerHTML = categoryBtns
    
    const $btnsFilter = $btnContainer.querySelectorAll('.filter-btn')
    
    $btnsFilter.forEach(btn => {
        btn.addEventListener('click', e => {
            const category = e.currentTarget.textContent
            const menuCategory = menu.filter(menuItem => menuItem.category === category)
            if(category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
}