 // how to use  break in  loop 
 for(let i =1; i<101 ; 1++){

    console.log(i)
    if(i===32) {

        break;
    }
 }


 //Q1. Print numbers from 1 to 10 using a for loop.
   
for (let i = 1; i < 11; i++) {
  console.log(i);
}


//Q2. Print numbers from 10 to 1 (in reverse order) using a while loop


     
          let i = 10; 

         while(i>0){
                console.log(i)
                 i--;
         }



         // Q3. Print only the even numbers from 1 to 20 using a for loop.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
     

//Q4. Print only the odd numbers from 1 to 15 using a while loop./

let i = 1;

while (i <= 15) {
  if (i % 2 === 1) {
    console.log(i);
  }

  i++;
}

//Q5. Print the multiplication table of 5 (i.e., $5 \ti//mes 1 = 5$, $5 \times 2 = 10$, up to $5 \times 10 = 50$) using a loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i} `);
}

  // using while loop

let i = 1;

while (i <= 10) {
  console.log(`5 * ${i} = ${5 * i}`);

  i++;
}


//Q6. Find the sum of all numbers from 1 to 100 using a loop and print the final total at the end.

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);



// using for loop

let sum = 0;
let i = 1;

while (i <= 100) {
  sum = sum + i;

  i++;
}

console.log(sum);


// Question 7: Print all numbers between 1 to 50 that are divisible by 3

     for(let i = 1 ; i<=50; i++){

        if(i%3 === 0) 
          console.log(i)

     }


     //## Question 8: Ask the user for a number and print whether each number from 1 to that number is even or odd.

let val = prompt("give a number");

for (let i = 1; i <= val; i++) {
  if (i%2 === 0)
    {
           console.log(`${i} is even number `);
    }
  else {
    console.log(`${i} is odd number `);
  }
}


//"Count how many numbers between 1 to 100 are divisible by both 3 and 5."

   for(let i = 1; i<=100; i++){
           if(i%3===0 && i%5=== 0 ){

            console.log(i)
           }
   }


   //1 se 30 tak loop chalao:

//3 se divide ho → "Fizz"
//5 se divide ho → "Buzz"
//3 aur 5 dono se divide ho → "FizzBuzz"
//warna number print karo




         for( let i = 1; i<=30; i++){

             if (i%3 === 0 && i%5 === 0 ){

                    console.log("FizzBuzz")
             } else if(i%5 === 0){
                   console.log("Buzz")
             }   else if (i%3 === 0){

                  console.log("Fizz")
             } else{

                   console.log(i)
             }

         }
       
