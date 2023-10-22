// Code your solutions in this file
const names = (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length - 0; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}