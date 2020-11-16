const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("Now that we know formal opening greetings based on the time of day, let's learn how to respond to them.")
console.log("What if we want to ask them 'how are they doing'?")
console.log("How are you doing?")
console.log("'Come sta' is the proper formal response.")
console.log("Based on what you know")
console.log("It's morning in Milano and a middle-aged woman greets you in Italian, how do you respond?")

const greeting = function (guess) {
    console.log('You answered: ' + guess)
    if (guess.toLowerCase() === 'buongiorno come sta') {
        console.log(`That's right!`)
        interface.close();
    } else if (guess === 'buona notte come sta' || guess === 'buonasera come sta') {
        console.log("That's incorrect, the answer is 'Buongiorno come sta?'.");
        console.log("Let's continue plenty of opportunity to get it right.")
        interface.close();
    }
}

interface.question('Type your answer below:\n', greeting)











