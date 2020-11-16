const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("Final question of this lesson.")
console.log("You are leaving the ristorante, and want to say good night to the male waiter.")
console.log("Based on what you know, what would be the proper response?")
console.log("Remember the time of day and gender.")

const greeting = function (guess) {
    console.log('You answered: ' + guess)
    if (guess.toLowerCase() === 'buona notte signore') {
        console.log(`That's right, bravissimo!`)
        interface.close();
    } else if (guess === 'buongiorno signora' || guess === 'buongiorno signore' || guess === 'buonasera signora' || guess === 'buonasera signore' || guess === 'buona notte signora') {
        console.log("That's incorrect, the answer is 'Buona notte signore'.");
        console.log("Go back and review for the next lesson, always remember 'La practica rende perfetti - Practice makes perfect'!")
        interface.close();
    }
}

interface.question('Type your answer below:\n', greeting)




