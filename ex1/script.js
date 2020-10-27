var input = prompt("scegli una parola da testare per vedere se è paliondroma")

function  addReverse(input) {
  var separazione = input.split("")
  separazione.reverse("");
  return separazione.join("");
}

console.log(addReverse("ciao"))
console.log(addReverse("anna"))

function test (input){
  var message = 'non è palindroma';
  if(input == addReverse(input)){
  message = 'hai vinto sono palindromi';
  }
  return message
}
console.log(test("anna"))
document.getElementById("result").innerHTML = test(input);
