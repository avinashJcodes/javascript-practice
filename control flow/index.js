
//  switch case 
let fruit = "apple"

 switch(fruit){

    case "banana":
      console.log("Yellow")
         break;
     case "orange":
       console.log("orange")
          break;
          case "apple":
            console.log("red")
            break ;
 }       


// Write a function getGrade(score) that:
// •   Takes a student’s marks (0 to 100)
// •   Returns the grade based on this logic:
// 90–100 A+
// 80–89 A
// 70–79 B
// 60–69 C
// 33–59 D
// 0–32 Fail
// Anything else     Invalid marks ❌

function getGrade(score) {
  if (score >= 90) {
    console.log("A+");
  } else if (score >= 80) {
    console.log("A");
  } else if (score >= 70) {
    console.log("b");
  } else if (score >= 60) {
    console.log("c");
  } else if (score >= 33) {
    console.log("D");
  } else {
    console.log("fail");
  }
}

getGrade(78);



//Number positive, negative ya zero hai — check karo

 function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} ek Positive number hai.`);
    } else if (num < 0) {
        console.log(`${num} ek Negative number hai.`);
    } else {
        console.log("Number Zero hai.");
    }
}

// Test cases
checkNumber(10);  // Positive
checkNumber(-5);  // Negative
checkNumber(0);   // Zero