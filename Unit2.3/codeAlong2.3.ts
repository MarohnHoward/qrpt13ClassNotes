console.log("Our Object\n"); 

var myPerson = {
    firstName: "Arthur", 
    lastName: "Morgan", 
    age: "35"
}; 

console.log(`Our person \n Name: "${myPerson.firstName} ${myPerson.lastName}"\n Age: ${myPerson.age}`); 

console.log("\nOur Array\n"); 

var iceCreamFlavor: Array<string> = [
    "Strawberry", 
    "Mint Chocolate Chip", 
    "Chocolate", 
    "Cookie & Cream", 
    "Lemon", 
    "Coffee"
]; 

iceCreamFlavor.forEach((flavor, i) => {
    console.log(`${i + 1}. ${flavor}`);
}); 

console.log("\n Array of Objects \n")

var people = [
    {
        firstName: "Arthur", 
        lastName: "Morgan", 
        age: 35
    }, 
    {
        firstName: "John", 
        lastName: "Marston", 
        age: 26
    }, 
    {
        firstName: "Sadie", 
        lastName: "Adler", 
        age: 25
    }
]

people.forEach((person) => {
    console.log(`Person: \n "${person.firstName} ${person.lastName}"\n Age: ${person.age}`); 
}); 

console.log("\nAn Object with An Array\n"); 

var personWithIceCream = {
    firstName: "Arthur", 
    lastName: "Morgan", 
    age: 36, 
    favoriteIceCreams: [
        "Strawberry", 
        "Mint Chocolate Chip", 
        "Chocolate", 
        "Cookie & Cream", 
        "Lemon", 
        "Coffee"
    ],
};

personWithIceCream.favoriteIceCreams.forEach((flavor) => {
    console.log(`If ${personWithIceCream.firstName} ${personWithIceCream.lastName} could only eat one kind of ice cream it would be ${flavor}`);
}); 