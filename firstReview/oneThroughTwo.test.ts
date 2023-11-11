//SETTING VARIABLES REVIEW
var numberOne: number = 10; 
var numberTwo: number = 5; //! numbers are just number outside of the quotations 
var stringOne: string = "word"; //! strings are anything with in quotations; 
var stringTwo: string = "two"; 
var booleanOne: boolean = true; //! are true or false statements 
var booleanTwo: boolean = false; 

describe("should add variables", () => {
    it("should add numbers", () => {
        expect(numberOne + numberTwo).toEqual(15); 
        expect(numberOne - numberTwo).toEqual(5); 
    }); 
    it("should not pass with capital letters", () => {
        expect(stringOne).not.toBe("WoRd"); 
        expect(stringTwo).toBe("two"); 
    }); 
    it("should compare the booleans", () => {
        expect(booleanOne).not.toEqual(booleanTwo); 
    }); 
}); 

function wordPass(word:string): string {
    if(word === "first") {
        return "This is the first option"; 
    } else if (word === "second") {
        return "This is the second option"; 
    } else {
        return "You only have two options!"; 
    }; 
}; 

describe("it should use the function correctly", () => {
    it("should pass this is the first option", () => {
        expect(wordPass("first")).toBe("This is the first option"); 
    }); 
    it("should pass the second option", () => {
        expect(wordPass("second")).toBe("This is the second option"); 
    }); 
    it("should yell at us", () => {
        expect(wordPass("Literally Anything")).toBe("You only have two options!"); 
    }); 
}); 