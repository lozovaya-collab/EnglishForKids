let categories = []
let animals_1 = []
let nameOfcategorie = 'main'
const boxOfCards = document.querySelector('.box_of_cards')
let cards = boxOfCards.children

let request = new XMLHttpRequest()

request.open('GET', './categories.json')

const linkAnimal1 = document.querySelector('.animal_1')
const linkAnimal2 = document.querySelector('.animal_2')
const linkProfessions = document.querySelector('.professions')
const linkClothes = document.querySelector('.clothes')
const linkEmotions = document.querySelector('.emotions')
const linkBodyParts = document.querySelector('.body_parts')
const linkMain = document.querySelector('.main_page')
const linkColors = document.querySelector('.colors')
const linkFamily = document.querySelector('.family')

fetch('/categories.json').then(res => res.json()).then(list => {
    categories = list
    createCategoriesOrWords(categories, nameOfcategorie)
    linkAnimal1.addEventListener('click', () => {
        nameOfcategorie = "animal 1"
        click(nameOfcategorie)

        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }

    })
    linkAnimal2.addEventListener('click', () => {
        nameOfcategorie = "animal 2"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })
    linkProfessions.addEventListener('click', () => {
        nameOfcategorie = "professions"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })

    linkClothes.addEventListener('click', () => {
        nameOfcategorie = "clothes"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })

    linkEmotions.addEventListener('click', () => {
        nameOfcategorie = "emotions"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })

    linkBodyParts.addEventListener('click', () => {
        nameOfcategorie = "body parts"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })
    linkMain.addEventListener('click', () => {
        nameOfcategorie = "main"
        click(nameOfcategorie)

    })
    linkColors.addEventListener('click', () => {
        nameOfcategorie = "colors"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })
    linkFamily.addEventListener('click', () => {
        nameOfcategorie = "family"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', () => {

                let audio = document.querySelector(`audio[data-key="sound_${cards[i].children[1].innerHTML}"]`);
                audio.currentTime = 0;
                audio.play();

            })
        }
    })




})


function click(name) {
    boxOfCards.innerHTML = ''

    createCategoriesOrWords(categories, name)
    cards = boxOfCards.children
    console.log(cards)
}



function createCategoriesOrWords(array, name) {
    let arrayOfInfo = array
    boxOfCards.innerHTML = ''
    boxOfCards.innerHTML += createCategorieOrWord(arrayOfInfo, name)
    cards = boxOfCards.children
}

function createCategorieOrWord(array, name) {
    let str = ''
    for (let i = 0; i < array.length; i++) {
        console.log(name);
        if (array[i].categorie == name) {
            str = str + `<div class="box_of_cards__card"><img class="box_of_cards__card__image" alt="" src="${array[i].img}"><h2>${array[i].name}</h2><audio data-key="sound_${array[i].name}" src="${array[i].sound}"></audio><button class="translate"></button></div>`
        }
    }
    return str
}
request.send()