const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("So how to we greet somebody based on gender?")
console.log("Formal greetings for Sir and Ma'am based on gender")
console.log('Sir is Signore')
console.log("Ma'am is Signora")
console.log("Based on what you know, what would be the proper response")
console.log("It's evening and you're headed to the movies, you arrive to the ticket counter, what would your opening greeting be?")

const greeting = function (guess) {
    console.log('You answered: ' + guess)
    if (guess === 'Buonasera signore come sta') {
        console.log(`That's right!`)
        interface.close();
    } else if (guess === 'Buona notte signora come sta' || guess === 'Buona notte signore come sta' || guess === 'Buongiorno signora come sta' || guess === 'Buongiorno signore come sta') {
        console.log("That's incorrect, the answer is 'Buonasera signore come sta?'.");
        console.log("Let's continue plenty of opportunity to get it right.")
        interface.close();
    }
}

interface.question('Type your answer below:\n', greeting)



