let categories = []

let nameOfcategorie = 'main'
const wrapper = document.querySelector('.wrapper')
const main = document.querySelector('.main')
let boxOfCards = document.querySelector('.box_of_cards')
let cards = document.querySelectorAll('.box_of_cards__card')
const header = document.querySelector('.header')

let errorAnswers = 0
let correctAnswers = 0
let modeGame = false

const btnStart = document.createElement('button')
btnStart.className = 'button__start_game'

const body = document.querySelector('.main')

const modeSwitchButton = document.querySelector('.slider')
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

fetch('./categories.json').then(res => res.json()).then(list => {
    categories = list

    createCategoriesOrWords(categories, nameOfcategorie)

    linkAnimal1.addEventListener('click', () => {
        nameOfcategorie = "animal 1"
        click(nameOfcategorie)

        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })
    linkAnimal2.addEventListener('click', () => {
        nameOfcategorie = "animal 2"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })
    linkProfessions.addEventListener('click', () => {
        nameOfcategorie = "professions"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkClothes.addEventListener('click', () => {

        nameOfcategorie = "clothes"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkEmotions.addEventListener('click', () => {
        nameOfcategorie = "emotions"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkBodyParts.addEventListener('click', () => {
        nameOfcategorie = "body parts"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkColors.addEventListener('click', () => {
        nameOfcategorie = "colors"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })
    linkFamily.addEventListener('click', () => {
        nameOfcategorie = "family"
        click(nameOfcategorie)
        functionsOnCards()
        if (modeGame) {
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].categorie) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkMain.addEventListener('click', () => {
        nameOfcategorie = "main"
        click(nameOfcategorie)
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function() {

                let linkToCateg = cards[i].children[0].children[0].children[1].innerHTML.toLowerCase()

                if (linkToCateg === 'animal i') {
                    linkToCateg = 'animal 1'
                } else if (linkToCateg === 'animal ii') {
                    linkToCateg = 'animal 2'
                }
                console.log(linkToCateg)
                nameOfcategorie = linkToCateg
                click(nameOfcategorie)
                functionsOnCards()

            });
        }
    })
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function() {
            let linkToCateg = cards[i].children[0].children[0].children[1].innerHTML.toLowerCase()

            if (linkToCateg === 'animal i') {
                linkToCateg = 'animal 1'
            } else if (linkToCateg === 'animal ii') {
                linkToCateg = 'animal 2'
            }
            console.log(linkToCateg)

            nameOfcategorie = linkToCateg
            click(nameOfcategorie)
            functionsOnCards()

        });
    }
    const arrayOfWords = []
    let index = 0
    modeSwitchButton.addEventListener('click', () => {

        if (!modeGame) {
            console.log(nameOfcategorie)
            if (nameOfcategorie === 'main') {
                click(nameOfcategorie)
                for (let i = 0; i < cards.length; i++) {
                    cards[i].addEventListener('click', function() {

                        let linkToCateg = cards[i].children[0].children[0].children[1].innerHTML.toLowerCase()

                        if (linkToCateg === 'animal i') {
                            linkToCateg = 'animal 1'
                        } else if (linkToCateg === 'animal ii') {
                            linkToCateg = 'animal 2'
                        }
                        console.log(linkToCateg)
                        nameOfcategorie = linkToCateg
                        click(nameOfcategorie)
                        functionsOnCards()
                        for (let i = 0; i < categories.length; i++) {
                            if (nameOfcategorie === categories[i].categorie) {
                                arrayOfWords.push(categories[i].name)
                            }
                        }
                        arrayOfWords.sort(makeRandomArr)
                        console.log(arrayOfWords)
                    });
                }
            } else {
                createCardsForGame(categories, nameOfcategorie)
                btnStart.innerHTML = 'Start game'
                btnStart.className = 'button__start_game'
                body.appendChild(btnStart)
                for (let i = 0; i < categories.length; i++) {
                    if (nameOfcategorie === categories[i].categorie) {
                        arrayOfWords.push(categories[i].name)
                    }
                }
                arrayOfWords.sort(makeRandomArr)
                console.log(arrayOfWords)
            }

            modeGame = true
        } else if (modeGame) {
            console.log('aa')
            modeGame = false
            click(nameOfcategorie)
            functionsOnCards()
            body.removeChild(btnStart)
        }


    })

    btnStart.addEventListener('click', () => {
        let Reapet = false
        if (btnStart.innerHTML === 'Reapet') {
            Reapet = true
            soundTurnOn(arrayOfWords[index])
        } else {
            btnStart.innerHTML = 'Reapet'
            if (index === 0) {
                soundTurnOn(arrayOfWords[index])
            }
            for (let i = 0; i < cards.length; i++) {

                cards[i].children[0].children[0].addEventListener('click', () => {

                    let currentCard = cards[i].children[0].children[0]
                    let soundName = currentCard.children[1].dataset.key
                    console.log(index)
                    let str = `sound_${arrayOfWords[index]}`
                    console.log(str)
                    console.log(soundName)

                    if (soundName == `sound_${arrayOfWords[index]}`) {
                        console.log(soundName)
                        let audio = document.querySelector(`audio[data-key="sound_correct"]`);
                        console.log(audio)
                        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                        currentCard.children[0].className = 'card_image__for_game__disabled'
                        currentCard.style.cursor = 'default'
                        const star = document.createElement('i')
                        star.className = 'fas fa-star'
                        const pozitivePanel = document.querySelector('.pozitive')
                        correctAnswers += 1
                        pozitivePanel.prepend(star)
                        audio.currentTime = 0;

                        audio.play();

                        index += 1

                        if (index === 8) {

                            setTimeout(() => {
                                let result
                                console.log(errorAnswers);
                                console.log(correctAnswers);
                                if (errorAnswers === 0) {
                                    result = 'win'
                                } else if (errorAnswers > 0) {
                                    result = 'loser'
                                }
                                let audio = document.querySelector(`audio[data-key="sound_${result}"]`);
                                console.log(audio)

                                audio.currentTime = 0;
                                audio.play();
                                index = 0
                                alert('игра окончена')
                                wrapper.innerHTML = ''
                                boxOfCards = document.createElement('div')
                                boxOfCards.className = 'box_of_cards'
                                const image = document.createElement('img')
                                image.src = `assets/images/${result}.png`
                                image.className = 'the__end'
                                const negative = document.querySelector('.negative')
                                const pozitive = document.querySelector('.pozitive')
                                wrapper.appendChild(boxOfCards)
                                main.removeChild(negative)
                                main.removeChild(pozitive)
                                boxOfCards.appendChild(image)
                                main.removeChild(btnStart)






                                correctAnswers = 0
                                errorAnswers = 0

                                setTimeout(() => {
                                    nameOfcategorie = "main"
                                    click(nameOfcategorie)

                                    for (let i = 0; i < cards.length; i++) {
                                        cards[i].addEventListener('click', function() {

                                            let linkToCateg = cards[i].children[0].children[0].children[1].innerHTML.toLowerCase()

                                            if (linkToCateg === 'animal i') {
                                                linkToCateg = 'animal 1'
                                            } else if (linkToCateg === 'animal ii') {
                                                linkToCateg = 'animal 2'
                                            }
                                            console.log(linkToCateg)

                                            click(linkToCateg)
                                            functionsOnCards()

                                        });
                                    }
                                }, 1000)



                            }, 2000);


                        } else {
                            setTimeout(() => soundTurnOn(arrayOfWords[index]), 2000);

                        }

                    } else {

                        console.log(currentCard.children[0].className);
                        console.log('aaaaaaaвввввввввввввввввaaaaaaaaaaaaaa');
                        if (currentCard.children[0].className !== 'card_image__for_game__disabled') {
                            const star = document.createElement('i')
                            star.className = 'fas fa-star'
                            const negativePanel = document.querySelector('.negative')
                            errorAnswers += 1
                            negativePanel.prepend(star)
                            let audio = document.querySelector(`audio[data-key="sound_error"]`);
                            console.log(audio)
                            audio.currentTime = 0;
                            audio.play();
                        }

                    }

                })
            }
        }


    })
})


function click(name) {
    boxOfCards.innerHTML = ''

    createCategoriesOrWords(categories, name)
        // @ts-ignore
    cards = boxOfCards.children
    console.log(cards)
}

function createCardsForGame(array, name) {
    boxOfCards.innerHTML = ''
    boxOfCards.innerHTML += createCards(array, name)
}

function createCategoriesOrWords(array, name) {
    if (modeGame) {
        createCardsForGame(array, name)
    } else {
        let arrayOfInfo = array
        boxOfCards.innerHTML = ''
        boxOfCards.innerHTML += createCategorieOrWord(arrayOfInfo, name)

        // @ts-ignore
        cards = boxOfCards.children
    }
}

function createCards(array, name) {
    console.log(array)
    console.log(name)
    let str = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i].categorie == name && name === 'main') {
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front">
                        <img class="box_of_cards__card__image" alt="" src="${array[i].img}">
                        <h2 class="animal_1">${array[i].name}</h2>  
                    </div>
                </div>
            </div>`
        } else if (array[i].categorie == name) {
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front">
                        <img class="card_image__for_game" alt="" src="${array[i].img}">
                        <audio data-key="sound_${array[i].name}" src="${array[i].sound}"></audio>
                    </div>
                    
                </div>
            </div>`
        }
    }



    return str
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
                        <h2 class="animal_1">${array[i].name}</h2>
                        
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
                        <h2>${array[i].translate}</h2>
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
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
}

function functionsOnCards() {
    if (modeGame) {
        createCardsForGame(categories, nameOfcategorie)
        btnStart.innerHTML = 'Start game'
        btnStart.className = 'button__start_game'
        body.appendChild(btnStart)
    } else {
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
    }



}

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}
request.send()