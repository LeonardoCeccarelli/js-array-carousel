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

let currentIndex = 2

// Creo i cicli che individuano l'immagine, titolo e sottotitolo corrente
for (let i = 0; i < listItems.length; i++) {

    const urlCurrent = listItems[i];

    let opacityClass = ""

    if (i === currentIndex) {
        opacityClass = "active"
    }

    const tagImg = `<img class="${opacityClass}" src="${urlCurrent}" alt="immagine #${i}">`
    const opacityScrollImg = `<img class="${opacityClass}" src="${urlCurrent}" alt="immagine #${i}">`

    console.log(tagImg);
    console.log(opacityScrollImg);

    bigImgContainer.innerHTML += tagImg
    scrollImgContainer.innerHTML += opacityScrollImg
}

// for (let i = 0; i < listTitle.length; i++) {
//     const titleCurrent = listTitle[i];

//     console.log(titleCurrent);
// }

// for (let i = 0; i < listText.length; i++) {
//     const textCurrent = listText[i];

//     console.log(textCurrent);
// }



