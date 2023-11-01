var firstName: string = "Bob"
/*
var stands for variable, 
its how we are able to replace normal sentences or words 
we can also set booleans or numbers! *see below for more info 
 */
const profileName: string = 'Stacy'
//const works similarly but it cannot be redeclared *see below for more info
let userName: string = "i<3Coding"
//let is the same as var and can be redeclare but is only used in functions *See below for more info


console.log("Should be bob", firstName) 
console.log("Should be stacy", profileName)
console.log("Should be i<3coding", userName)

/*
EN: 'var, let, const explained'
* var; the scope, re-declaration and hoisting
    EN:Scope of the var 
    Scope when it comes to variables where these the you can use the variables 
    vars scope can be global scoped and function scoped 
    A global scoped var is when the var is declared outside of the function
    A function scoped varis when you declare the bug within the function

    CS: var sayHI: string = "Hi!"; ------> Global Scoped var
    CS: function hiFunction(){
    CS:  var hello: string = "hello" ------> Function Scoped var
    CS: }
    EN: var Redeclaration
    vars work in a casacading style meaning that you can assign a var and then re-assign the same variable. 
    
    CS: var slushyFlavor: string = "Smash-Berry"; 
    CS: var slushyFlavor: string = "Blueraz"; 

    Here we are re-assigning the slushlyFlavor var to 'Blueraz' 
    !Rememeber what you name your vars or you might accidently name theme the smae thing and cause confusion. 
    EN: Hoisting of var and Placement
    Hoisting in JavaScript or JavaScript based languages like TypeScript, is where variables and function declartions are moved to the top. 
    That means that if we put the var underneath the command it will give us an undefinded error. 
    If we do this: 
    CS: console.log(slushyFlavor); 
    CS: var slushyFlavor: string = 'Blueraz'; 
    Then the code will read it like this and throw us an undefined error;
    CS: var slushyFlavor; 
    CS: console.log(slushyFlavor); 
    CS: slushyFlavor = "Blueraz"; 
    Similarilary if we try to call a function scoped var outside of that function then we will get an error 
    CS: var slushyFlavor: string = 'Blueraz'; 
    CS: function mealCreator() {
    CS:    var pizzaFlavor: string = 'Supreme'; 
CS:  }; 
    CS: console.log(pizzaFlavor);
    will send us a pizzaFlavor is not defined error. 
    where as 
    CS: var slushyFlavor: string = 'Blueraz'; 
    CS: function mealCreator(): string {
    CS:     var pizzaFlavor: string = 'Supreme'; 
    CS:     console.log(pizzaFlavor, slushyFlavor);
   CS: }; 
   will work and will print Supreme and Blueraz in the terminal!
   EN: let and the Difference between it and var!
   let is now preferred for variable declaration because they are block scoped 
   Meaning that they you can use a let inside of a set of curly braces {}; 
   Say we are creating a function a let would work within that fuction, test, describe anything held within the {} braces.
   CS: function mealCreator(): string {
   CS:  let comboMealOne: string = "Cheese Burger with Fries and a Drink"; 
   CS:  let comboMealTwo: string = "Chicken Nuggets with Fries and a Drink"
   CS:  console.log(comboMealOne, comboMealTwo) ----> would work because its within the {}; 
   CS: }
   CS: console.log(comboMealOne, comboMealTwo) ----> would say that the combo meals are undefinded because its outside of the {}; 
   
   lets can be updated within its blocks but it cannot be re-dedeclared within scope blocks
   CS: let comboMealOne: string = "Cheese Burger with Fries and a Drink"; 
   CS: comboMealOne: string = "Bacon Cheese Burger with Fries and a Drink"; -----> will work
   CS: let comboMealTwo: string = "Chicken Nuggets with Fries and a Drink"; 
   CS: let comboMealTwo: string = "Spicy Chicken Nuggets with Fries and a Drink";  ----> wont work because the let is re-declaring
EN: Hoisting for let
   let also hoists to the top like var but the difference is that var is initialized or set at undefinded 
   let is not initialized so it will through us a Reference Error instead of an Undefinded error 
EN: const and the Difference Between the Three 
   const are block scoped just like lets but unlike lets and vars they cannot be updated down the line or re-declared; 
   CS: const comboMealOne = {
   CS:  entree: "Bacon Cheese Burger", 
   CS:  side: "Fries", 
   CS:  drink: "Coke Product"
   CS: } ----> is setting our const with some variables
   CS: comboMealOne = {
   CS:  entree: "Spicy Chicken Sandwich", 
   CS:  side: "Mac and Cheese", 
   CS:  drink: "Pepsi Product"
   CS: } -------> will not work because all of this is already assigned to the orignial const above. 
   we can however do something like this where we are updating a value within the const 
   CS: comboMealOne.drink = "Pepsi Product"
EN: Hoisting consts
    consts are the same as lets meaning that they are hoisted but they are not set to undefinded 
    so we will get a Reference Error instead of an undefinded error
 */

