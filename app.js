console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue; 
    } else {
        console.log(i);
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++){
    if (i %3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ"); 
          
    } else {
        if (i % 3 == 0) {
           console.log(i,"FIZZ");
        } else if (i % 5 == 0) {
            console.log(i,"BUZZ"); 
    
        } else {
            console.log(i);
        }
    }
}


for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;  
    }
    
}

if (i==n) {
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
}
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start,end);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "Fizz"
    }

    if (i % buzzDivisor == 0) {
        output += "Buzz"
    }
    console.log(`${i} ${output}`);
}

