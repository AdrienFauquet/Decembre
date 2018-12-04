// function diceRand1() {
//     return Math.random();
// }
// document.write(diceRand1() + "<br>");

// function diceRand2() {
//     return Math.random() * 100;
// }
// document.write(diceRand2() + "<br>");

// function diceRand3(min, max) {
//     return Math.random() * (min * max) / (min + max);
// }
// document.write(diceRand3(30, 45) + "<br>");

function diceRand4a(a) {
    for (i = 0; i < a; i++) {
            document.write("yo <br>");
    }
}
function diceRand4(a) {
    for (i = 0; i < a; i++) {
        setTimeout(function () {
            document.write("yo");
        }, 1000)
    }
}
diceRand4a(1050);
diceRand4(10);

// setTimeout(diceRand4(), 5000);

// (function theLoop (i) {
//     setTimeout(function () {
//       document.write(Math.random());
//       if (--i) {          // If i > 0, keep going
//         theLoop(i);       // Call the loop again, and pass it the current value of i
//       }
//     }, 3000);
//   })(10);

// function myClick(){
//     document.write(Math.random()*10);
// }



