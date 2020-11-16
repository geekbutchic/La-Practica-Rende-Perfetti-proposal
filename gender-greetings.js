const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("So how do we greet somebody based on gender?")
console.log("Formal greetings for Sir and Ma'am based on gender")
console.log('Sir is Signore')
console.log("Ma'am is Signora")
console.log("Based on what you know, what would be the proper response?")
console.log("It's evening and you're headed to the movies, you arrive to the ticket counter and want to greet the gentleman, what would your opening greeting be?")

const greeting = function (guess) {
    console.log('You answered: ' + guess)
    if (guess.toLowerCase() === 'buonasera signore come sta') {
        console.log(`That's right!`)
        interface.close();
    } else if (guess === 'buona notte signora come sta' || guess === 'buona notte signore come sta' || guess === 'buongiorno signora come sta' || guess === 'buongiorno signore come sta') {
        console.log("That's incorrect, the answer is 'Buonasera signore come sta?'.");
        console.log("Let's continue plenty of opportunity to get it right.")
        interface.close();
    }
}

interface.question('Type your answer below:\n', greeting)



