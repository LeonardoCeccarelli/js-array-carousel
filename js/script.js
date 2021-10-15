// Creo array foto, titolo e sottotitolo
const listItems = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

const listTitle = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const listText = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Individuo l'html da modificare
const bigImgContainer = document.querySelector(".big_image_container")
const scrollImgContainer = document.querySelector(".scroll_image")
// const textBigImg = bigImgContainer.querySelector(".text_image")
const textBigImg = document.createElement("div")
textBigImg.classList.add("text_image")

// Variabile che mi permette di vedere di default l'immagine
let currentIndex = 0

// Creo il ciclo che individua e crea le immagini sia nel riquadro grande 
// che nelle foto scroll a destra
for (let i = 0; i < listItems.length; i++) {

    const urlCurrent = listItems[i];

    let opacityClass = ""
    let borderClass = ""

    if (i === currentIndex) {
        opacityClass = "active"
        borderClass = "border_select"
    }

    // Creo l'html da inserire nei contenitore
    const tagImg = `<img class="${opacityClass}" src="${urlCurrent}" alt="immagine #${i}">`
    const opacityScrollImg = `<img class="${opacityClass} ${borderClass}" src="${urlCurrent}" alt="immagine #${i}">`

    bigImgContainer.innerHTML += tagImg
    scrollImgContainer.innerHTML += opacityScrollImg
}

// Creo il ciclo che individua il titolo dell'immagine
// grande
for (let i = 0; i < listTitle.length; i++) {

    const titleCurrent = listTitle[i];

    let displayClass = ""

    if (i === currentIndex) {
        displayClass = "d_title_visible"
    }

    // Creo html del titolo immagine
    const tagTitle = `<h3 class="${displayClass} m-0 py-1">${titleCurrent}</h3>`

    textBigImg.innerHTML += tagTitle
}

// Creo il ciclo che individua il sottotitolo 
// dell'immagine
for (let i = 0; i < listText.length; i++) {

    const textCurrent = listText[i];

    let displayClass = ""

    if (i === currentIndex) {
        displayClass = "d_subtitle_visible"
    }

    // Creo html del titolo immagine
    const tagSubTitle = `<p class="${displayClass} m-0">${textCurrent}</p>`

    textBigImg.innerHTML += tagSubTitle
}

bigImgContainer.append(textBigImg)

console.log(textBigImg);
console.log(bigImgContainer);

// Individuo i pulsanti per cambiare le immagini
// freccia sopra e freccia sotto
const arrowTop = document.querySelector(".butn_top")
const arrowBottom = document.querySelector(".butn_bottom")

// Aggiungo evento freccia top
arrowTop.addEventListener("click", function () {

    // Creo variabile che mi permette di individuare nell'array l'immagine 
    // con classe active e rimuovo classe active
    const activeBigImg = bigImgContainer.querySelector(".active")
    const activeScrollImg = scrollImgContainer.querySelector(".active")
    const titleVisible = bigImgContainer.querySelector(".d_title_visible")
    const subTitleVisible = bigImgContainer.querySelector(".d_subtitle_visible")

    console.log(titleVisible);
    console.log(subTitleVisible);

    activeBigImg.classList.remove("active")
    activeScrollImg.classList.remove("active", "border_select")
    titleVisible.classList.remove("d_title_visible")
    subTitleVisible.classList.remove("d_subtitle_visible")

    //sottraggo 1 all'indice corrente cosi da trovare l'elemento 
    //prima di questo
    currentIndex--

    // Se il contatore finisce sotto lo zero mi ritorna all'ultima
    // foto dell'array
    if (currentIndex < 0) {
        currentIndex = listItems.length - 1
    }

    console.log("Indice corrente = ", currentIndex);

    // Devo trovare l'immagine che ha il currentIndex
    // usando una nuova variabile 
    // da riassegnarrgli poi la classe active
    const listImgTags = bigImgContainer.querySelectorAll("img")
    const listScrollImgTags = scrollImgContainer.querySelectorAll("img")
    const listTitleTags = bigImgContainer.querySelectorAll("h3")
    const listSubTitleTags = bigImgContainer.querySelectorAll("p")


    const newActiveImg = listImgTags[currentIndex]
    const newActiveScrollImg = listScrollImgTags[currentIndex]
    const newVisibleTitle = listTitleTags[currentIndex]
    const newVisibleSubTitle = listSubTitleTags[currentIndex]

    newActiveImg.classList.add("active")
    newActiveScrollImg.classList.add("active", "border_select")
    newVisibleTitle.classList.add("d_title_visible")
    newVisibleSubTitle.classList.add("d_subtitle_visible")
})

// Aggiungo evento freccia bottom
arrowBottom.addEventListener("click", function () {

    // Creo variabile che mi permette di individuare nell'array l'immagine 
    // con classe active e rimuovo classe active
    const activeBigImg = bigImgContainer.querySelector(".active")
    const activeScrollImg = scrollImgContainer.querySelector(".active")
    const titleVisible = bigImgContainer.querySelector(".d_title_visible")
    const subTitleVisible = bigImgContainer.querySelector(".d_subtitle_visible")

    activeBigImg.classList.remove("active")
    activeScrollImg.classList.remove("active", "border_select")
    titleVisible.classList.remove("d_title_visible")
    subTitleVisible.classList.remove("d_subtitle_visible")

    //sottraggo 1 all'indice corrente cosi da trovare l'elemento 
    //prima di questo
    currentIndex++

    // Se il contatore finisce sotto lo zero mi ritorna all'ultima
    // foto dell'array
    if (currentIndex > listItems.length - 1) {
        currentIndex = 0
    }

    console.log("Indice corrente = ", currentIndex);

    // Devo trovare l'immagine che ha il currentIndex
    // usando una nuova variabile 
    // da riassegnarrgli poi la classe active
    const listImgTags = bigImgContainer.querySelectorAll("img")
    const listScrollImgTags = scrollImgContainer.querySelectorAll("img")
    const listTitleTags = bigImgContainer.querySelectorAll("h3")
    const listSubTitleTags = bigImgContainer.querySelectorAll("p")

    const newActiveImg = listImgTags[currentIndex]
    const newActiveScrollImg = listScrollImgTags[currentIndex]
    const newVisibleTitle = listTitleTags[currentIndex]
    const newVisibleSubTitle = listSubTitleTags[currentIndex]


    newActiveImg.classList.add("active")
    newActiveScrollImg.classList.add("active", "border_select")
    newVisibleTitle.classList.add("d_title_visible")
    newVisibleSubTitle.classList.add("d_subtitle_visible")
})