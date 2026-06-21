// return value  and early return

function abcd() {
  return 12;
}

let val = abcd();

console.log(val);




//First-Class Functions

function gret(gret){
  gret();
}

gret(function () {
  console.log("sfdsdfdff");
});




//Function likho jo even number ho to true, odd ho to false return kare.



function abcd(val){
     
         if(val%2 === 0)  return "true"

          return "false "

}

    console.log(abcd(6))



    //create Bmi calculator

function bmi(weight, height) {
  return weight / (height * height);
}

console.log(bmi(62, 1.7).toFixed(2));


