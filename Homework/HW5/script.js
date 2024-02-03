// function to select two cards at random
let drawCards = () => {
    const suit = ["hearts","diamonds","clubs","spades"]
    const value = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]

    for (d=0; d<5; d++) {

            let rand1 = Math.floor(Math.random() * 4)
            let rand2 = Math.floor(Math.random() * 13)

        // display cards on screen in HTML element
        document.getElementById("hand").innerHTML += value[rand2] + " of " + suit[rand1] + "<br>";
    }
}