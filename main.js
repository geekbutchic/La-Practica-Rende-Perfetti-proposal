const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


console.log('Formal greetings for different times of the day!');
console.log('Good Morning is Buongiorno');
console.log('Good Evening is Buonasera');
console.log('Good Night is Buona notte');
console.log('Based on what you know?')
console.log("It's after dinner and you are leaving the ristorante, what would the proper greeting be towards the hostess?")


const greeting = function (guess) {
    console.log('You answered: ' + guess)
    if (guess.toLowerCase() === 'buona notte') {
        console.log(`That's right!`)
        interface.close();
    } else if (guess === 'buonasera' || guess === 'buongiorno') {
        console.log("That's incorrect, the answer is 'Buona notte'.");
        console.log("Let's continue plenty of opportunity to get it right.")
        interface.close();
    }
}

interface.question('Type your answer below:\n', greeting)


