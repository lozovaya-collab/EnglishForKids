let categories = []
let animals_1 = []
let nameOfcategorie = 'main'
const boxOfCards = document.querySelector('.box_of_cards')
let request = new XMLHttpRequest()

request.open('GET', './categories.json')

let linkAnimal1 = document.querySelector('.animal_1')

fetch('/categories.json').then(res => res.json()).then(list => {
    categories = list
    createCategoriesOrWords(categories, nameOfcategorie)
    linkAnimal1.addEventListener('click', () => {

        click()

    })

})

function click() {
    boxOfCards.innerHTML = ''
    nameOfcategorie = "animal_1"
    createCategoriesOrWords(categories, nameOfcategorie)
}



function createCategoriesOrWords(array, name) {
    let arrayOfInfo = array
    boxOfCards.innerHTML = ''
    boxOfCards.innerHTML += createCategorieOrWord(arrayOfInfo, name)
}

function createCategorieOrWord(array, name) {
    let str = ''
    for (let i = 0; i < array.length; i++) {
        console.log(name);
        if (array[i].categorie == name) {
            str = str + `<div class="box_of_cards__card"><img class="box_of_cards__card__image" alt="" src="${array[i].img}"><h2>${array[i].name}</h2></div>`
        }
    }
    return str
}
request.send()