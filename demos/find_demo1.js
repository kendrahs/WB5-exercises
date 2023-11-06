let numbers = [7, 9, 64, 60, 12, 13, 65, 62];


// without find

let firstNumberOver60;

for( let i = 0; i < numbers.length ; i++){
    if(numbers[i] > 60){
        firstNumberOver60 = numbers[i];
        break;
    }
}

console.log(`The first number over 60 is ${firstNumberOver60}`);

//with find 
function isOver60(someValue) {
   return (someValue > 60);
}

let firstNumberOver60UsingFind = numbers.find(isOver60);

console.log(`The first number over 60 is ${firstNumberOver60UsingFind}`);

