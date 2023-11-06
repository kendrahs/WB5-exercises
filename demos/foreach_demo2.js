let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];

function displayKid(arrayElement) {
console.log(arrayElement.first + " " + arrayElement.last);
   }
kids.forEach(displayKid);
       

for (i=0 ; i < kids.length; i++) {
    let description = `${kids}[i].last, ${kids}[i].first Age: ${kids}`
    console.log(description) 
}

console.log("///////////")

for(let kid of kids)(
    displayKid(kid)
)