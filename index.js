const colors = require('colors')
const prompt = require('prompt-sync')()

const LOOPS_PER_CHAR = 15
const TIME_PER_CHAR = 50

const OPTIONS = [
    ...Array.from({ length: 52 }, (_, i) => String.fromCharCode(i <= 26 ? 65 + i : 71 + i)),
    ...Array.from({ length: 10 }, (_, i) => i.toString()), '!', '@', '#', '$', '%', '&', '*'
]


function getRandomLetters(letter) {
    let result = []

    for (let i = 0; i < LOOPS_PER_CHAR; i++) {
        let randomIndex = Math.floor(Math.random() * 61)
        result.push(OPTIONS[randomIndex])
    }
    result.push(letter)

    return result
}


function getCompleteArray(text) {
    let arrText = Array.from(text)
    let arrAnim = arrText.map((value) => getRandomLetters(value))

    return arrAnim
}


async function write(completeArray) {
    let result = '';

    console.log(completeArray.length);

    for (let charAnim of completeArray) {
        for (let char of charAnim) {
            await (new Promise((resolve) => {
                setTimeout(() => {
                    console.clear()
                    console.log(result.white + char.green)
                    resolve()
                }, TIME_PER_CHAR)
            }))
        }

        result += charAnim[LOOPS_PER_CHAR]
    }

    console.clear()
    console.log(result)
}


let text = prompt('Digite a frase que deseja escrever: ')

write(getCompleteArray(text))
