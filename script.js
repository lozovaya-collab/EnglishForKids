let categories = []
let difficultWords = []
let statictics = false
const btnReset = document.createElement('button')
btnReset.innerHTML = 'Reset'
btnReset.className = 'button__start_game'

const PlayOrTrain = document.querySelector('.slider_span')
const btnDifficultWords = document.createElement('button')
btnDifficultWords.innerHTML = 'Reapet difficult words'
btnDifficultWords.className = 'button__start_game'

let nameOfcategorie = 'main'
const wrapper = document.querySelector('.wrapper')
const main = document.querySelector('.main')
let boxOfCards = document.querySelector('.box_of_cards')
let cards = document.querySelectorAll('.box_of_cards__card')
const header = document.querySelector('.header')
let translate = true
let errorAnswers = 0
let correctAnswers = 0
let modeGame = false

let upPercent = false

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
const linkStatistics = document.querySelector('.statistics')

fetch('./categories.json').then(res => res.json()).then(list => {
    categories = list
    console.log(categories);
    if (localStorage.getItem('difficultWords') !== null) {
        difficultWords = JSON.parse(localStorage.getItem('difficultWords'))
    } else {
        localStorage.setItem('difficultWords', JSON.stringify(difficultWords))
    }

    if (localStorage.getItem('categories') !== null) {
        categories = JSON.parse(localStorage.getItem('categories'))
        console.log(categories);
    } else {
        localStorage.setItem('categories', JSON.stringify(categories))
    }
    console.log(categories);
    createCategoriesOrWords(categories, nameOfcategorie)

    linkStatistics.addEventListener('click', () => {
        statictics = true
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        createTableOfStatistics(categories)

    })
    linkAnimal1.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "animal 1"
        click(nameOfcategorie)

        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })
    linkAnimal2.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "animal 2"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })
    linkProfessions.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "professions"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkClothes.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "clothes"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkEmotions.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "emotions"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkBodyParts.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "body parts"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkColors.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "colors"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })
    linkFamily.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        nameOfcategorie = "family"
        click(nameOfcategorie)
        functionsOnCards(categories)
        if (modeGame) {
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        }
    })

    linkMain.addEventListener('click', () => {
        statictics = false
        if (localStorage.getItem('categories') !== null) {
            categories = JSON.parse(localStorage.getItem('categories'))
            console.log(categories);
        }
        if (modeGame) {
            main.removeChild(btnStart)
        }
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
                functionsOnCards(categories)
                arrayOfWords = []
                for (let i = 0; i < categories.length; i++) {
                    if (nameOfcategorie === categories[i].category) {
                        arrayOfWords.push(categories[i].name)
                    }
                }
                arrayOfWords.sort(makeRandomArr)
                console.log(arrayOfWords)
            });
        }
    })
    for (let i = 0; i < cards.length; i++) {
        statictics = false
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
            functionsOnCards(categories)
            arrayOfWords = []
            for (let i = 0; i < categories.length; i++) {
                if (nameOfcategorie === categories[i].category) {
                    arrayOfWords.push(categories[i].name)
                }
            }
            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords)
        });
    }
    let arrayOfWords = []
    let index = 0
    modeSwitchButton.addEventListener('click', () => {
        if (statictics) {
            createTableOfStatistics(categories)
            if (modeGame) {
                modeGame = false
                PlayOrTrain.innerHTML = 'TRAIN'
                PlayOrTrain.className = 'slider_span'
            } else {
                modeGame = true
                PlayOrTrain.innerHTML = 'PLAY'
                PlayOrTrain.className = 'slider_span_play'
            }
        } else {
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
                            functionsOnCards(categories)
                            arrayOfWords = []
                            for (let i = 0; i < categories.length; i++) {
                                if (nameOfcategorie === categories[i].category) {
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
                    arrayOfWords = []
                    for (let i = 0; i < categories.length; i++) {
                        if (nameOfcategorie === categories[i].category) {
                            arrayOfWords.push(categories[i].name)
                        }
                    }
                    arrayOfWords.sort(makeRandomArr)
                    console.log(arrayOfWords)
                }

                modeGame = true
                PlayOrTrain.innerHTML = 'PLAY'
                PlayOrTrain.className = 'slider_span_play'
            } else if (modeGame) {
                console.log('aa')
                modeGame = false
                PlayOrTrain.innerHTML = 'TRAIN'
                PlayOrTrain.className = 'slider_span'
                body.removeChild(btnStart)
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
                            functionsOnCards(categories)
                            arrayOfWords = []
                            for (let i = 0; i < categories.length; i++) {
                                if (nameOfcategorie === categories[i].category) {
                                    arrayOfWords.push(categories[i].name)
                                }
                            }
                            arrayOfWords.sort(makeRandomArr)
                            console.log(arrayOfWords)
                        });
                    }
                } else {
                    click(nameOfcategorie)
                    functionsOnCards(categories)
                }
            }
        }
    })

    btnReset.addEventListener('click', () => {
        for (let obj of categories) {
            obj.correct = 0
            obj.percent = 0
            obj.error = 0
            obj.train = 0
        }
        localStorage.setItem('categories', JSON.stringify(categories))
        createTableOfStatistics(categories)
        difficultWords = []
    })

    btnDifficultWords.addEventListener('click', () => {
        if (localStorage.getItem('difficultWords') !== null) {
            difficultWords = JSON.parse(localStorage.getItem('difficultWords'))
            console.log(difficultWords);
        }
        difficultWords.sort((prev, next) => next.percent - prev.percent);
        console.log(difficultWords);
        if (difficultWords.length > 8) {
            let elements = difficultWords.length - 8
            difficultWords.splice(8, elements)
        }
        console.log(difficultWords);
        let mode = 'difficult'
        wrapper.innerHTML = ''
        wrapper.appendChild(boxOfCards)
        wrapper.style.display = 'flex'
        console.log(modeGame);
        if (!modeGame) {
            createCategoriesOrWords(difficultWords, mode)
            functionsOnCards(difficultWords)
        } else {
            arrayOfWords = []
            for (let i = 0; i < difficultWords.length; i++) {

                arrayOfWords.push(difficultWords[i].name)

            }

            arrayOfWords.sort(makeRandomArr)
            console.log(arrayOfWords);
            createCardsForGame(difficultWords, mode)
            btnStart.innerHTML = 'Start game'
            body.appendChild(btnStart)


        }
    })

    btnStart.addEventListener('click', () => {

        const negPanel = document.createElement('div')
        const pozPanel = document.createElement('div')
        negPanel.className = 'negative'
        pozPanel.className = 'pozitive'
        main.appendChild(negPanel)
        main.appendChild(pozPanel)
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
                    console.log(cards[i].children[0].children[0].children[0].src)
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
                        for (let j = 0; j < categories.length; j++) {

                            if (nameOfcategorie === categories[j].category) {

                                if (soundName.replace("sound_", "") === categories[j].name) {
                                    categories[j].correct += 1
                                    console.log(categories[j].correct);
                                }
                            }


                        }
                        localStorage.setItem('categories', JSON.stringify(categories))
                        pozitivePanel.prepend(star)
                        audio.currentTime = 0;

                        audio.play();

                        index += 1

                        if (index === arrayOfWords.length) {

                            for (let j = 0; j < categories.length; j++) {

                                if (nameOfcategorie === categories[j].category) {

                                    let allAnswers = (categories[j].error + categories[j].correct)
                                    let ratio = categories[j].error / allAnswers
                                    categories[j].percent = Math.ceil(ratio * 100)

                                    if (categories[j].percent > 0) {
                                        let value = (difficultWords.find(obj => obj.name == categories[j].name) && true) || false
                                        if (!value) {
                                            difficultWords.push(categories[j])
                                        } else {
                                            difficultWords.find(obj => obj.name == categories[j].name).percent = categories[j].percent
                                        }

                                    }
                                }
                            }
                            localStorage.setItem('categories', JSON.stringify(categories))
                            console.log(difficultWords);
                            localStorage.setItem('difficultWords', JSON.stringify(difficultWords))

                            setTimeout(() => {
                                let result
                                let message = ''
                                console.log(errorAnswers);
                                console.log(correctAnswers);
                                if (errorAnswers === 0) {
                                    result = 'win'
                                    message = 'Great job!'
                                } else if (errorAnswers > 0) {
                                    result = 'loser'
                                    message = `Fail! Errors: ${errorAnswers}`
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
                                const h2 = document.createElement('h2')
                                h2.innerHTML = message
                                image.src = `assets/images/${result}.png`
                                image.className = 'the__end'
                                const negative = document.querySelector('.negative')
                                const pozitive = document.querySelector('.pozitive')
                                wrapper.appendChild(boxOfCards)
                                main.removeChild(negative)
                                main.removeChild(pozitive)
                                boxOfCards.appendChild(h2)
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
                                            nameOfcategorie = linkToCateg
                                            click(nameOfcategorie)
                                            functionsOnCards(categories)
                                            arrayOfWords = []
                                            for (let i = 0; i < categories.length; i++) {
                                                if (nameOfcategorie === categories[i].category) {
                                                    arrayOfWords.push(categories[i].name)
                                                }
                                            }
                                            arrayOfWords.sort(makeRandomArr)
                                            console.log(arrayOfWords)

                                        });
                                    }
                                }, 5000)



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
                            if (errorAnswers % 10 === 0) {
                                negativePanel.innerHTML = ''
                            }
                            negativePanel.prepend(star)
                            let audio = document.querySelector(`audio[data-key="sound_error"]`);
                            console.log(audio)
                            audio.currentTime = 0;
                            audio.play();

                            for (let j = 0; j < categories.length; j++) {

                                if (nameOfcategorie === categories[j].category) {
                                    console.log(`_${arrayOfWords[index]}_`);
                                    console.log(categories[j].name);

                                    if (arrayOfWords[index] === categories[j].name) {
                                        console.log('qaaa');
                                        categories[j].error += 1
                                        console.log(categories[j].name, categories[j].error);
                                    }
                                }


                            }
                            localStorage.setItem('categories', JSON.stringify(categories))
                        }

                    }

                })
            }
        }


    })
})


