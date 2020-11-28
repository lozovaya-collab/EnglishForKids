let categories = []
let animals_1 = []
let nameOfcategorie = 'main'
const boxOfCards = document.querySelector('.box_of_cards')
let cards = document.querySelectorAll('.box_of_cards__card')

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
console.log(linkColors)
const linkFamily = document.querySelector('.family')

fetch('/categories.json').then(res => res.json()).then(list => {
    categories = list
    console.log(cards)
    createCategoriesOrWords(categories, nameOfcategorie)
    linkAnimal1.addEventListener('click', () => {
        nameOfcategorie = "animal 1"
        click(nameOfcategorie)

        for (let i = 0; i < cards.length; i++) {
            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))
        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }

    })
    linkAnimal2.addEventListener('click', () => {
        nameOfcategorie = "animal 2"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {



            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })
    linkProfessions.addEventListener('click', () => {
        nameOfcategorie = "professions"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {



            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })

    linkClothes.addEventListener('click', () => {

        nameOfcategorie = "clothes"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {



            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })

    linkEmotions.addEventListener('click', () => {
        nameOfcategorie = "emotions"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {



            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })

    linkBodyParts.addEventListener('click', () => {
        nameOfcategorie = "body parts"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {



            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })

    linkColors.addEventListener('click', () => {
        nameOfcategorie = "colors"
        click(nameOfcategorie)
        console.log('colors')
        for (let i = 0; i < cards.length; i++) {



            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })
    linkFamily.addEventListener('click', () => {
        nameOfcategorie = "family"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {


            let tap = cards[i].children[0].children[0]
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.children[0].addEventListener('click', () => soundTurnOn(sound))
            tap.children[1].addEventListener('click', () => soundTurnOn(sound))


        }
        const card = document.querySelectorAll('.translate')
        console.log(card);
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function() {

                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');

            });
        }

        const car = document.querySelectorAll('.box_of_cards__card--back');
        console.log(car)
        for (let i = 0; i < car.length; i++) {
            car[i].addEventListener('mouseleave', () => {
                let c = document.querySelectorAll('.card')
                c[i].classList.toggle('is-flipped');
            })
        }
    })

    linkMain.addEventListener('click', () => {
        nameOfcategorie = "main"
        click(nameOfcategorie)
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
        if (array[i].categorie == name && name === 'main') {
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front">
                        <img class="box_of_cards__card__image" alt="" src="${array[i].img}">
                        <h2>${array[i].name}</h2>
                        <audio data-key="sound_${array[i].name}" src="${array[i].sound}"></audio><button class="translate"></button>
                    </div>
                </div>
            </div>`
        } else if (array[i].categorie == name) {
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front">
                        <img class="box_of_cards__card__image" alt="" src="${array[i].img}">
                        <h2>${array[i].name}</h2>
                        <button class="translate"></button>
                        <audio data-key="sound_${array[i].name}" src="${array[i].sound}"></audio>
                    </div>
                    <div class="box_of_cards__card box_of_cards__card--back">
                        <img class="box_of_cards__card__image " alt="" src="${array[i].img}">
                        <h2>${array[i].name}</h2>
                        <audio data-key="sound_${array[i].name}" src="${array[i].sound}"></audio>
                    </div>
                </div>
            </div>`
        }
    }
    return str
}

function soundTurnOn(child) {
    let audio = document.querySelector(`audio[data-key="sound_${child}"]`);
    audio.currentTime = 0;
    audio.play();
}
request.send()