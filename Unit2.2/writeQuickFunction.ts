function makeAMeal(order: string): string {
    console.log(order); 
    return order + " $12.99"; 
}; 

let firstOrder = makeAMeal("Two Double Cheese Burgers, Onion Rings, and A Root Beer"); 
let secondOrder = makeAMeal("Spicy Chicken Sandwich, Fries, and A Dr. Pepper"); 
let thirdOrder = makeAMeal("10 Piece Chicken Nugget with BBQ Sauce, Fries, and a Pepsi"); 

console.log(firstOrder); 
console.log(secondOrder); 
console.log(`To Go Order For Mars: ${thirdOrder}`); 