function click(name) {
    wrapper.innerHTML = ''
    wrapper.appendChild(boxOfCards)
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
        console.log(boxOfCards);
        wrapper.appendChild(boxOfCards)
        boxOfCards.innerHTML = ''
        boxOfCards.innerHTML += createCategorieOrWord(arrayOfInfo, name)
        console.log(boxOfCards.innerHTML);
        // @ts-ignore
        cards = boxOfCards.children
    }
}

function createCards(array, name) {
    console.log(array)
    console.log(name)
    let str = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i].category == name && name === 'main') {
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front">
                        <img class="box_of_cards__card__image" alt="" src="${array[i].img}">
                        <h2 class="animal_1">${array[i].name}</h2>  
                    </div>
                </div>
            </div>`
        } else if (array[i].category == name || name === 'difficult') {
            console.log(";ll");
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front" style="height: 200px;">
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
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        console.log(array[0].category);

        if (array[i].category == name && name === 'main') {
            console.log(str);
            str = str + `
            <div class="scene scene--card">
                <div class="card">
                    <div class="box_of_cards__card box_of_cards__card--front">
                        <img class="box_of_cards__card__image" alt="" src="${array[i].img}">
                        <h2 class="animal_1">${array[i].name}</h2>
                        
                    </div>
                </div>
            </div>`
        } else if (array[i].category == name || name === 'difficult') {
            console.log("туть");
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

function functionsOnCards(array) {
    if (modeGame) {
        createCardsForGame(categories, nameOfcategorie)
        btnStart.innerHTML = 'Start game'
        btnStart.className = 'button__start_game'
        body.appendChild(btnStart)
    } else {
        for (let i = 0; i < cards.length; i++) {


            let tap = cards[i].children[0].children[0]
            console.log(cards[i].children[0].children[0].children[1].innerHTML);
            let sound = cards[i].children[0].children[0].children[1].innerHTML
            tap.addEventListener('click', (e) => {
                console.log(e.path.length);



                if (e.path[0].className !== "translate") {
                    soundTurnOn(sound)
                    console.log(array);
                    for (let i = 0; i < array.length; i++) {

                        if (tap.children[1].innerHTML === array[i].name) {
                            array[i].train += 1
                        }
                    }
                    if (array.length === 72) localStorage.setItem('categories', JSON.stringify(array))
                    translate = false
                }
                console.log(e.path[0].className !== "translate");
            })



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

function createTableOfStatistics(array) {
    wrapper.innerHTML = ''
    wrapper.style.display = 'block'

    wrapper.innerHTML = createHeadOfTable(array)

    const table = document.querySelectorAll('.table_statistics')
    const arrayH2 = document.querySelectorAll('.headline')
    console.log(table);
    for (let i = 0; i < table.length; i++) {
        console.log('add');
        createRowInTable(arrayH2[i], table[i], categories)
    }
    wrapper.prepend(btnDifficultWords)
    wrapper.prepend(btnReset)
}

function createHeadOfTable(array) {
    console.log(array);
    let str = ''

    for (let i = 1; i < array.length; i++) {
        if (array[i].category !== "main" && array[i].category !== array[i - 1].category) {
            str += `
            <h2 class="headline">${array[i].category.charAt(0).toUpperCase() + array[i].category.slice(1)}</h2>
            <table class="table_statistics">
                <thead>
                    <tr>
                        <th>Word <button class="sortWord">&#9675;</button></th>
                        <th>Translation  <button class="sortTranslation">&#9675;</button></th>
                        <!-- Сколько раз кликнули и угадали-->
                        <th>Correct  <button class="sortCorrect">&#9675;</button></th>
                        <th>Wrong <button class="sortWrong">&#9675;</button></th>
                        <th>% errors  <button class="sortPercent">&#9675;</button></th>
                        <th>Train <button class="sortTrain">&#9675;</button></th>
                    </tr>
        
                </thead>
            </table>`
        }
    }
    return str
}

function createRowInTable(headline, table, array) {
    for (let i = 0; i < array.length; i++) {


        if (headline.innerHTML.toLowerCase() === array[i].category) {
            const row = document.createElement('tr')

            row.innerHTML = `
                <td>${array[i].name}</td>
                <td>${array[i].translate}</td>
                <td>${array[i].correct}</td>
                <td>${array[i].error}</td>
                <td>${array[i].percent}</td>
                <td>${array[i].train}</td>`

            table.appendChild(row)
        }
    }
}
request.send()