const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("Time to put everything into practice - 'cominciamo' - let's begin")
console.log("It's early morning and you are walking through the streets of Roma, a man in suit says 'Buongiorno'")
console.log("Based on what you know, what would be the proper response?")
console.log("Acknowledging the time of day, gender, and formal version of 'how are you'.")

const greeting = function (guess) {
    console.log('You answered: ' + guess)
    if (guess.toLowerCase() === 'buongiorno signore come sta') {
        console.log(`That's right, bravissimo!`)
        interface.close();
    } else if (guess === 'buona notte signora come sta' || guess === 'buona notte signore come sta' || guess === 'buonasera signora come sta' || guess === 'buonasera signore come sta') {
        console.log("That's incorrect, the answer is 'Buongiorno signore come sta?'.");
        console.log("Let's continue to the final question of this lesson.")
        interface.close();
    }
}

interface.question('Type your answer below:\n', greeting)





