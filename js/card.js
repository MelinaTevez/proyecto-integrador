function initInicio(){
    console.warn('initInicio()')

   function Card(heading, description, image) {
        // Propiedades/Atributos
        this.heading = heading
        this.description = description
        this.image = image

        // Método
        this.appendTo = function (destinationElement) {
        let card = document.createElement("a")
        card.classList.add("card")
        card.href = "https://sony.com"

        let that = this
        console.log(that)

        card.addEventListener("click", function (e) {
            e.preventDefault()
            console.log(this)

            let nuevoItemCarrito = document.createElement("div")
            nuevoItemCarrito.classList.add("carrito__item")
            nuevoItemCarrito.innerHTML = that.heading
            console.log(nuevoItemCarrito)

            elemSectionCarrito.append(nuevoItemCarrito)
        })

        card.innerHTML = `

                    <article class="card__article">
                        <div class="card__image-container">
                        <img
                            class="card__image"
                            src=${this.image}
                            alt=${this.heading}
                        />
                        </div>
                        <div class="card__content">
                        <h2 class="card__heading">${this.heading}</h2>
                        <div class="card__description">
                            <p>${this.description}</p>
                        </div>
                        </div>
                    </article>
                `
        destinationElement.appendChild(card)
        }
    }

    const elemCardsContainer = document.getElementsByClassName("cards-container")[0]
    console.log(elemCardsContainer)

    const card1 = new Card(
        "Anteojos de sol",
        "Anteojos de sol con marco blanco",
        "img/productos/anteojos-de-sol.webp"
    )

    const card2 = new Card(
        "Bolso rojo",
        "Bolso rojo",
        "img/productos/bolso-rojo.webp"
    )

    const card3 = new Card(
        "Anillos de oro",
        "Anillos de oro",
        "img/productos/anillos-de-oro.webp"
    )

    const card4 = new Card(
        "Bolso marrón",
        "Bolso marrón",
        "img/productos/bolso-marron.webp"
    )

    const card5 = new Card(
        "Aros con perlas",
        "Aros con perlas",
        "img/productos/aros-con-perlas.jpg"
    )

    const card6 = new Card(
        "Bolso naranja",
        "Bolso naranja",
        "img/productos/bolso-naranja.webp"
    )

    const card7 = new Card(
        "Aros de estrella",
        "Aros de estrella",
        "img/productos/aros-de-estrella.webp"
    )

    const card8 = new Card(
    "Bandolera de cuero",
    "Bandolera de cuero",
    "img/productos/bandolera-de-cuero.webp"
    )

    console.log(card1)
    console.log(card2)
    console.log(card3)
    console.log(card4)
    console.log(card5)
    console.log(card6)
    console.log(card7)
    console.log(card8)

    const cards = [card1, card2, card3, card4, card5, card6, card7, card8]

    console.log(cards)

    for (const unaCard of cards) {
        unaCard.appendTo(elemCardsContainer)
    }

}
