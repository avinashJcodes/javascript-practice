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
