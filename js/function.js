/*functionality of lucky sevens game in javascript*/

function luckySevens() {
    var initialBet = document.getElementById("initialBet").value;  //getting bets
    var money = 0; 
    var die1 = 0;
    var die2 = 0;
    var dice = 0;
    var rollTally = 0;
    var money = initialBet;
    var moneyHeld = [initialBet];
    var unLuckyCounter = 0;
    var win = 4;
    var loss = 1;
    var numRolls=0;

 // checking for betting placment
    if (money <= 0) {
        alert("No Value. Please insert positive Number.");
        return false;
    } else {
        do {
            // rolling the dice
            rollTally++;
            die1 = Math.floor(Math.random() * 6) + 1;    
            die2 = Math.floor(Math.random() * 6) + 1;
            dice = die1 + die2;

            // winning
            if (dice == 7) {        //check if the sum is 7
                money = parseFloat(money) + win; // add $4 to money used to make bets   
                var last_element = moneyHeld[moneyHeld.length - 1];// get value of last element of moneyHeld array that is used to show current money held by player after last roll
                var last_updated = parseFloat(last_element) + win; // adds $4 to previous roll winnings and stores in last_updated
                moneyHeld.push(last_updated);

            // losing
            } else {
                money--;
                unLuckyCounter++;
                var last_element = moneyHeld[moneyHeld.length - 1];
                var last_updated = parseFloat(last_element) - loss;
                moneyHeld.push(last_updated);
                rollTally = rollTally++;
            }


        } while (money > 0); // keeping track of results

        var totalMax = 0;

        totalMax = Math.max.apply(Math, moneyHeld);// finds max value in moneyHeld
        numRolls = moneyHeld.indexOf(totalMax);// finds number of rolls till max moneyHeld
        if (numRolls < 1) {
            numRolls = 0;
        }

        //display results
        document.getElementById("p2").innerHTML = "Play Again";
        document.getElementById("startbet").innerHTML =("$" +parseFloat(initialBet).toFixed(2));
        document.getElementById("totalroll").innerHTML = (rollTally);
        document.getElementById("highestwon").innerHTML =("$" + parseFloat(totalMax).toFixed(2));
        document.getElementById("rollcount").innerHTML = (numRolls);
        return false; 
    }
   
}  // end of game function