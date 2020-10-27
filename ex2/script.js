var generateEl = document.getElementById("generate");

generateEl.addEventListener('click' , function(){
  var selectPaDiEl = document.getElementById("selectPaDi");
  var pariDisp = selectPaDiEl.value;
  var selectNumEl = document.getElementById("selectNum");
  var numPers = selectNumEl.value
  var numCons = Math.floor(Math.random() * (6 - 1)+ 1);
  console.log(numCons)
  var result = numPers + numCons ;
  var message = "hai perso"

  function evenOrNot(num){
    if (num % 2 == 0){
      return  'pari';
    }
    else {
      return 'dispari';
    }
  }
 console.log(evenOrNot(result));
 console.log(pariDisp);
  if(pariDisp == evenOrNot(result)){
    message = "hai vinto";
  }

  document.getElementById('morra').innerHTML = message

})
