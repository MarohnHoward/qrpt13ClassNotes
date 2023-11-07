let firstList: Array<number> = []

let candyBars: Array<string> = [
    "snickers", 
    "twix", 
    "payday"
]; 


// * Push adds items to our arrays. 

firstList.push(100); 
firstList.push(1000); 
firstList.push(10000); 
// * The array should now look like this internally firstList: Array<number> = [100,1000,10000];

console.log("The firstList should look like this", firstList); 
// * Pop takes the last thing or value added to your array, prints the item and then deletes it from the array. 
console.log("It should print and delete 'Payday'", candyBars.pop()); 
// * After using pop we should only get back "snickers" and "twix"
console.log("This should only have the two remaining values", candyBars); 
// * Arrays start at 0 adding [] with the value we are looking to get back it should print that item on the list. 
console.log("Should give us back 100", firstList[0]); 
console.log("should give back 1000", firstList[1]);